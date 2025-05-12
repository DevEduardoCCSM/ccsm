<!-- src/lib/SafeLink.svelte -->
<script>
  import ExternalLinkModal from './ExternalLinkModal.svelte';
  import { onMount } from 'svelte';

  export let href = '';
  export let target = '_blank';
  export let rel = 'noopener noreferrer';

  let isExternal = false;
  let showModal = false;
  let tempUrl = '';



  function handleClick(event) {
    if (isExternal) {
      event.preventDefault();
      tempUrl = href;
      showModal = true;
    }
  }

  function confirmRedirect(url) {
    window.open(url, target);
    showModal = false;
  }

  function cancelRedirect() {
    showModal = false;
  }

  onMount(() => {
    try {
      const linkHost = new URL(href, window.location.href).host;
      const currentHost = window.location.host;
      isExternal = linkHost !== currentHost;
    } catch {
      isExternal = false;
    }
  });
</script>

<!-- Pasamos todos los props extra al <a> usando $$restProps -->
<ExternalLinkModal
  visible={showModal}
  url={tempUrl}
  onConfirm={confirmRedirect}
  onCancel={cancelRedirect}
/>

<a
  href={href}
  target={target}
  rel={rel}
  on:click={handleClick}
  {...$$restProps}
>
  <slot />
</a>
