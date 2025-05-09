<script>
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import BotonFlotante from '$lib/BotonFlotante.svelte';
  import { fade, fly } from 'svelte/transition'; // Importa las transiciones
  export const prerender = true;


  let activeTab = 'descripcion';

  const tabs = [
    { name: 'Descripción', key: 'descripcion' },
    { name: 'Requisitos', key: 'requisitos' },
    { name: 'Beneficios', key: 'beneficios' }
  ];
</script>

<Navbar />
<BotonFlotante />
<!-- Fondo decorativo -->
<div class="w-full h-full absolute top-0 left-0 right-0 z-0">
  <div class="w-full h-1/3 bg-gradient-to-b from-verde to-[#C8FF96]"></div>
  <div class="w-full h-2/3 bg-gradient-to-b from-[#388E3C] to-[#81C784]"></div>
  <div class="w-full h-1/3 bg-[var(--color-blanco)]"></div>
</div>



<!-- Título -->
<div class="absolute top-12 left-5 p-16 z-10">
  <h1 class="text-4xl font-bold text-green-900"in:fly={{ y: -50, duration: 800 }}>TARJETAS</h1>
</div>





<main class="mt-16">
  <div class="min-h-screen bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)] flex flex-col items-center py-12 relative">


    <div class="w-full h-50 bg rounded-lg mb-1">
      <img src="/images/TARJETAS/TARJETAS.png" alt="Imagen de presentación" class="w-full h-full object-cover rounded-lg"/>
    </div>

    <!-- Contenedor principal (más grande y profesional) -->
    <div class="max-w-6xl w-full bg-white shadow-2xl rounded-xl p-10 mt-16 z-10 flex flex-col md:flex-row gap-10 relative">



      
      <!-- Imagen izquierda -->
      <div class="md:w-1/2 flex flex-col justify-center items-center">
        <h2 class="text-3xl font-bold text-green-800 mb-4">TARJETA DE DÉBITO </h2>

        <div class="border-4 border-yellow-400 rounded-lg overflow-hidden w-full h-72">
          <img
            src="/images/TARJETAS/TDEBITO.png"
            alt="Imagen lateral"
            class="object-cover w-full h-full"
          />
        </div>
      </div>

      <!-- Tabs a la derecha -->
      <div class="md:w-1/2">
        <!-- Navegación de Tabs -->
        <div class="flex border-b border-gray-300 mb-4">
          {#each tabs as tab}
            <button
              class="px-4 py-2 text-sm font-semibold transition duration-200"
              class:selected={activeTab === tab.key}
              on:click={() => activeTab = tab.key}
              class:bg-green-200={activeTab === tab.key}
              class:text-green-800={activeTab === tab.key}
              class:text-gray-600={activeTab !== tab.key}
            >
              {tab.name}
            </button>
          {/each}
        </div>

        <!-- Contenido del tab (texto justificado y profesional) -->
        <div class="text-gray-700 space-y-0 text-justify leading-relaxed">
          {#if activeTab === 'descripcion'}
            <p>
              Te permite acceder a tu cuenta de ahorro, y realizar
              operaciones de forma rápida y segura.
              Realiza tus transacciones con mayor rapidez,
              comodidad, tranquilidad y seguridad y te brinda la
              posibilidad de acceder a una extensa red de cajeros
              automáticos y comercios afiliados a la marca VISA, a
              nivel nacional e internacional.
            </p>
          {:else if activeTab === 'requisitos'}
            <ul class="list-disc list-inside space-y-0">
              <li>Presentar DUI</li>
              <li>Poseer Cuenta de Ahorro ACTIVA</li>
            </ul>
          {:else if activeTab === 'beneficios'}
            <ul class="list-disc list-inside space-y-0">
              <li>Acceso a fondos de efectivo en todo momento.</li>
              <li>Sin costo y sin membresía.</li>
              <li>Acceso a los comercios y redes de cajeros automáticos que estén afiliados a la
                red de VISA a nivel local e internacional.</li>
              <li>Acumulas FEDEPUNTOS por realizar pagos.</li>
              <li>Descuentos y promociones en comercios afiliados.</li>
              <li>Notificación de compras por medios de mensajes de texto al número de teléfono
                celular que nos has proporcionado.</li>
                <li>Los retiros en ventanilla son siempre gratis.</li>
                <li>Ya no tendrá que hacer filas para retirar efectivo, consultar saldos o realizar
                  pagos de servicios básicos.</li>  
            </ul>
          {/if}
        </div>
      </div>

      <!-- Botón en la parte inferior derecha del contenedor -->
      <a
        href="/SOLICITUD"
        class="absolute bottom-4 right-4 bg-verde text-white px-6 py-3 rounded-full shadow-md hover:bg-amarillo hover:text-verde transition-all text-lg font-semibold hover:scale-105"
      >
        ¡Solicita Aquí!
      </a>

    </div>
  </div>
</main>

<Footer />

<style>
  button[selected] {
    @apply border-b-2 border-green-700;
  }
</style>
