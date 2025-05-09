<script>
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import BotonFlotante from '$lib/BotonFlotante.svelte';
  export const prerender = true;

</script>

<Navbar />
<BotonFlotante />

<!-- 🟩 Banner con imagen de fondo y texto alineado -->
<section
  class="mt-20 relative w-full h-64 sm:h-72 md:h-[400px] bg-cover bg-no-repeat bg-center flex items-center justify-center md:justify-start text-white shadow-md"
  style="background-image: url('/images/SERVICIOSimg/PAGOS.webp');"
>
  <div
    class="bg-verde bg-opacity-90 p-4 sm:p-6 md:p-10 rounded-lg shadow-lg max-w-md sm:max-w-lg md:max-w-xl w-[90%] text-left sm:ml-6 md:ml-16"
  >
    <h2 class="text-2xl sm:text-3xl font-bold text-amarillo mb-2 sm:mb-4">
      PAGO DE SERVICIOS BÁSICOS
    </h2>
    <p class="text-sm sm:text-base whitespace-pre-line text-white">
      Te ofrecemos la facilidad de realizar tus pagos de
      servicios básicos como:
      Pago de recibos de energía eléctrica, agua, telefonía,
      cable, colegiaturas entre otros, para que disfrutes de
      tu tiempo, hasta donde quieras…
    </p>
  </div>
</section>
<div class="relative pt-0">
  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
    <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
  </div>
</div>

<main class="mt-6">
  <!-- 🔹 Cartas -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-8">
    
    <!-- Carta 1 -->
    <div class="bg-white p-6 rounded-lg   transition">
      <h2 class="text-lg sm:text-xl font-bold text-verde mb-2 text-center">
        SERVICIOS QUE PUEDES PAGAR
      </h2>
      <div class="w-full bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
        <img
          src="/images/SERVICIOSimg/logobasicos.png"
          alt=""
          class="object-contain w-full max-w-xs h-auto"
        />
      </div>
      <ul class="list-disc list-inside text-verde mt-2 space-y-1 text-sm sm:text-base">
        <li><span class="font-semibold">Cancelación de recibos de Asociaciones de Agua como ADESCOLSAN, ACOSAMA, ACASARDBP.</span></li>
        <li><span class="font-semibold">Colegiaturas: Centro Escolar Católico San Martin Obispo, Colegio Americano Español.</span></li>
      </ul>
    </div>

    
    <!-- Carta 2 -->
    <div class="bg-white p-6 rounded-lg   transition">
      <h2 class="text-lg sm:text-xl font-bold text-verde mb-2 text-center">
        PUEDES PAGAR EN VENTANILLA
      </h2>
      <div class="w-full bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
        <img
          src="/images/SERVICIOSimg/logoremesas2.png"
          alt=""
          class="object-contain w-full max-w-xs h-auto"
        />
      </div>


      <h2 class="text-lg sm:text-x font-bold text-verde mb-2 text-center mt-8">
        Recuerda que puedes utilizar nuestros medios electrónicos o FEDEPUNTO VECINOS para pagar tus servicios básicos.
      </h2>
       <!-- Contenedor con las imágenes -->
 <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center mt-12">
  
  <a href="https://www.fedecredito.com.sv/canales/fede-movil" target="_blank" class="transition-transform transform hover:scale-105">
      <img src="/images/FOOTERimg/fmobil.png" alt="" class="w-full h-auto square-lg  hover:opacity+200" loading="lazy"/>
  </a>
  <a href="/FEDE-PUNTO" class="transition-transform transform hover:scale-105">
      <img src="/images/FOOTERimg/fpunto.png" alt="" class="w-full h-auto square-lg  hover:opacity+200" loading="lazy"/>
  </a>
  <a href="https://www.fedecredito.com.sv/canales/fede-red-365" target="_blank" class="transition-transform transform hover:scale-105">
      <img src="/images/FOOTERimg/fred365.png" alt="" class="w-full h-auto square-lg  hover:opacity+200" loading="lazy"/>
  </a>
</div>
    </div>
  </div>
</main>
 
<Footer />
<slot />

<style>
  /* Puedes agregar estilos globales aquí si es necesario */
</style>
