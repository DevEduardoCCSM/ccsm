<script>
  import { navigating } from '$app/stores';
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import BotonFlotante from '$lib/BotonFlotante.svelte';
  import Loader from '$lib/Loader.svelte';
    import "../tailwind.css";

  $: isNavigating = $navigating !== null;
</script>

{#if isNavigating}
  <Loader />
{/if}

<Navbar />

<main class="mt-16">
  <slot />
</main>

<BotonFlotante />
<Footer />
