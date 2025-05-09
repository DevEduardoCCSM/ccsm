<script>
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  export const prerender = true;


  let tipoTrabajador = '';
  let tipoPrestamo = '';
  let monto = 0;
  let resultado = null;
  let showModal = false;

  const prestamos = {
    personal: { interes: 0.20, plazo: 5 },
    vivienda: { interes: 0.18, plazo: 20 },
    empresarial: { interes: 0.21, plazo: 10 },
    micro: { interes: 0.36, plazo: 1 },
  };

  function calcularPrestamo() {
    if (tipoPrestamo && monto > 0) {
      const { interes, plazo } = prestamos[tipoPrestamo];
      const r = interes / 12;
      const n = plazo * 12;
      const cuota = (monto * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      resultado = cuota;
      showModal = true;
    }
  }

  function cerrarModal() {
    showModal = false;
  }
</script>

<Navbar />

<main class="mt-4 relative z-10">
  <div class="min-h-screen bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)] flex flex-col justify-start items-center py-12 relative">

    <!-- Fondo decorativo con pointer-events-none -->
    <div class="w-full h-full absolute top-0 left-0 right-0 z-0 pointer-events-none">
      <div class="w-full h-1/3 bg-gradient-to-b from-verde to-[#C8FF96]"></div>
      <div class="w-full h-2/3 bg-gradient-to-b from-[#388E3C] to-[#81C784]"></div>
      <div class="w-full h-1/3 bg-[var(--color-blanco)]"></div>
    </div>

    <!-- Contenedor principal -->
    <div class="max-w-4xl w-full bg-white shadow-2xl rounded-lg p-6 sm:p-8 mt-16 z-10 relative">
      <div class="w-full h-48 sm:h-56 bg-gray-300 rounded-lg mb-6">
        <img src="images/banner.jpg" alt="Imagen de presentación" class="w-full h-full object-cover rounded-lg" loading="lazy" />
      </div>

      <!-- Formulario -->
      <div class="max-w-xl mx-auto bg-white rounded-lg shadow-lg space-y-4">
        <h1 class="text-xl sm:text-2xl font-bold text-verde">CALCULADOR DE PRÉSTAMO</h1>

        <!-- Tipo de trabajador -->
        <div>
          <label for="tipo-trabajador" class="block mb-1 text-sm font-medium text-gray-700">Tipo de trabajador:</label>
          <select id="tipo-trabajador" bind:value={tipoTrabajador} class="w-full p-2 border rounded">
            <option value="" disabled selected>Seleccione</option>
            <option value="asalariado">Asalariado</option>
            <option value="no_asalariado">No Asalariado</option>
          </select>
        </div>

        <!-- Tipo de préstamo -->
        {#if tipoTrabajador}
          <div>
            <label for="tipo-prestamo" class="block mb-1 text-sm font-medium text-gray-700">Tipo de préstamo:</label>
            <select id="tipo-prestamo" bind:value={tipoPrestamo} class="w-full p-2 border rounded">
              <option value="" disabled selected>Seleccione</option>
              <option value="personal">Préstamo Personal</option>
              <option value="vivienda">Préstamo Vivienda</option>
              <option value="empresarial">Préstamo Empresarial</option>
              <option value="micro">Micropréstamo</option>
            </select>
          </div>
        {/if}

        <!-- Monto a solicitar -->
        {#if tipoPrestamo}
          <div>
            <label for="monto" class="block mb-1 text-sm font-medium text-gray-700">Monto a solicitar ($):</label>
            <input id="monto" type="number" bind:value={monto} class="w-full p-2 border rounded" placeholder="Ej: 10000" min="100" />
          </div>

          <!-- Botón calcular -->
          <button on:click={calcularPrestamo} class="mt-4 bg-verde hover:bg-amarillo text-white hover:text-verde py-2 px-4 rounded">
            Calcular Préstamo
          </button>
        {/if}
      </div>

      <!-- Botón para regresar -->
      <div class="flex justify-center mt-10">
        <button on:click={() => history.back()} class="bg-verde text-white hover:bg-amarillo hover:text-verde px-6 py-2 rounded-md text-lg font-semibold transition-all hover:scale-105">
          <i class="fas fa-arrow-left mr-2"></i> REGRESAR
        </button>
      </div>
    </div>

    <!-- Modal de resultado -->
    {#if showModal}
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full space-y-4">
          <img src="/images/banco.jpg" alt="" class="w-24 h-24 mx-auto" loading="lazy" />
          <h2 class="text-xl font-bold text-verde">Resultado del cálculo</h2>
          <p class="text-gray-700">Cuota mensual estimada: <strong>${resultado.toFixed(2)} USD</strong></p>
          <p class="text-sm text-gray-600">Para más información, contáctanos al:</p>
          <p class="font-medium text-gray-800">📞 Teléfono: 2528-5000</p>
          <p class="font-medium text-verde">
            💬 WhatsApp: <a href="https://wa.me/50370000000" target="_blank" class="underline">Enviar mensaje</a>
          </p>
          <button on:click={cerrarModal} class="mt-4 bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded">
            Cerrar
          </button>
        </div>
      </div>
    {/if}
  </div>
</main>

<Footer />
