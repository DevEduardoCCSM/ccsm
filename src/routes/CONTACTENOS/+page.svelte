<script>
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import { onMount } from 'svelte';
  import BotonFlotante from '$lib/BotonFlotante.svelte';
  import { fade, fly } from 'svelte/transition'; // Importa las transiciones
  export const prerender = true;


  let nombre = '';
  let telefono = '';
  let email = '';
  let direccion = '';
  let mensaje = '';
  let showModal = false;
  let errorMsg = '';

  // Validación básica
  function esEmailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const limpiarFormulario = () => {
    nombre = '';
    telefono = '';
    email = '';
    direccion = '';
    mensaje = '';
  };

  const enviarMensaje = () => {
    // Validaciones
    if (!nombre || !telefono || !email || !direccion || !mensaje) {
      errorMsg = 'Por favor completa todos los campos.';
      return;
    }

    if (!esEmailValido(email)) {
      errorMsg = 'El email no es válido.';
      return;
    }

    // Si pasa validaciones
    errorMsg = '';

    const texto = `*Nuevo mensaje desde la web:*\n\n👤 *Nombre:* ${nombre}\n📞 *Teléfono:* ${telefono}\n📧 *Email:* ${email}\n📍 *Dirección:* ${direccion}\n📝 *Mensaje:* ${mensaje}`;

    const whatsappURL = `https://wa.me/50377424422?text=${encodeURIComponent(texto)}`;
    window.open(whatsappURL, '_blank');

    showModal = true;
    limpiarFormulario();
  };
</script>

<Navbar />




<main class="mt-3">

    <BotonFlotante />
  
    <div class="min-h-screen bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)] flex flex-col justify-start items-center py-20">
      <!-- Fondo dividido en 3 colores -->
      <div class="w-full h-full absolute top-0 left-0 right-0 z-0">
        <div class="w-full h-1/3 bg-gradient-to-b from-verde to-[#C8FF96]"></div>
        <div class="w-full h-2/3 bg-gradient-to-b from-[#388E3C] to-[#81C784]"></div>
        <div class="w-full h-1/3 bg-[var(--color-blanco)]"></div>
      </div>
    

  <div class="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 mt-10 z-10">

    <!-- Imagen de portada -->
    <div class="w-full max-w-5xl z-10 mb-12">
      <img src="images/contactanos.jpg" alt="" class="rounded-lg shadow-md w-full h-45 object-cover" />
   
    </div>
 <!-- Barra orange -->
 <div class="relative pt-1">
  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
    <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
  </div>
</div>

   <!-- Tarjetas de contacto -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full z-10 mb-12">
  <!-- Columna izquierda -->
  <div class="space-y-6">
    <!-- Redes sociales -->
    <div class="bg-verde p-11 rounded-lg shadow-md flex items-center gap-6">
      <!-- Contenedor de iconos con sus imágenes debajo -->
      <div class="flex space-x-8">
        <!-- Facebook -->
        <div class="flex flex-col items-center group transition duration-300 transform hover:scale-150">
          <a href="https://www.facebook.com/CajadeCreditoSanMartin/?locale=es_LA" target="_blank" aria-label="Facebook"
            class="text-amarillo group-hover:text-blue-600">
            <i class="fab fa-facebook-f text-2xl"></i>
          </a>
          <img src="/images/QR/qrf.png" alt="FB" class="w-20 h-20 mt-1 opacity-80 group-hover:opacity-100" />
        </div>
    
        <!-- WhatsApp -->
        <div class="flex flex-col items-center group transition duration-300 transform hover:scale-150">
          <a href="https://wa.me/50377424422" target="_blank" aria-label="WhatsApp"
            class="text-amarillo group-hover:text-white">
            <i class="fab fa-whatsapp text-2xl"></i>
          </a>
          <img src="/images/QR/qrw.png" alt="WA" class="w-20 h-20 mt-1 opacity-80 group-hover:opacity-100" />
        </div>
    
        <!-- Instagram -->
        <div class="flex flex-col items-center group transition duration-300 transform hover:scale-150">
          <a href="https://www.instagram.com/Cajasanmartin/" target="_blank" aria-label="Instagram"
            class="text-amarillo group-hover:text-pink-600">
            <i class="fab fa-instagram text-2xl"></i>
          </a>
          <img src="/images/QR/qri.png" alt="IG" class="w-20 h-20 mt-1 opacity-80 group-hover:opacity-100" />
        </div>
      </div>
    
      <!-- Texto -->
     
    </div>
    

   
  </div>

  <!-- Columna derecha -->
  <div class="space-y-6">
   

<!-- Teléfonos -->
<div class="bg-verde p-6 rounded-lg shadow-md flex items-start gap-3">
  <i class="fas fa-phone-alt text-amarillo text-2xl mt-4"></i>
  <div class="flex flex-col">
    <p class="text-white">+503 2528-5000</p>
    <p class="text-white">+503 7742-4422</p>
  </div>
</div>

    <!-- Correo -->
    <div class="bg-verde p-6 rounded-lg shadow-md flex items-start gap-4">
      <i class="fas fa-envelope text-amarillo text-2xl mt-1"></i>
      <p class="text-white">r.social@ccsmartin.com.sv</p>
    </div>
  </div>


  
</div>


  <!-- Contenedor de dos columnas -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100 rounded-lg shadow-lg p-8 max-w-5xl w-full z-10">
  <!-- Columna izquierda: texto + mapa -->
  <div class="space-y-4">
    <h2 class="text-2xl font-semibold text-verde">AGENCIA CENTRAL CAJA CREDITO SAN MARTIN</h2>
    <p class="text-gray-700">
      Nuestra Agencia Central está ubicada en Edif. Juan Ovidio Hernández Palacios, Final Av. Morazán km 18, San Martín, San Salvador, CP 1129. Puedés encontrarnos en la siguiente dirección:
    </p>

    <!-- Enlace para abrir mapa en nueva pestaña -->
    <a
      href="https://www.google.com/maps?q=Edif.Juan+Ovidio+Hernández+Palacios,+Final+Av.+Morazan+km+18,+CP+1129"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block text-verde hover:text-verde font-medium hover:underline transition"
    >
      📍 Ver en Google Maps
    </a>

    <!-- Mapa embebido -->
    <div class="w-full h-64 rounded-md overflow-hidden shadow">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.234609421893!2d-89.0553766!3d13.735181299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63462cd8ed7a33%3A0xef454fa71ebaf225!2sCaja%20de%20Cr%C3%A9dito%20de%20San%20Mart%C3%ADn!5e1!3m2!1ses!2ssv!4v1745263847126!5m2!1ses!2ssv" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>

  <!-- Columna derecha: formulario -->
  <div class="lg:border-l lg:pl-8">
    <h2 class="text-2xl font-semibold text-verde mb-6">ENVIANOS UN MENSAJE PARA CONTACTARTE! </h2>

    {#if errorMsg}
      <div class="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded">
        {errorMsg}
      </div>
    {/if}

    <!-- Formulario -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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

    <div class="mt-6">
      <label class="block text-sm font-medium text-verde mb-1">Mensaje</label>
      <textarea bind:value={mensaje} rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400"></textarea>
    </div>

    <div class="mt-6 text-right">
      <button on:click={enviarMensaje} class="btn bg-verde text-white hover:bg-amarillo hover:text-verde transition-all px-6 py-2 rounded-md text-sm font-semibold hover:scale-105">
        Enviar
      </button>
    </div>
  </div>
</div>


 <!-- Botón verde que lleva a una subruta interna -->
 <div class="flex justify-center">
  <a href="/NOSOTROS">
    <button class="bg-verde text-white mt-10 hover:bg-amarillo hover:text-verde px-5 py-2 rounded-md text-lg font-semibold transition-all hover:scale-105">
      <i class="fas fa-folder mr-2"></i> HISTORIA
    </button>
  </a>
</div>

</main>

<!-- Modal de confirmación -->
{#if showModal}
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
      <h3 class="text-xl font-semibold mb-4 text-verde">¡Muchas gracias por tu mensaje!</h3>
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



<Footer />