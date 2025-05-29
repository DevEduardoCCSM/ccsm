<script>

  import { onMount } from 'svelte';

  import { fade, fly } from 'svelte/transition';
  export const prerender = true;


  let nombre = '';
  let telefono = '';
  let email = '';
  let direccion = '';
  let mensaje = '';
  let tipoServicio = '';
  let showModal = false;
  let errorMsg = '';

  const numerosPorServicio = {
    creditos: '50376821032',
    cuentas: '50377424422',
    tarjetas: '50377424422',
    remesas: '50377424422',
    colecturia: '50377424422',
    inmueble: '50377424422'
  };

  const nombresServicio = {
    creditos: 'Créditos',
    cuentas: 'Cuentas de Ahorro',
    tarjetas: 'Tarjetas',
    remesas: 'Remesas',
    colecturia: 'Colecturía',
    inmueble: 'Compra de Inmueble'
  };

  function esEmailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const limpiarFormulario = () => {
    nombre = '';
    telefono = '';
    email = '';
    direccion = '';
    mensaje = '';
    tipoServicio = '';
  };

  const enviarMensaje = () => {
    if (!nombre || !telefono || !email || !direccion || !mensaje || !tipoServicio) {
      errorMsg = 'Por favor completa todos los campos.';
      return;
    }

    if (!esEmailValido(email)) {
      errorMsg = 'El email no es válido.';
      return;
    }

    const numero = numerosPorServicio[tipoServicio];
    if (!numero) {
      errorMsg = 'Selecciona un tipo de servicio válido.';
      return;
    }

    const servicioTexto = nombresServicio[tipoServicio] || tipoServicio;

    errorMsg = '';

    const texto = `*Nuevo mensaje desde la web Caja de Credito San Martin:*\n\n👤 *Nombre:* ${nombre}\n📞 *Teléfono:* ${telefono}\n📧 *Email:* ${email}\n📍 *Dirección:* ${direccion}\n📌 *Tipo de servicio:* ${servicioTexto}\n📝 *Mensaje:* ${mensaje}`;

    const whatsappURL = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(whatsappURL, '_blank');

    showModal = true;
    limpiarFormulario();
  };
</script>



<main class="mt-14 min-h-screen bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)] flex items-center justify-center px-4 py-20 relative">


  <!-- Fondo dividido en 3 colores con pointer-events-none para evitar bloquear los clics -->
  <div class="absolute inset-0 z-0 pointer-events-none">
    <div class="w-full h-1/3 bg-gradient-to-b from-verde to-[#C8FF96]"></div>
    <div class="w-full h-2/3 bg-gradient-to-b from-[#388E3C] to-[#81C784]"></div>
    <div class="w-full h-1/3 bg-[var(--color-blanco)]"></div>
  </div>

  <!-- Contenedor del formulario -->
  <div class="relative z-10 bg-white rounded-xl shadow-xl w-full max-w-5xl p-6 md:p-10">
    <!-- Encabezado -->
    <h2 class="text-3xl font-bold text-verde mb-6 text-center">FORMULARIO DE SOLICITUD</h2>
    <h2 class="text-1xl font-bold text-verde mb-6 text-center">Toda información brindada es confidencial.</h2>

    <!-- Barra orange -->
    <div class="relative pt-1">
      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
        <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
      </div>
    </div>

    {#if errorMsg}
      <div class="mb-6 p-4 bg-red-100 text-red-700 border border-red-300 rounded text-center">
        {errorMsg}
      </div>
    {/if}

    <!-- Formulario en 2 columnas en escritorio -->
    <div class="flex flex-col lg:flex-row gap-10">
      <!-- Columna izquierda -->
      <div class="flex-1 flex flex-col gap-4">
        <div>
          <label class="block text-sm font-medium text-verde mb-1">Nombre</label>
          <input type="text" bind:value={nombre} class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400" />
        </div>
        <div>
          <label class="block text-sm font-medium text-verde mb-1">Teléfono</label>
          <input type="text" bind:value={telefono} class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400" />
        </div>
        <div>
          <label class="block text-sm font-medium text-verde mb-1">Email</label>
          <input type="email" bind:value={email} class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400" />
        </div>
        <div>
          <label class="block text-sm font-medium text-verde mb-1">Dirección</label>
          <input type="text" bind:value={direccion} class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400" />
        </div>
      </div>

      <!-- Columna derecha -->
      <div class="flex-1 flex flex-col gap-4">
        <div>
          <label class="block text-sm font-medium text-verde mb-1">Tipo de servicio</label>
          <select bind:value={tipoServicio} class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400">
            <option value="" disabled selected>Seleccione una opción</option>
            <option value="creditos">Créditos</option>
            <option value="cuentas">Cuentas de Ahorro</option>
            <option value="tarjetas">Tarjetas</option>
            <option value="remesas">Remesas</option>
            <option value="colecturia">Colecturía</option>
            <option value="inmueble">Compra de Inmueble</option>
          </select>
        </div>
        <div class="flex-1">
          <label class="block text-sm font-medium text-verde mb-1">Mensaje</label>
          <textarea bind:value={mensaje} rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400 resize-none"></textarea>
        </div>
      </div>
    </div>

    <!-- Botón enviar -->
    <div class="mt-8 text-center">
      <button on:click={enviarMensaje} class="bg-verde text-white hover:bg-amarillo hover:text-verde transition-all px-8 py-3 rounded-md text-base font-semibold hover:scale-105">
        Enviar
      </button>
    </div>

    <!-- Botón para regresar a la página anterior -->
    <div class="flex justify-center mt-10">
      <button on:click={() => history.back()} class="bg-verde text-white hover:bg-amarillo hover:text-verde px-6 py-2 rounded-md text-lg font-semibold transition-all hover:scale-105">
        <i class="fas fa-arrow-left mr-2"></i> REGRESAR
      </button>
    </div>
  </div>
</main>

<!-- Modal de confirmación -->
{#if showModal}
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
      <h3 class="text-xl font-semibold mb-4 text-green-700">¡Muchas gracias por tu mensaje!</h3>
      <p class="text-gray-700 mb-6">Nos pondremos en contacto lo más rápido posible.</p>
      <button on:click={() => showModal = false} class="btn bg-verde text-white hover:bg-amarillo hover:text-verde transition-all px-6 py-2 rounded-md text-sm font-semibold hover:scale-105">
        Cerrar
      </button>
    </div>
  </div>
{/if}

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
</style>


