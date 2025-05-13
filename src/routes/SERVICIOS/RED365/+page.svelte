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
  class="mt-20 relative w-full h-64 sm:h-72 md:h-[400px] bg-cover bg-no-repeat bg-center flex items-center justify-center md:justify-start text-white shadow-md"
  style="background-image: url('/images/SERVICIOSimg/HASTA MI NEGOCIO.jpg');"
>
  <div
    class="bg-verde bg-opacity-90 p-4 sm:p-6 md:p-10 rounded-lg shadow-lg max-w-md sm:max-w-lg md:max-w-xl w-[90%] text-left sm:ml-6 md:ml-16"
  >
    <h2 class="text-2xl sm:text-3xl font-bold text-amarillo mb-2 sm:mb-4">
      FEDE RED 365
    </h2>
    <p class="text-sm sm:text-base whitespace-pre-line text-white text-justify">
      Realiza tus operaciones financieras las 24 horas del día en nuestra red de cajeros automático FEDE RED 365, encuéntralos en todo el país, y realiza las siguientes operaciones financieras de forma rápida y segura.
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
        <h2 class="text-lg sm:text-xl font-bold text-verde mb-2 text-center">CAJERO DEPOSITARIO</h2>
        <div class="w-full rounded-lg  mb-4 overflow-hidden flex items-center justify-center">
          <img
  src="/images/SERVICIOSimg/depositario.png"
  alt=""
  class="object-contain w-full max-w-xs h-auto border-4 border-amarillo rounded"
/>

        </div>
        <ul class="list-disc list-inside text-verde mt-2 space-y-1 text-sm sm:text-base text-left">
          <li><span >Deposito en efectivo a Cuentas de Ahorro Corriente (Con o sin tarjeta de débito)</span></li>
          <li><span >Deposito en efectivo a Cuentas de Ahorro Programado (Con o sin tarjeta de débito)</span></li>
          <li><span >Pago en efectivo de tarjeta de crédito</span></li>
          <li><span >Pago en efectivo de prestamos</span></li>
          <li><span >Pago de facturas de servicios básicos (Con tarjeta de débito)</span></li>
          <li><span >Cobro de remesas familiares con deposito a cuenta de ahorro</span></li>
        </ul>
      </div>
  
      <!-- Carta 2 -->
      <div class="bg-white p-6 rounded-lg transition space-y-4">
        <div class="text-verde space-y-2 text-sm sm:text-base">
            <!-- Contenedor con las imágenes -->
   <div class="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-1  justify-items-center mt-12">
    <SafeLink href="https://www.fedecredito.com.sv/canales/fede-red-365" target="_blank" class="transition-transform transform hover:scale-105">
        <img src="/images/FOOTERimg/fred365.png" alt="Imagen 2" class="w-full h-auto square-lg  hover:opacity+200" loading="lazy"/>
    </SafeLink>
    <h2 class="text-lg sm:text-x font-bold text-amarillo mb-2 text-center ">
      Click aqui!
     </h2>
  </div>
          <p>En nuestra <span class="font-semibold"> FEDE RED 365</span> puedes realizar las siguientes operaciones financieras , fácil y rápido:</p>
          <ul class="list-disc list-inside ml-4 ">
            <li>Consulta de saldos.</li>
            <li>Retiros de efectivo.</li>
            <li>Retiro de Remesas Familiares.</li>
            <li>Dinero en efectivo por tus FEDEPUNTOS.</li>
            <li>Pago de Préstamos con cargo a tu Cuenta de Ahorros.</li>
            <li>Pago de Tarjetas de Crédito .</li>
            <li>Pago de Servicios de CAESS, CLESA, EEO, DEUSEM, DELSUR, ANDA, CLARO, TIGO y MOVISTAR</li>
          </ul>

          <p> <span class="font-semibold"> Límites</span> </p>
          <ul class="list-disc list-inside ml-4">
            <li>Por retiro de efectivo: US $500.00 en 24 horas</li>
            <li>Por depósitos: US $500.00 en 24 horas por producto</li>
          </ul>


          <p> <span class="font-semibold "> Comisión por uso de Cajero Automático FEDE RED 365 para Tarjetas de Débito del SISTEMA FEDECRÉDITO</span> </p>
          <ul class="list-disc list-inside ml-4">
            <li>Los primeros 6 retiros en el mes son GRATIS; a partir del séptimo tiene un costo de US $0.68 IVA incluido. Consultas sin costo.</li>
            <li>Recuerda que todos nuestros cajeros automáticos aceptan tarjetas nacionales e internacionales para marca VISA y tarjetas nacionales marca Mastercard.</li>
            
          </ul>
        </div>
 
      </div>
      
      
    </div>
  </main>
  
  <Footer />
  <slot />
  
  <style>
    /* Puedes agregar estilos globales aquí si es necesario */
  </style>
  