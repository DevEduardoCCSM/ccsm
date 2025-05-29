<script>
  import { onMount } from 'svelte';
  export const prerender = true;

  export let locations = [
    {
      name: "AGENCIA METROCENTRO",
      horario: "Lunes a Viernes: 9:00AM a 4:30pm. Sabado:9:00am a 12:30pm",
      direccion: "Centro Comercial Metrocentro, 1er nivel, locales 25 y 26F, San Salvador",
      contacto: "+503 2260-0142",
      image: "/images/AGENCIAimg/metro.png",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.47567698167!2d-89.10184023103614!3d13.716721668674305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6337fcd02f8869%3A0x61685bbe7bf3d208!2sCaja%20De%20Credito%20San%20Martin!5e1!3m2!1ses!2ssv!4v1748548329354!5m2!1ses!2ssv",

    },
    {
      name: "AGENCIA UNICENTRO ALTA VISTA",
      horario: "Lunes a Viernes: 9:00AM - 12:20PM / 1:30pm a 4:30pm. Sábado: 9:00am a 12:30pm",
      direccion: "Unicentro Altavista, locales 7F y 8F, San Bartolo Ilopango",
      contacto: "+503 2299-7279",
      image: "/images/AGENCIAimg/alta.jpg",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.47567698167!2d-89.10184023103614!3d13.716721668674305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6337fcd02f8869%3A0x61685bbe7bf3d208!2sCaja%20De%20Credito%20San%20Martin!5e1!3m2!1ses!2ssv!4v1748548329354!5m2!1ses!2ssv",
    }
  ];

  let showLocation = false;

  onMount(() => {
    setTimeout(() => {
      showLocation = true;
    }, 200);
  });
</script>

<main class="relative min-h-screen flex flex-col justify-start items-center py-20 bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)]">
  <!-- Fondo decorativo -->
  <div class="absolute inset-0 z-0 pointer-events-none">
    <div class="w-full h-1/3 bg-gradient-to-b from-verde to-[#C8FF96]"></div>
    <div class="w-full h-2/3 bg-gradient-to-b from-[#388E3C] to-[#81C784]"></div>
    <div class="w-full h-1/3 bg-[var(--color-blanco)]"></div>
  </div>

  <!-- Contenido -->
  <div class="relative z-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 w-full px-5">
    {#each locations as location, index}
      <div
        class="bg-white border border-verde rounded-xl shadow-md overflow-hidden transform transition duration-700 ease-in-out opacity-0 translate-y-10 hover:scale-105"
        class:opacity-100={showLocation}
        class:translate-y-0={showLocation}
        style="transition-delay: {index * 150}ms"
      >
        <img src={location.image} alt={`Imagen de ${location.name}`} class="w-full h-40 object-cover" />
        <div class="relative pt-1">
          <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
            <div class="w-full shadow-none flex text-white justify-center bg-amarillo"></div>
          </div>
        </div>
        <div class="p-4 flex flex-col gap-2">
          <h2 class="text-xl font-bold text-verde">{location.name}</h2>
          <p class="text-sm text-gray-600"><strong>Horario:</strong> {location.horario}</p>
          <p class="text-sm text-gray-600"><strong>Dirección:</strong> {location.direccion}</p>
          <p class="text-sm text-gray-600"><strong>Contacto:</strong> {location.contacto}</p>
          <div class="mt-2">
            <iframe
              src={location.mapUrl}
              class="w-full h-40 md:h-48 rounded-md border-2 border-verde"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de la agencia"
            ></iframe>
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>
