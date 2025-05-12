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

<section class="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-md text-center">
  <h2 class="text-2xl font-bold mb-6 text-verde">Nómina de Junta Directiva y Alta Gerencia</h2>

  <!-- Junta Directiva -->
  <div class="mb-10">
    <h3 class="text-xl font-semibold mb-3 text-verde">Junta Directiva</h3>
    <div class="overflow-x-auto">
      <table class="min-w-full border border-verde">
        <thead class="bg-verde text-white">
          <tr>
            <th class="border border-green-700 px-4 py-2 text-left">Nombre</th>
            <th class="border border-green-700 px-4 py-2 text-left">Cargo</th>
            <th class="border border-green-700 px-4 py-2 text-left">Período</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-yellow-100">
            <td class="border border-green-400 px-4 py-2 text-green-800">Jose Mauricio Rodriguez Flores</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">Director Presidente</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">2024-2029</td>
          </tr>
          <tr class="hover:bg-yellow-100">
            <td class="border border-green-400 px-4 py-2 text-green-800">Mauricio Antonio Callejas</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">Director Secretario</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">2024-2029</td>
          </tr>
          <tr class="hover:bg-yellow-100">
            <td class="border border-green-400 px-4 py-2 text-green-800">Luisa Arcadia Serrano Castro</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">Directora Propietaria</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">2024-2029</td>
          </tr>
          <tr class="hover:bg-yellow-100">
            <td class="border border-green-400 px-4 py-2 text-green-800">Jose Antonio Rosales Grande</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">Primer Director Suplente</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">2024-2029</td>
          </tr>
          <tr class="hover:bg-yellow-100">
            <td class="border border-green-400 px-4 py-2 text-green-800">Maria Esperanza Mendez de Diaz</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">Segunda Directora Suplente</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">2024-2029</td>
          </tr>
          <tr class="hover:bg-yellow-100">
            <td class="border border-green-400 px-4 py-2 text-green-800">Juan Antonio Rodriguez Platero</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">Tercer Director Suplente</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">2024-2029</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Alta Gerencia -->
  <div>
    <h3 class="text-xl font-semibold mb-3 text-verde">Alta Gerencia</h3>
    <div class="overflow-x-auto">
      <table class="min-w-full border border-verde">
        <thead class="bg-verde text-white">
          <tr>
            <th class="border border-green-700 px-4 py-2 text-left">Nombre</th>
            <th class="border border-green-700 px-4 py-2 text-left">Cargo</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-yellow-100">
            <td class="border border-green-400 px-4 py-2 text-green-800">Juan Ovidio Hernández Palacios</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">Gerente General</td>
          </tr>
          <tr class="hover:bg-yellow-100">
            <td class="border border-green-400 px-4 py-2 text-green-800">Marta Luz Leon de Quinteros</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">Gerente de Negocios</td>
          </tr>
          <tr class="hover:bg-yellow-100">
            <td class="border border-green-400 px-4 py-2 text-green-800">Julio Cesar Vasquez Mejia</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">Gerente Financiero</td>
          </tr>
          <tr class="hover:bg-yellow-100">
            <td class="border border-green-400 px-4 py-2 text-green-800">Gladis Marisol Hernandez Guevara</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">Gerente Administrativa</td>
          </tr>
          <tr class="hover:bg-yellow-100">
            <td class="border border-green-400 px-4 py-2 text-green-800">Claudia Beatriz Jovel</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">Auditora Interna</td>
          </tr>
          <tr class="hover:bg-yellow-100">
            <td class="border border-green-400 px-4 py-2 text-green-800">Edwin Alexander Benitez Mejia</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">Administrador de Riesgos</td>
          </tr>
          <tr class="hover:bg-yellow-100">
            <td class="border border-green-400 px-4 py-2 text-green-800">Mario Cesar Mijango Martinez</td>
            <td class="border border-green-400 px-4 py-2 text-green-800">Oficial de Cumplimiento</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>


<Footer />
<slot />
