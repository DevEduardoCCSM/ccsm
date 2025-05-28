<script>
  
  import { fly, fade } from 'svelte/transition';
  export const prerender = true;


  const propiedades = [
   
    {
      direccion: 'Canton San Jose Lote #S/N de la Jurisdiccion de San Martin Depto. San Salvador',
      municipio: 'San Martín',
      precio: '$',
      extension:'7,748.366 mt²',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98018.93350506689!2d-89.13803658807609!3d13.746115179062077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f634632aff09b4b%3A0xea564f4798aa80df!2sParque%20Central%20de%20San%20Mart%C3%ADn!5e1!3m2!1ses!2ssv!4v1745512158978!5m2!1ses!2ssv'
    },
    {
      direccion: 'Canton Ramirez de la Jurisdiccion de San Jose Guayabal Depto. Cuscatlan',
      municipio: 'Cuscatlan',
      precio: '$',
      extension:'30,046.80 mt²',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12247.460528622601!2d-89.11243700248046!3d13.839590095057122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6340a09ab49075%3A0xb84f9f89c69bff83!2sSan%20Jos%C3%A9%20Guayabal!5e1!3m2!1ses!2ssv!4v1745512422527!5m2!1ses!2ssv'
    },
    {
      direccion: 'Bo.Concepcion, Av. José Maria Rivas, Cojutepeque, Depto. Cuscatlan ',
      municipio: 'Cuscatlan',
      precio: '$',
      extension:'294.96 mt²',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16356.731461506743!2d-88.95117982703273!3d13.720545215058374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6350043fca7223%3A0x7977bd4834f6c8c0!2sCojutepeque!5e1!3m2!1ses!2ssv!4v1745512475291!5m2!1ses!2ssv'
    },
    {
      direccion: 'Reparto Residencial No.2 Lote No.7, Polig."C", Finca Venecia, J/Cojutepeque Depto. Cuscatlan',
      municipio: 'Cuscatlan',
      precio: '$',
      extension:'70.00 mt²',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16356.731461506743!2d-88.95117982703273!3d13.720545215058374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6350043fca7223%3A0x7977bd4834f6c8c0!2sCojutepeque!5e1!3m2!1ses!2ssv!4v1745512475291!5m2!1ses!2ssv'
    }
  ];

</script>



<main class="mt-4">
  <div class="min-h-screen bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)] flex flex-col justify-start items-center py-12">
    <!-- Fondo decorativo -->
    <div class="w-full h-full absolute top-0 left-0 right-0 z-0">
      <div class="w-full h-1/3 bg-gradient-to-b from-verde to-[#C8FF96]"></div>
      <div class="w-full h-2/3 bg-gradient-to-b from-[#388E3C] to-[#81C784]"></div>
      <div class="w-full h-1/3 bg-[var(--color-blanco)]"></div>
    </div>

 
  <!-- Contenedor principal -->
<div class="max-w-6xl w-full bg-white shadow-lg rounded-lg p-8 mt-16 z-10">


  <!-- Carta Mejorada -->
  <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 mx-auto border border-gray-200">
    <div class="bg-gradient-to-br from-verde to-verde p-6 rounded-lg shadow-inner">
      <h2 class="text-amarillo text-2xl sm:text-2xl font-bold text-center sm:text-left">
        INMUEBLES A LA VENTA
      </h2>
      <ul class="text-white space-y-2 font-light text-left sm:text-base text-sm">
        <li class="flex items-start gap-2">
          <span class="text-green-500 font-bold">✓</span>Te brindamos financiamiento.
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 font-bold">✓</span>Puedes dar una prima inicial.
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500 font-bold">✓</span>Contáctanos para más opciones de compra.
        </li>
      </ul>
    </div>



      <!-- Barra orange -->
      <div class="relative pt-1">
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
          <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
        </div>
      </div>

      <!-- Tarjetas -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {#each propiedades as propiedad (propiedad.direccion)}
          <div class="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-4 space-y-3">
            <h3 class="text-lg font-semibold text-green-800">Dirección</h3>
            <p class="text-sm text-gray-600">{propiedad.direccion}</p>

            <!-- Mapa -->
            <div class="w-full h-40 rounded overflow-hidden">
  <iframe
    class="w-full h-full"
    src={propiedad.mapUrl}
    allowfullscreen
    loading="lazy"
    title="Mapa de ubicación del inmueble"
  ></iframe>
</div>

            <p class="text-sm text-gray-700"><strong>Extensión:</strong> {propiedad.extension}</p>
            <p class="text-sm text-gray-700"><strong>Municipio:</strong> {propiedad.municipio}</p>
            <p class="text-sm text-gray-700"><strong>Precio:</strong> {propiedad.precio}</p>

            <a href="/SOLICITUD" class="inline-block w-full mt-4 px-4 py-2 text-center font-semibold rounded-md border border-green-500 bg-verde text-white hover:bg-amarillo hover:text-verde transition-colors duration-200">
              Contáctanos
            </a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</main>



