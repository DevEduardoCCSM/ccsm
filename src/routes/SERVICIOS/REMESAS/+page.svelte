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
  class="mt-20 relative w-full h-64 sm:h-72 md:h-[400px] bg-cover bg-no-repeat bg-top flex items-center justify-center md:justify-start text-white shadow-md"
  style="background-image: url('/images/SERVICIOSimg/REMESAS.jpg');"
>
  <div
    class="bg-verde bg-opacity-90 p-4 sm:p-6 md:p-10 rounded-lg shadow-lg max-w-md sm:max-w-lg md:max-w-xl w-[90%] text-left ml-4 md:ml-16"
  >
    <h2 class="text-2xl sm:text-3xl font-bold text-amarillo mb-2 sm:mb-4">
      REMESAS FAMILIARES
    </h2>
    <p class="text-sm sm:text-base text-white whitespace-pre-line">
      La Caja de Crédito de San Martín pone a tu disposición el
      servicio de Pago de Remesas Familiares, para que las recibas
      de una manera más fácil, rápida y segura.
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
      <h2 class="text-lg sm:text-xl font-bold text-verde mb-2 text-center">REMESADORES</h2>
      <div class="w-full rounded-lg mb-4 overflow-hidden flex items-center justify-center">
        <img
          src="/images/SERVICIOSimg/logoremesas.png"
          alt=""
          class="object-contain w-full max-w-xs h-auto"
        />
      </div>
      <div class="text-sm sm:text-base text-verde space-y-2">
        <p>
          Pídele a tus familiares y amigos que cuando te envíen tus Remesas Familiares, soliciten que las recibas en el 
          <span class="font-semibold">SISTEMA FEDECRÉDITO</span>, por medio de:
        </p>
        <ul class="list-disc list-inside space-y-1">
          <li><span class="font-semibold">Girosol</span></li>
          <li><span class="font-semibold">La Nacional</span></li>
          <li><span class="font-semibold">Delgado Travel</span></li>
          <li><span class="font-semibold">Amigo Envío</span></li>
          <li><span class="font-semibold">A La Internacional</span></li>
          <li><span class="font-semibold">BARRI</span></li>
          <li><span class="font-semibold">Mateo Express</span></li>
          <li><span class="font-semibold">VIGO</span></li>
          <li><span class="font-semibold">MONEYGRAM</span></li>
          <li><span class="font-semibold">RÍA</span></li>
          <li><span class="font-semibold">Uniteller</span></li>
          <li><span class="font-semibold">Unigram</span></li>
          <li><span class="font-semibold">Remesas y pagos Cusca</span></li>
          <li><span class="font-semibold">RYT</span></li>
        </ul>
        <p class="mt-4">
          O si lo prefieres <span class="font-semibold">DIRECTAMENTE EN TU CUENTA DE AHORROS</span> por medio de:
        </p>
        <ul class="list-disc list-inside space-y-1 mt-2">
          <li><span class="font-semibold">Giromex</span></li>
          <li><span class="font-semibold">Trans-Fast</span></li>
          <li><span class="font-semibold">Wells Fargo</span></li>
          <li><span class="font-semibold">Mateo Express</span></li>
          <li><span class="font-semibold">UNO Envíos de dinero</span></li>
          <li><span class="font-semibold">BANCOMER</span></li>
          <li><span class="font-semibold">Sigue</span></li>
          <li><span class="font-semibold">Dolex</span></li>
          <li><span class="font-semibold">Intermex</span></li>
        </ul>
      </div>
    </div>

    <!-- Carta 2 -->
    <div class="bg-white p-6 rounded-lg   transition space-y-4">
      <h2 class="text-lg sm:text-xl font-bold text-verde text-center">PASOS PARA COBRAR TU REMESA</h2>
      <div class="text-sm sm:text-base text-verde space-y-3">
        <p>
          Recuerda que para recibir tu remesa deberás presentar tu 
          <span class="font-semibold">DUI</span> y la <span class="font-semibold">clave de envío</span>.
        </p>
        <p>
          Dile a tus familiares y amigos que al enviar las remesas, sigan estos pasos:
        </p>
        <ol class="list-decimal list-inside space-y-2">
          <li>
            Solicita que tu remesa sea pagada en el 
            <span class="font-semibold">SISTEMA FEDECRÉDITO</span>.
          </li>
          <li>
            Indica el medio de pago que prefieras:
            <ul class="list-disc list-inside ml-4 space-y-1 mt-1">
              <li><span class="font-semibold">Pago en ventanilla.</span></li>
              <li>
                <span class="font-semibold">Abono a tu Cuenta de Ahorros</span>. Recuerda que si solicitas este método, debes brindar el número de tu cuenta 
                <span class="italic">(sin guiones)
                  *exclusivo para nuestros socio.</span>.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>

  </div>
</main>

<Footer />
<slot />

<style>
  /* Puedes agregar estilos globales aquí si es necesario */
</style>
