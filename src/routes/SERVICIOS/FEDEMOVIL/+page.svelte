<script>
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import BotonFlotante from '$lib/BotonFlotante.svelte';
  export const prerender = true;
  import SafeLink from '$lib/SafeLink.svelte';

</script>

<Navbar />
<BotonFlotante />

<!-- 🟩 Banner con imagen de fondo y texto alineado -->
<section
  class="mt-20 relative w-full h-64 sm:h-72 md:h-[400px] bg-cover bg-no-repeat bg-center flex items-center justify-center md:justify-end text-white shadow-md"
  style="background-image: url('/images/SERVICIOSimg/FEDEBANKING 2.jpg');"
>
  <div
    class="bg-verde bg-opacity-90 p-4 sm:p-6 md:p-10 rounded-lg shadow-lg max-w-md sm:max-w-lg md:max-w-xl w-[90%] text-left mr-4 sm:mr-8 md:mr-16"
  >
    <h2 class="text-2xl sm:text-3xl font-bold text-amarillo mb-2 sm:mb-4">FEDEMÓVIL</h2>
    <p class="text-sm sm:text-base text-white whitespace-pre-line">
      Tus operaciones financieras.
      Ingresa desde tu celular o tablet a nuestra app FEDE MÓVIL y accede a tus productos y servicios financieros las 24 horas.
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
      <h2 class="text-lg sm:text-xl font-bold text-verde mb-2 text-center">TRANSFERENCIAS ENTRE BANCOS</h2>
      <div class="w-full rounded-lg mb-4 overflow-hidden flex items-center justify-center">
        <img 
          src="/images/SERVICIOSimg/365.jpg" 
          alt="" 
          class="object-contain w-full max-w-xs h-auto"
        />
      </div>
      <ul class="list-disc list-inside text-verde mt-2 space-y-1 text-sm sm:text-base text-center">
        <li><span class="font-semibold">Agricola</span></li>
        <li><span class="font-semibold">Cuscatlán</span></li>
        <li><span class="font-semibold">Davivienda</span></li>
        <li><span class="font-semibold">Promerica</span></li>
        <li><span class="font-semibold">America Central</span></li>
        <li><span class="font-semibold">Atlantida</span></li>
        <li><span class="font-semibold">Fomento</span></li>
        <li><span class="font-semibold">Hipotecario</span></li>
        <li><span class="font-semibold">Citi Bank</span></li>
        <li><span class="font-semibold">Banco Industrial</span></li>
        <li><span class="font-semibold">Bancovi</span></li>
        <li><span class="font-semibold">ABANK</span></li>
        <li><span class="font-semibold">Comedica</span></li>
        <li><span class="font-semibold">Banco Azul</span></li>
        <li><span class="font-semibold">Constelación</span></li>
        <li><span class="font-semibold">Credicomer</span></li>
        <li><span class="font-semibold">GENTE</span></li>
        <li><span class="font-semibold">Integral</span></li>
      </ul>
    </div>

    <!-- Carta 2 -->
    <div class="bg-white p-6 rounded-lg transition space-y-4">
      <h2 class="text-lg sm:text-xl font-bold text-verde text-center">¡DESDE TU CELULAR!</h2>
      <div class="text-verde space-y-2 text-sm sm:text-base">
        <p>En <span class="font-semibold">FEDE MÓVIL</span> puedes realizar las siguientes operaciones financieras desde donde te encuentres, fácil y rápido:</p>
        <ul class="list-disc list-inside ml-4">
          <li>Consulta de saldo de Cuentas de Ahorro</li>
          <li>Transferencias entre Cuentas de Ahorro</li>
          <li>Envío y pago de Remesa local con abono a Cuenta de Ahorros</li>
          <li>Acceso a las Remesas Familiares depositadas en tu Cuenta de Ahorros</li>
          <li>Pago de Préstamos y Tarjetas de Crédito</li>
          <li>Recargas de celular de CLARO y MOVISTAR</li>
          <li>Pago de Servicios de CAESS, CLESA, EEO, DEUSEM, DELSUR, ANDA, CLARO, TIGO y MOVISTAR</li>
          <li>Pago de cuotas de SEGUROS FEDECRÉDITO, Grupo Q, Yamaha y RenaWare</li>
          <li>Pago de cuota de Universidad Francisco Gavidia</li>
          <li>Solicitud de Productos</li>
        </ul>
      </div>
       <!-- Contenedor con las imágenes -->
 <div class="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-1  justify-items-center mt-12">
  <SafeLink href="https://www.fedecredito.com.sv/canales/fede-movil" target="_blank" class="transition-transform transform hover:scale-105">
      <img src="/images/FOOTERimg/fmobil.png" alt="" class="w-full h-auto square-lg  hover:opacity+200" loading="lazy"/>
  </SafeLink>
  <h2 class="text-lg sm:text-x font-bold text-amarillo mb-2 text-center ">
    Click aqui!
   </h2>
</div>
 <!-- Sección de descarga de la APP -->
<section class="bg-verde py-4 px-4 rounded-md shadow-md">
  <div class="max-w-6xl mx-auto text-center">
    <h2 class="text-2xl sm:text-2xl font-semibold text-white mb-1">
      Descarga nuestra APP
    </h2>

    <div class="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-1 justify-items-center">
      <!-- App Store -->
      <SafeLink
        href="https://apps.apple.com/us/app/fede-m%C3%B3vil/id1077370776"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Descargar en App Store"
        class="transform transition-transform hover:scale-105"
      >
        <figure>
          <img
            src="/images/FOOTERimg/app-store.webp"
            alt=""
            class="w-30 h-auto rounded-md shadow-lg"
            loading="lazy"
          />
        </figure>
      </SafeLink>

      <!-- Google Play -->
      <SafeLink
        href="https://play.google.com/store/apps/details?id=sv.fedecredito.fedemovil&hl=en"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Descargar en Google Play"
        class="transform transition-transform hover:scale-105"
      >
        <figure>
          <img
            src="/images/FOOTERimg/google-store.webp"
            alt=""
            class="w-30 h-auto rounded-md shadow-lg"
            loading="lazy"
          />
        </figure>
      </SafeLink>
    </div>
  </div>
</section>

    </div>
    
    
  </div>
</main>

<Footer />
<slot />

<style>
  /* Puedes agregar estilos globales aquí si es necesario */
</style>
