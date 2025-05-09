<script>
    import {fade, fly } from 'svelte/transition';
    import Navbar from '$lib/Navbar.svelte';
    import "../tailwind.css";
   
    import { onMount } from 'svelte';
    import Footer from '$lib/Footer.svelte';
    import BotonFlotante from '$lib/BotonFlotante.svelte';
    import {  onDestroy } from 'svelte';
    export const prerender = true;

    
 

let showModal = false; // Inicialmente no se muestra

onMount(() => {
  const alreadyShown = sessionStorage.getItem('modalShown');
  if (!alreadyShown) {
    showModal = true;
  }
});

const closeModal = () => {
  showModal = false;
  sessionStorage.setItem('modalShown', 'true');
};
let currentIndex = 0;
  let bannerVisible = true;

  const images = [
    {
      src: '/images/CARUSELimg/caja2.jpg',
      alt: '',
      text: '72 AÑOS CONTIGO!',
      overlay: '/images/CARUSELimg/TIN.png',
      textAnimation: '', 
    },
    {
      src: '/images/CARUSELimg/FEDEBANKING.jpg',
      alt: '',
      text: 'NUESTROS SERVICIOS PARA TI!',
      overlay: '/images/CARUSELimg/FEDEMOV.png',
      textAnimation: '', 
    },
    {
      src: '/images/CARUSELimg/TARJETAS DE CREDITO.jpg',
      alt: '',
      text: 'DISFRUTA, VIVE Y GANA CON NUESTRAS TARJETAS!',
      overlay: '/images/CARUSELimg/FEDEPUNTOS.png',
      textAnimation: '', 
    },
    {
      src: '/images/CARUSELimg/CUENTA INFANTIL.jpg',
      alt: '',
      text: 'ACOMPAÑANDOTE SIEMPRE...',
      overlay: '/images/CARUSELimg/MANITA.png',
      textAnimation: '', 
    }
  ];

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
    }, 5000);

    return () => clearInterval(interval);
  });

import Loader from '$lib/Loader.svelte';
  import { navigating } from '$app/stores';

  $: isNavigating = $navigating !== null;

 



</script>

{#if showModal}
<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
  <div class="bg-white rounded-lg shadow-lg max-w-md w-full relative p-8">
    <div class="flex justify-end">
      <button on:click={closeModal} class="text-gray-500 hover:text-red-500 font-bold text-lg">✕</button>
    </div>
    <img src="/images/MODALimg/madre.webp" alt="" class="w-full h-auto rounded" />
    <div class="mt-4 text-center">
      <p class="text-xl font-bold text-verde">¡AVISO!</p>
      <p class="text-gray-700">Feliz dia de la madre!  <strong>Estaremos fuera de labores  10 de Mayo.</strong>.</p>
      <button class="mt-4 px-4 py-2 bg-verde text-white rounded hover:bg-amarillo hover:text-verde" on:click={closeModal}>
        CERRAR
      </button>
    </div>
  </div>
</div>
{/if}

{#if isNavigating}
  <Loader />
{/if}

<slot />

<!-- Contenido del Layout -->
<Navbar />
<slot />

<slot />
<BotonFlotante />

<main class="mt-16">
    <!-- Aquí va el contenido de la página -->
  </main>

<svelte:head>
    <link rel="icon" href="/fede.ico" />
 

</svelte:head>



<!-- Contenido principal -->

{#if bannerVisible}
  <div class="relative w-full h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
    {#each images as image, index}
      <div
        class="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out"
        class:opacity-0={index !== currentIndex}
        class:opacity-100={index === currentIndex}
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          class="w-full h-full object-cover"
          style="object-position: center 20%;"
        />
        <div class="absolute inset-0 bg-gradient-to-l from-transparent to-verde/90 z-10"></div>

        {#if image.overlay}
  <img
    src={image.overlay}
    alt="Decoración"
    loading="lazy"
    class="absolute left-40 top-1/2 -translate-y-1/2 w-40 h-40 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain z-20 shadow-white border-white rounded-lg"
  />
{/if}


        <div class="absolute left-4 bottom-10 md:left-20 md:bottom-20 z-30 max-w-xs md:max-w-md">
          <h2 class={`text-lg md:text-2xl lg:text-4xl font-bold text-amarillo  ${image.textAnimation}`}>
            {image.text}
          </h2>
        </div>
      </div>
    {/each}
  </div>
{/if}


<div class="relative pt-0">
  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-verde">
    <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-verde"></div>
  </div>
</div>


<!-- BIENVENIDOS A NUESTRO SITIO WEB CCSM -->
<div class="flex flex-col md:flex-row justify-between items-start p-8 mt-8 bg-gradient-to-r from-white via-white to-white rounded-lg  max-w-6xl mx-auto gap-6">

  <!-- Imagen al lado izquierdo con marco y sombra estilizados -->
<div class="md:w-1/1 w-full p-4">
  <div class="border-4 border-gray-200 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    <img
  src="/images/NOSOTROS/nosotros1.jpg"
  alt=""
  loading="lazy"
  class="w-full h-auto object-cover transition-transform duration-300 transform hover:scale-105 rounded-lg"
/>

  </div>
</div>

  <!-- BIENVENIDO CCSM -->
  <div class="md:w-1/1 w-full flex flex-col space-y-4">
    <!-- Tarjeta de texto -->
    <div class="bg-white p-6 rounded-lg shadow-sm">
      <h2 class="text-5xl font-bold text-verde mb-4 text-center">¡Bienvenidos a nuestro sitio WEB!</h2>
      <p class="text-gray-700 ">
        Aquí encontrarás toda la información sobre nuestros productos y servicios financieros, así como también detalles sobre nuestro gobierno corporativo. Esperamos que disfrutes tu experiencia en este portal y que encuentres todo lo que necesitas. 
        <span class="text-2xl block text-center text-verde">Caja de crédito San Martin.</span>
      </p>
    </div>

 
</div>
</div>
<style>
  .animate-fade-in-up {
    animation: fadeInUp 1s ease-out;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-100%); }
    to { opacity: 1; transform: translateX(0); }
  }

  .animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
  }

  .animate-slideIn {
    animation: slideIn 1s ease-out forwards;
  }

</style>



   




<!-- Grids -->
<div class="max-w-7xl mx-auto px-6 mb-12" in:fly={{ y: -60, duration: 700 }}>
  <div class="bg-white rounded-lg shadow-md py-8 px-6 md:px-12 text-center border border-amarillo">
    <h2 class="text-4xl font-extrabold text-verde mb-2 tracking-tight ">
      Para ti y tu negocio
    </h2>
    <p class="text-lg text-gray-600 mt-2">
      Descubre las soluciones financieras pensadas para tu crecimiento.
    </p>
  </div>

  
   </div>
    <div class="grid-container px-8 py-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <!-- Grid 1 -->
        <div class="grid-item" in:fade={{ delay: 150, duration: 500 }}>
            <div class="bg-gradient-to-r from-white to-white text-verde p-6 rounded-lg shadow-lg">
                <img src="/images/GRIDimg/vivienda.jpg" alt="" class="w-full object-cover h-40 rounded-md shadow-md transition-transform duration-500 hover:scale-105">
                <div class="relative pt-0">
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
                      <div style="width:100%" class="shadow-none  flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
                    </div>
                  </div>
                <h3 class="text-xl font-bold mt-4">CREDITO VIVIENDA</h3>
                <p class="mt-2 text-black-600">Crédito para vivienda te da la posibilidad de comprar
                  vivienda nueva o usada, ampliar o remodelar tu vivienda,
                  compra de terreno, construcción de vivienda y traslado de
                  deuda de vivienda.</p>
                <a href="/CREDITOS/CREDITO-VIVIENDA"
                class="inline-block w-full mt-4 px-4 py-2 text-center font-semibold rounded-md border border-verde bg-verde text-white hover:bg-amarillo hover:text-verde transition-colors duration-200">
                Más información
             </a>
             
              
            </div>
        </div>

        <!-- Grid 2 -->
        <div class="grid-item" in:fade={{ delay: 250, duration: 500 }}>
            <div class="bg-gradient-to-r from-white to-white text-verde p-6 rounded-lg shadow-lg">
                <img src="/images/GRIDimg/empresa.jpg" alt="" class="w-full object-cover h-40 rounded-md shadow-md transition-transform duration-500 hover:scale-105">
                <div class="relative pt-0">
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
                      <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
                    </div>
                  </div>
                <h3 class="text-xl font-bold mt-4">CREDITO EMPRESA</h3>
                <p class="mt-2 text-black-600">Créditos creados para satisfacer las necesidades de los
                  micros y pequeños empresarios que deseen hacer crecer
                  su negocio.</p>
                <a href="/CREDITOS/CREDITO-EMPRESA"
                class="inline-block w-full mt-4 px-4 py-2 text-center font-semibold rounded-md border border-verde bg-verde text-white hover:bg-amarillo hover:text-verde transition-colors duration-200">
                Más información
             </a>
            </div>
        </div>

        <!-- Grid 3 -->
        <div class="grid-item" in:fade={{ delay: 350, duration: 500 }}>
            <div class="bg-gradient-to-r from-white to-white text-verde p-6 rounded-lg shadow-lg">
                <img src="/images/GRIDimg/credito personal.jpg" alt="" class="w-full object-cover h-40 rounded-md shadow-md transition-transform duration-500 hover:scale-105">
                <div class="relative pt-0">
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
                      <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
                    </div>
                  </div>
                <h3 class="text-xl font-bold mt-4">CREDITO PERSONAL</h3>
                <p class="mt-2 text-black-600">Solicita tu crédito personal
                  para Consolidación de deudas, compra de vehículo,
                  artículos del hogar, gastos médicos, viajes, estudios,
                  entre otros destinos.</p>
                <a href="/CREDITOS/CREDITO-PERSONAL"
                class="inline-block w-full mt-4 px-4 py-2 text-center font-semibold rounded-md border border-verde bg-verde text-white hover:bg-amarillo hover:text-verde transition-colors duration-200">
                Más información
             </a>
            </div>
        </div>

        <!-- Grid 4 -->
        <div class="grid-item" in:fade={{ delay: 450, duration: 500 }}>
            <div class="bg-gradient-to-r from-white to-white text-verde p-6 rounded-lg shadow-lg">
                <img src="/images/inmueble.jpg" alt="" class="w-full object-cover h-40 rounded-md shadow-md transition-transform duration-500 hover:scale-105">
                <div class="relative pt-0">
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
                      <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
                    </div>
                  </div>
                <h3 class="text-xl font-bold mt-4">INMUEBLES</h3>
                <p class="mt-2 text-black-600">Conoce nuestra cartera de inmuebles, representa una oportunidad para que adquieras una propiedad para uso personal o activo generador de ingresos.</p>
                <a href="/INMUEBLES"
                class="inline-block w-full mt-4 px-4 py-2 text-center font-semibold rounded-md border border-verde bg-verde text-white hover:bg-amarillo hover:text-verde transition-colors duration-200">
                Más información
             </a>
            </div>
        </div>

        <!-- Grid 5 -->
        <div class="grid-item" in:fade={{ delay: 550, duration: 500 }}>
            <div class="bg-gradient-to-r from-white to-white text-verde p-6 rounded-lg shadow-lg">
                <img src="/images/GRIDimg/ahorro.png" alt="" class="w-full object-cover h-40 rounded-md shadow-md transition-transform duration-500 hover:scale-105">
                <div class="relative pt-0">
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
                      <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
                    </div>
                  </div>
                <h3 class="text-xl font-bold mt-4">AHORROS A LA VISTA</h3>
                <p class="mt-2 text-black-600">Una cuenta de ahorro a la vista, donde el
                  socio tiene disponible los fondos y puede
                  hacer uso de ellos en cualquier momento a
                  través de los diferentes puntos de servicio.</p>
                <a href="/PRODUCTOS/AHORROS"
                class="inline-block w-full mt-4 px-4 py-2 text-center font-semibold rounded-md border border-verde bg-verde text-white hover:bg-amarillo hover:text-verde transition-colors duration-200">
                Más información
             </a>
            </div>
        </div>

        <!-- Grid 6 -->
        <div class="grid-item" in:fade={{ delay: 650, duration: 500 }}>
            <div class="bg-gradient-to-r from-white to-white text-verde p-6 rounded-lg shadow-lg">
                <img src="/images/GRIDimg/remesas.jpg" alt="" class="w-full object-cover h-40 rounded-md shadow-md transition-transform duration-500 hover:scale-105">
                <div class="relative pt-0">
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
                      <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
                    </div>
                  </div>
                <h3 class="text-xl font-bold mt-4">REMESAS FAMILIARES</h3>
                <p class="mt-2 text-black-600">La Caja de Crédito de San Martín, pone a tu disposición el
                  servicio de Pago de Remesas Familiares, para que las recibas
                  de una manera más fácil, rápida y segura.</p>
                <a href="/SERVICIOS/REMESAS"
                class="inline-block w-full mt-4 px-4 py-2 text-center font-semibold rounded-md border border-verde bg-verde text-white hover:bg-amarillo hover:text-verde transition-colors duration-200">
                Más información
             </a>
            </div>
        </div>

        <!-- Grid 7 -->
        <div class="grid-item" in:fade={{ delay: 750, duration: 500 }}>
            <div class="bg-gradient-to-r from-white to-white text-verde p-6 rounded-lg shadow-lg">
                <img src="/images/GRIDimg/salud.jpg" alt="" class="w-full object-cover h-40 rounded-md shadow-md transition-transform duration-500 hover:scale-105">
                <div class="relative pt-0">
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
                      <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
                    </div>
                  </div>
                <h3 class="text-xl font-bold mt-4">SALUD A TU ALCANCE</h3>
                <p class="mt-2 text-black-600">Descuentos con médicos de otras
                  especialidades de la red de Salud a tu
                  alcance.</p>
                <a href="/SERVICIOS/SALUD"
                class="inline-block w-full mt-4 px-4 py-2 text-center font-semibold rounded-md border border-verde bg-verde text-white hover:bg-amarillo hover:text-verde transition-colors duration-200">
                Más información
             </a>
            </div>
        </div>

        <!-- Grid 8 -->
        <div class="grid-item" in:fade={{ delay: 650, duration: 500 }}>
            <div class="bg-gradient-to-r from-white to-white text-verde p-6 rounded-lg shadow-lg">
                <img src="/images/COLEC.jpg" alt="" class="w-full object-cover h-40 rounded-md shadow-md transition-transform duration-500 hover:scale-105">
                <div class="relative pt-0">
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
                      <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
                    </div>
                  </div>
                <h3 class="text-xl font-bold mt-4">COLECTURIAS</h3>
                <p class="mt-2 text-black-600">Pago de recibos de energía eléctrica, agua, telefonía,
                  cable, colegiaturas entre otros, para que disfrutes de
                  tu tiempo.</p>
                <a href="/SERVICIOS/COLECTURIAS"
                class="inline-block w-full mt-4 px-4 py-2 text-center font-semibold rounded-md border border-verde bg-verde text-white hover:bg-amarillo hover:text-verde transition-colors duration-200">
                Más información
             </a>
            </div>
        </div>
        
    </div>
  
</div>

<!-- TARJETAS Responsive y optimizado -->
<div class="flex flex-col lg:flex-row justify-between items-center gap-8 p-4 sm:p-6 md:p-8 mt-8 bg-gradient-to-r from-white via-white to-amarillo rounded-lg shadow-lg">
  
  <!-- Imagen con botón -->
  <div class="w-full lg:w-1/2 flex flex-col items-center">
    <img
      src="/images/TARJETAS/TARJETAS.png"
      alt=""
      loading="lazy"
      class="w-full h-auto object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
    />

    <div class="w-full mt-4 flex justify-center">
      <a href="/PRODUCTOS/TARJETA-DEBITO">
        <button class="bg-verde text-white hover:bg-amarillo hover:text-verde transition-all p-4 rounded-md text-base sm:text-lg font-semibold hover:scale-105">
          <i class="fas fa-credit-card mr-2"></i>
          Más información
        </button>
      </a>
    </div>
  </div>

  <!-- Información -->
  <div class="w-full lg:w-1/2 bg-verde p-6 rounded-lg flex flex-col justify-center items-center text-center">
    <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-amarillo">
      Tarjetas de Crédito y Débito
    </h3>
    <p class="text-white mt-4 text-base sm:text-lg font-semibold">
      Realiza tus transacciones con mayor rapidez, comodidad, tranquilidad y seguridad. Además, accede a una amplia red de Cajeros Automáticos y comercios afiliados a VISA, tanto a nivel nacional como internacional. Acumula Fedepuntos por cada compra que realices.
    </p>
  </div>
</div>




<!-- FEDEBANKING Optimizado -->
<div class="flex flex-col lg:flex-row justify-center p-4 sm:p-6 md:p-8 mt-8 bg-gradient-to-r from-verde via-white to-white rounded-lg shadow-lg gap-8">
  
  <!-- Contenedor de los botones -->
  <div class="w-full lg:w-1/3 flex flex-col justify-center items-center space-y-4">
    <a href="https://www.fedecredito.com.sv/promociones" target="_blank" class="w-full">
      <button class="w-full bg-verde text-white hover:bg-amarillo hover:text-verde transition-all p-4 rounded-md text-base sm:text-lg font-semibold hover:scale-105">
        <i class="fas fa-smile mr-2"></i>PROMOCIONES
      </button>
    </a>

    <a href="https://fedebanking.sistemafedecredito.com/" target="_blank" class="w-full">
      <button class="w-full bg-verde text-white hover:bg-amarillo hover:text-verde transition-all p-4 rounded-md text-base sm:text-lg font-semibold hover:scale-105">
        <i class="fas fa-mobile-alt mr-2"></i>FEDEBANKING
      </button>
    </a>

    <a href="https://www.sistemafedecredito.com/WEBREPCOMPRA/ReportarCompra.aspx" target="_blank" class="w-full">
      <button class="w-full bg-verde text-white hover:bg-amarillo hover:text-verde transition-all p-4 rounded-md text-base sm:text-lg font-semibold hover:scale-105">
        <i class="fas fa-gift mr-2"></i>REPORTA TU COMPRA
      </button>
    </a>

    <a href="https://www.fedecredito.com.sv/productos/tarjetas/reporte-de-viaje" target="_blank" class="w-full">
      <button class="w-full bg-verde text-white hover:bg-amarillo hover:text-verde transition-all p-4 rounded-md text-base sm:text-lg font-semibold hover:scale-105">
        <i class="fas fa-plane mr-2"></i>REPORTA TU VIAJE
      </button>
    </a>
  </div>

  <!-- Imagen -->
  <div class="flex justify-center items-center w-full lg:w-2/3">
    <img
      src="/images/reporta.png"
      alt="Reporta tu compra"
      loading="lazy"
      class="w-full max-w-md h-auto object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
    />
  </div>

    
</div>


<!-- NOSOTROS Responsive y optimizado -->
<div class="flex flex-col md:flex-row justify-between items-start p-4 sm:p-6 md:p-8 mt-8 bg-white rounded-lg max-w-6xl mx-auto gap-6">
  
  <!-- Imagen al lado izquierdo -->
  <div class="w-full md:w-1/4">
    <img
      src="/images/aniversary.png"
      alt=""
      loading="lazy"
      class="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
    />
  </div>

  <!-- Tarjeta de texto con botón debajo -->
  <div class="w-full md:w-1/2 flex flex-col space-y-4">
    <!-- Tarjeta de texto -->
    <div class="bg-gray-100 p-6 rounded-lg shadow-sm">
      <h2 class="text-2xl sm:text-3xl font-bold text-verde mb-2 text-center">
        ¿Quiénes Somos?
      </h2>
      <p class="text-gray-700 text-base sm:text-lg">
        Somos parte del SISTEMA FEDECRÉDITO y nos dedicamos a apoyar a nuestros clientes con productos financieros accesibles y confiables. Creciendo contigo desde 1953.
      </p>
    </div>

    <!-- Botón verde que lleva a una subruta interna -->
    <div class="flex justify-center">
      <a href="/NOSOTROS">
        <button class="bg-verde text-white hover:bg-amarillo hover:text-verde px-5 py-2 rounded-md text-lg font-semibold transition-all hover:scale-105">
          <i class="fas fa-folder mr-2"></i> HISTORIA
        </button>
      </a>
    </div>
  </div>
</div>






<Footer />
<slot />
