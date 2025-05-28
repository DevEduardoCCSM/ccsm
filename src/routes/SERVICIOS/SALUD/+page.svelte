<script>

  export const prerender = true;

</script>



<!-- 🟩 Banner con imagen de fondo y texto alineado -->
<section
  class="mt-20 relative w-full h-64 sm:h-72 md:h-[400px] bg-cover bg-no-repeat bg-bottom flex items-center justify-center md:justify-start text-white shadow-md"
  style="background-image: url('/images/SERVICIOSimg/SALUD.jpg');"
>
  <div
    class="bg-verde bg-opacity-90 p-4 sm:p-6 md:p-10 rounded-lg shadow-lg max-w-md sm:max-w-lg md:max-w-xl w-[90%] text-left ml-4 md:ml-16"
  >
    <h2 class="text-2xl sm:text-3xl font-bold text-amarillo mb-2 sm:mb-4">
      SALUD A TU ALCANCE
    </h2>
    <p class="text-sm sm:text-base text-white whitespace-pre-line">
      Descuentos con médicos de otras especialidades de la red de Salud a tu alcance.
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
        COBERTURA FAMILIAR SEGÚN TUS NECESIDADES
      </h2>
      <div class="w-full rounded-lg mb-4 overflow-hidden flex items-center justify-center">
        <img 
          src="/images/SERVICIOSimg/SALUD2.png" 
          alt="" 
          class="object-contain w-full max-w-xs h-auto"
        />
      </div>
      <ul class="list-disc list-inside text-verde text-sm sm:text-base space-y-1">
        <li>
          <span class="font-semibold">PLAN A:</span> Para ti y tu cónyuge e hijos solteros menores de 24 años.
        </li>
        <li>
          <span class="font-semibold">PLAN B:</span> Si eres soltero, para ti y tus padres.
        </li>
        <li>
          <span class="font-semibold">PLAN C:</span> Si eres madre soltera, para ti, tus hijos (máximo 2) y tus padres.
        </li>
      </ul>
    </div>

    <!-- Carta 2 -->
    <div class="bg-white p-6 rounded-lg  transition space-y-4">
      <h2 class="text-lg sm:text-xl font-bold text-verde mb-2 text-center">
        CONSULTA POR NUESTRO PROGRAMA
      </h2>
      <ul class="list-disc list-inside text-verde text-sm sm:text-base space-y-1">
        <li>
          <span class="font-semibold">Consulta médica familiar ilimitada*</span> por solo US $2.25 al mes. Contamos con servicio de cargo automatico a tarjeta de credito o cuenta de ahorros exclusiva para socios.
        </li>
        <li>
          <span class="font-semibold">Red con más de 390 médicos</span> a nivel nacional.
        </li>
        <li>
          <span class="font-semibold">Consulta en medicina general, ginecología y pediatría.</span>
        </li>
        <li>
          <span class="font-semibold">*Con un intervalo mínimo de 24 horas entre cada cita.</span>
        </li>
      </ul>
    </div>

  </div>
</main>



<style>
  /* Puedes agregar estilos globales aquí si es necesario */
</style>
