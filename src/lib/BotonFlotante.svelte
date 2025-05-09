<script>
  import { goto } from '$app/navigation';
  let mostrarTooltip = false;

  function irAPrestamos() {
    goto('/CALCUPRESTAMO');
  }
</script>

<div class="fixed bottom-1 right-1 z-50 flex flex-col items-center">
  <button
    on:click={irAPrestamos}
    on:mouseenter={() => mostrarTooltip = true}
    on:mouseleave={() => mostrarTooltip = false}
    class="w-14 h-14 rounded-full border-2 border-red-600 animate-color-pulse focus:outline-none hover:scale-125 transition-transform duration-200 flex items-center justify-center text-2xl text-white bg-amarillo shadow-lg"
    aria-label="Ir a préstamos"
  >
    <!-- Giro 3D -->
    <span class="animate-spin3d inline-block">$</span>
  </button>

  <div
    class="mt-2 px-3 py-1 text-sm text-white bg-verde rounded shadow-lg transition-opacity duration-100"
    class:opacity-0={!mostrarTooltip}
    class:opacity-100={mostrarTooltip}
    class:pointer-events-none={!mostrarTooltip}
  >
  Calculadora de préstamo 
  </div>
</div>
