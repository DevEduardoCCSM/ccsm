<script>
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition'; // Importa las transiciones
  import BotonFlotante from '$lib/BotonFlotante.svelte';
  export const prerender = true;


  export let locations = [
    {
      name: "AGENCIA METROCENTRO",
      horario: "Lunes a Viernes: 9:00AM a 4:30pm. Sabado:9:00am a 12:30pm",
      direccion: "Centro Comercial Mtrocentro, 1er nivel, locales 25 y 26F, San Salvador",
      contacto: "+503 2260-0142",
      image: "/images/AGENCIAimg/metro.png",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.234541499695!2d-89.05795152617554!3d13.735186497680438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63462cd8ed7a33%3A0xef454fa71ebaf225!2sCaja%20de%20Cr%C3%A9dito%20de%20San%20Mart%C3%ADn!5e1!3m2!1ses!2ssv!4v1743268918128!5m2!1ses!2ssv",
    },
    {
      name: "AGENCIA UNICENTRO ALTA VISTA",
      horario: "Lunes a Viernes: 9:00AM - 12:20PM / 1:30pm a 4:30pm. Sabado:9:00am a 12:30pm",
      direccion: "Unicentro Altavista, locales 7F y 8F, San Bartolo Ilopango",
      contacto: "+503 2299-7279",
      image: "/images/AGENCIAimg/alta.jpg",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.234541499695!2d-89.05795152617554!3d13.735186497680438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63462cd8ed7a33%3A0xef454fa71ebaf225!2sCaja%20de%20Cr%C3%A9dito%20de%20San%20Mart%C3%ADn!5e1!3m2!1ses!2ssv!4v1743268918128!5m2!1ses!2ssv",
    },
  ];

  let showLocation = false;

  onMount(() => {
    setTimeout(() => {
      showLocation = true;
    }, 200);
  });
</script>

<Navbar />

<main class="mt-4">
  <!-- Aquí va el contenido de la página -->
</main>

<main>
  <slot />

  <BotonFlotante />
  
  <!-- Contenedor principal relativo -->
  <div class="relative min-h-screen flex flex-col justify-start items-center py-20 bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)]">
    
    <!-- Fondo visual (no interfiere porque está en z-0 y absoluto dentro de contenedor relative) -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="w-full h-1/3 bg-gradient-to-b from-verde to-[#C8FF96]"></div>
      <div class="w-full h-2/3 bg-gradient-to-b from-[#388E3C] to-[#81C784]"></div>
      <div class="w-full h-1/3 bg-[var(--color-blanco)]"></div>
    </div>

    <!-- Contenido sobre el fondo -->
    <div class="relative z-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 w-full px-5">
      
      {#each locations as location, index}
        <div
          class="bg-white border border-verde rounded-xl shadow-md overflow-hidden transform transition duration-700 ease-in-out opacity-0 translate-y-10 hover:scale-105"
          class:opacity-100={showLocation}
          class:translate-y-0={showLocation}
          style="transition-delay: {index * 150}ms"
        >
          <img src={location.image} alt={`Imagen de ${location.name}`} class="w-full h-40 object-cover" />

          <!-- Barra orange -->
          <div class="relative pt-1">
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
              <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
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
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación de la agencia"
              ></iframe>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</main>

<!-- Slot y Footer fuera del área afectada -->
<slot />
<Footer class="relative z-20" />
