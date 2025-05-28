<script>
 
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition'; // Importa las transiciones
 
  export const prerender = true;


  export let locations = [
    {
      name: "Tienda y venta de cereales KARIM",
      horario: "Lunes a Sábado: 7:00 AM - 5:00 PM , Domingo 7:30 AM - 1:00 PM",
      direccion: "Col. Providencia, 4ª Av. Sur Local 1, San Martin S.S",
      contacto: "+503 2258-7504",
      image: "/images/FEDEPUNTOSimg/KARIM.png",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
    {
      name: "Ferretería Santísima Trinidad",
      horario: "Lunes a Domingo: 7:00 AM - 5:00 PM",
      direccion: "5ª Barrio Concepción, 5ª Calle Oriente Casa 2, San Bartolomé Perulapía",
      contacto: "+503 2379-1154",
      image: "/images/FEDEPUNTOSimg/TRINIDAD.png",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
    {
      name: "Peluquería Social",
      horario: "Lunes a Sábado: 8:00 AM - 1:00 PM / 1:30 PM - 5:00 PM, Domingo 8:00 AM - 12:00 PM",
      direccion: "Primera Av. Sur N°5, frente al Parque Central, San Martín, San Salvador",
      contacto: "+503 2258-1616",
      image: "/images/FEDEPUNTOSimg/SOCIAL.png",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
    {
      name: "Tienda El Mercadito",
      horario: "Lunes a Sábado: 7:00 AM - 1:00 PM / 3:00 PM - 9:00 PM, Domingo 7:00 AM - 1:00 PM",
      direccion: "Proyecto Santa Teresa, San Martín, San Salvador.",
      contacto: "+503 7358-3569",
      image: "/images/FEDEPUNTOSimg/MERCADITO.png",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
  ];

  let showLocation = false;

  onMount(() => {
    setTimeout(() => {
      showLocation = true;
    }, 200);
  });
</script>



<main class="mt-4">
  <!-- Aquí va el contenido de la página -->
</main>



<main>
  <!-- Contenedor relativo para encapsular fondo y contenido -->
  <div class="relative min-h-screen flex flex-col justify-start items-center py-20 bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)]">
    
    <!-- Fondo dividido en 3 colores, NO bloquea interacción gracias a pointer-events-none -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="w-full h-1/3 bg-gradient-to-b from-verde to-[#C8FF96]"></div>
      <div class="w-full h-2/3 bg-gradient-to-b from-[#388E3C] to-[#81C784]"></div>
      <div class="w-full h-1/3 bg-[var(--color-blanco)]"></div>
    </div>

    <!-- Grid de tarjetas, por encima del fondo -->
    <div class="relative z-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 sm:px-10">
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
              <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
            </div>
          </div>

          <div class="p-4 flex flex-col gap-2">
            <h2 class="text-xl sm:text-2xl font-bold text-verde">{location.name}</h2>
            <p class="text-sm sm:text-base text-gray-600"><strong>Horario:</strong> {location.horario}</p>
            <p class="text-sm sm:text-base text-gray-600"><strong>Dirección:</strong> {location.direccion}</p>
            <p class="text-sm sm:text-base text-gray-600"><strong>Contacto:</strong> {location.contacto}</p>
            <div class="mt-2">
              <iframe
                src={location.mapUrl}
                class="w-full h-40 sm:h-48 md:h-56 rounded-md border-2 border-verde"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</main>


