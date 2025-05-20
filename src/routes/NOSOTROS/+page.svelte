<script>
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import { fade, fly } from 'svelte/transition'; // Importa las transiciones
  import BotonFlotante from '$lib/BotonFlotante.svelte';
  export const prerender = true;

</script>

<Navbar />
<slot />

<main class="mt-4">
  <!-- Aquí va el contenido de la página -->
</main>

<div class="min-h-screen bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)] flex flex-col justify-start items-center py-12">
  <!-- Fondo dividido en 3 colores -->
  <div class="w-full h-full absolute top-0 left-0 right-0 z-0">
      <div class="w-full h-1/3 bg-gradient-to-b from-verde to-[#C8FF96]"></div>
      <div class="w-full h-2/3 bg-gradient-to-b from-[#388E3C] to-[#81C784]"></div>
      <div class="w-full h-1/3 bg-[var(--color-blanco)]"></div>
  </div>


  <!-- Contenedor de todo -->
  <div class="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 mt-16 z-10 mx-4 sm:mx-0">
      <!-- Cuadro para la imagen -->
      <div class="w-full h-80 sm:h-96 bg-gray-300 rounded-lg mb-6">
          <img src="images/NOSOTROS/Personal.jpg" alt="" class="w-full h-full object-cover rounded-lg"/>
          <!-- Barra orange -->
          <div class="relative pt-1">
              <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
                  <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
              </div>
          </div>
      </div>

      <!-- Título -->
      <h1 class="text-3xl sm:text-4xl font-semibold text-verde mb-4 animate-fade-in">ANTECEDENTES</h1>

      <!-- Contenedor para la información -->
      <div class="space-y-8">
          <!-- Texto de introducción -->
          <div class="space-y-4">
              <p class="text-lg text-verde text-justify">
                  CAJA DE CRÉDITO DE SAN MARTÍN, es una Sociedad
                  Cooperativa de Responsabilidad Limitada de Capital
                  Variable; miembro del Sistema FEDECRÉDITO
                  fundada el 22 de Febrero de 1953 en la ciudad de
                  San Martin.
              </p>
              <p class="text-lg text-verde text-justify">
                  La Caja de Crédito continua siendo un patrimonio de
                  la ciudad, el edificio de Caja de Crédito de San
                  Martin, lleva el nombre de “Juan Ovidio Hernández
                  Palacios” como reconocimiento por su trayectoria
                  laboral en la institución; en la actualidad la Caja
                  cuenta con una diversidad de productos y servicios
                  financieros.
              </p>
          </div>

          <!-- 🔹 Cartas -->
          <div class="grid md:grid-cols-2 gap-6">
              <!-- Carta 1 -->
              <div class="bg-verde p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <h2 class="text-xl font-bold text-amarillo mb-2 text-justify">MISION</h2>
                  <p class="text-white">
                      “Somos una Caja de Crédito dedicada a la
                      prestación de servicios financieros a la micro,
                      pequeña y mediana empresa y público en
                      general, a través de una gestión ágil y honesta,
                      orientada a la Atención al cliente”
                  </p>
              </div>

              <!-- Carta 2 -->
              <div class="bg-verde  p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <h2 class="text-xl  font-bold text-amarillo mb-2 text-justify ">VISION</h2>
                  <p class="text-white">
                      “Ser una entidad eficiente en el
                      SISTEMA FEDECRÉDITO, ofreciendo
                      servicios financieros ágiles”
                  </p>
              </div>
          </div>

 <!-- Carta 3 -->
 <div class="grid md:grid-cols-2 gap-6 items-start">
 <div class="bg-verde p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <h2 class="text-xl font-bold text-amarillo mb-2">VALORES</h2>
    <ul class="text-white list-disc list-inside">
      <li>Atención al Cliente.</li>
      <li>Amabilidad.</li>
      <li>Confianza.</li>
      <li>Ética.</li>
      <li>Honradez.</li>
      <li>Agilidad.</li>
      <li>Lealtad.</li>
      <li>Respeto.</li>
      <li>Disciplina.</li>
    </ul>
  </div>
  
  <div class="flex justify-center mt-6">
  <div class="flex gap-6 flex-wrap justify-center">
    <!-- ITEM 1 -->
    <div
      class="grid-item bg-amarillo text-verde font-bold text-center py-4 px-6 rounded-lg shadow transform hover:scale-105 hover:shadow-lg transition-transform duration-300"
      in:fly={{ y: 50, duration: 600 }}
    >
      <a href="/pdfs/pacto1953.pdf" target="_blank" class="text-inherit flex flex-col items-center">
        <i class="fas fa-file text-4xl mb-2 text-amarillo"></i>
        Pacto Social 1953
      </a>
    </div>

    <!-- ITEM 2 -->
    <div
      class="grid-item bg-amarillo text-verde font-bold text-center py-4 px-6 rounded-lg shadow transform hover:scale-105 hover:shadow-lg transition-transform duration-300"
      in:fly={{ y: 50, duration: 600 }}
    >
      <a href="/GOBIERNO-CORPORATIVO" class="text-inherit flex flex-col items-center">
        <i class="fas fa-file text-4xl mb-2 text-amarillo"></i>
       Gobierno Corporativo
      </a>
    </div>
  </div>
</div>

  </div>
</div>
</div>
</div>

<Footer />
<slot />
 