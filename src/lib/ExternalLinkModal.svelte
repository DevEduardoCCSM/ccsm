<!-- src/lib/ExternalLinkModal.svelte -->
<script>
  export let visible = false;
  export let url = '';
  export let onConfirm = () => {};
  export let onCancel = () => {};
</script>

{#if visible}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded shadow-md max-w-md text-center text-verde">
      <p class="mb-4">"Está a punto de abandonar nuestro sitio web Caja de crédito San Martin. Tenga en cuenta que no nos hacemos responsables por el contenido o la seguridad del sitio externo al que será redirigido."</p>
      <div class="flex justify-center gap-4">
        <button class="bg-verde text-white hover:bg-amarillo hover:text-verde px-5 py-2 rounded-md text-lg font-semibold transition-all hover:scale-105" on:click={onCancel}>Cancelar</button>
          <button class="bg-verde text-white hover:bg-amarillo hover:text-verde px-5 py-2 rounded-md text-lg font-semibold transition-all hover:scale-105" on:click={() => onConfirm(url)}>Continuar</button>
      </div>
    </div>
  </div>
{/if}
