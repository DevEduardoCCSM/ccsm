<script>
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import BotonFlotante from '$lib/BotonFlotante.svelte';
  import { fade, fly } from 'svelte/transition'; // Importa las transiciones

  export const prerender = true;

</script>

<Navbar />
<slot />
<main class="mt-4">
  <!-- Aquí va el contenido de la página -->
</main>
<slot />
<BotonFlotante />
<style>

</style>

<div class="min-h-screen bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)] flex flex-col justify-start items-center py-12">
  <!-- Fondo dividido en 3 colores -->
  <div class="w-full h-full absolute top-0 left-0 right-0 z-0">
    <div class="w-full h-1/3 bg-gradient-to-b from-verde to-[#C8FF96]"></div>
    <div class="w-full h-2/3 bg-gradient-to-b from-[#388E3C] to-[#81C784]"></div>
    <div class="w-full h-1/3 bg-[var(--color-blanco)]"></div>
  </div>


  <div class="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 mt-16 z-10">
    <!-- Cuadro para la imagen -->
    <div class="relative pt-1">
     
    </div>
    <div class="w-full h-56 sm:h-64 md:h-72 bg-gray-300 rounded-lg mb-6">
      <img src="images/gobiernoBG.png" alt="" class="w-full h-full object-cover rounded-lg"/>
    </div>

    <!-- Contenedor para la información -->
    <div class="gov-container p-4" in:fade={{ duration: 500 }}>
      <h1 class="text-verde text-center text-2xl sm:text-3xl font-bold" in:fly={{ y: -50, duration: 800 }}>
        Transparencia y Cumplimiento a las Normas de Gobierno Corporativo.
      </h1>

      <!-- Barra de progreso -->
      <div class="relative pt-1 mb-4">
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
          <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
        </div>
      </div>

      <!-- Grid de documentos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Documento corporativo 1 -->
        <div class="grid-item bg-amarillo text-verde font-bold text-center py-4 rounded-lg shadow transform hover:scale-105 hover:shadow-lg transition-transform duration-300"
          in:fly={{ y: 50, duration: 600 }}>
          <a href="/pdfs/codigo de gobierno corporativo.pdf" target="_blank" class="text-inherit flex flex-col items-center">
            <!-- Ícono de FontAwesome -->
            <i class="fas fa-book text-4xl mb-2 text-amarillo"></i>  
            Codigo de Gobierno Corporativo
          </a>
        </div>

        <!-- Documento corporativo 2 -->
        <div class="grid-item bg-amarillo
        
         text-verde font-bold text-center py-4 rounded-lg shadow transform hover:scale-105 hover:shadow-lg transition-transform duration-300"
          in:fly={{ y: 50, duration: 600 }}>
          <a href="/pdfs/pacto.pdf" target="_blank" class="text-inherit flex flex-col items-center">
            <!-- Ícono de FontAwesome -->
            <i class="fas fa-file text-4xl mb-2 text-amarillo"></i>  
            Pacto Social
          </a>
        </div>

        <!-- Documento corporativo 3 -->
        <div class="grid-item bg-amarillo text-verde font-bold text-center py-4 rounded-lg shadow transform hover:scale-105 hover:shadow-lg transition-transform duration-300"
          in:fly={{ y: 50, duration: 600 }}>
          <a href="/pdfs/memoria2024.pdf" target="_blank" class="text-inherit flex flex-col items-center">
            <!-- Ícono de FontAwesome -->
            <i class="fas fa-calendar text-4xl mb-2 text-amarillo"></i>  
            Memoria de Labores
          </a>
        </div>

        <!-- Documento corporativo 4 -->
        <div class="grid-item bg-amarillo text-verde font-bold text-center py-4 rounded-lg shadow transform hover:scale-105 hover:shadow-lg transition-transform duration-300"
          in:fly={{ y: 50, duration: 600 }}>
          <a href="/pdfs/etica.pdf" target="_blank" class="text-inherit flex flex-col items-center">
            <!-- Ícono de FontAwesome -->
            <i class="fas fa-users text-4xl mb-2 text-amarillo"></i>  
            Codigo de Etica 
          </a>
        </div>

        <!-- Documento corporativo 5 -->
        <div class="grid-item bg-amarillo text-verde font-bold text-center py-4 rounded-lg shadow transform hover:scale-105 hover:shadow-lg transition-transform duration-300"
          in:fly={{ y: 50, duration: 600 }}>
          <a href="/pdfs/informe-gobierno.pdf" target="_blank" class="text-inherit flex flex-col items-center">
            <!-- Ícono de FontAwesome -->
            <i class="fas fa-flag text-4xl mb-2 text-amarillo"></i>  
            Informe de Gobierno
          </a>
        </div>

        <!-- Documento corporativo 6 -->
        <div class="grid-item bg-amarillo text-verde font-bold text-center py-4 rounded-lg shadow transform hover:scale-105 hover:shadow-lg transition-transform duration-300"
          in:fly={{ y: 50, duration: 600 }}>
          <a href="/pdfs/Estado financiero 1.pdf" target="_blank" class="text-inherit flex flex-col items-center">
            <!-- Ícono de FontAwesome -->
            <i class="fas fa-tablet-alt text-4xl mb-2 text-amarillo"></i>  
            Estados Financieros
          </a>
        </div>

        <!-- Documento corporativo 6 -->
        <div class="grid-item bg-amarillo text-verde font-bold text-center py-4 rounded-lg shadow transform hover:scale-105 hover:shadow-lg transition-transform duration-300"
          in:fly={{ y: 50, duration: 600 }}>
          <a href="/pdfs/Estado financiero 1.pdf" target="_blank" class="text-inherit flex flex-col items-center">
            <!-- Ícono de FontAwesome -->
            <i class="fas fa-tablet-alt text-4xl mb-2 text-amarillo"></i>  
            pendiente
          </a>
        </div>


      <!-- Documento corporativo 6 -->
      <div class="grid-item bg-amarillo text-verde font-bold text-center py-4 rounded-lg shadow transform hover:scale-105 hover:shadow-lg transition-transform duration-300"
      in:fly={{ y: 50, duration: 600 }}>
      <a href="/pdfs/Estado financiero 1.pdf" target="_blank" class="text-inherit flex flex-col items-center">
        <!-- Ícono de FontAwesome -->
        <i class="fas fa-tablet-alt text-4xl mb-2 text-amarillo"></i>  
      pendiente
      </a>
    </div>

    <!-- Documento corporativo 6 -->
    <div class="grid-item bg-amarillo text-verde font-bold text-center py-4 rounded-lg shadow transform hover:scale-105 hover:shadow-lg transition-transform duration-300"
    in:fly={{ y: 50, duration: 600 }}>
    <a href="/pdfs/Estado financiero 1.pdf" target="_blank" class="text-inherit flex flex-col items-center">
      <!-- Ícono de FontAwesome -->
      <i class="fas fa-tablet-alt text-4xl mb-2 text-amarillo"></i>  
      pendiente
    </a>
  </div>
      </div>
    </div>
  </div>
</div>

<Footer />
<slot />
