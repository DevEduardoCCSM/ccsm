<script>
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import BotonFlotante from '$lib/BotonFlotante.svelte';
  import { fade, fly } from 'svelte/transition';
  export const prerender = true;


  let activeTab = 'descripcion';

  const tabs = [
    { name: 'Descripción', key: 'descripcion' },
    { name: 'Requisitos', key: 'requisitos' },
    { name: 'Uso', key: 'uso' }
  ];
</script>

<Navbar />
<BotonFlotante />

<!-- Contenedor relativo principal -->
<div class="relative">

  <!-- Fondo decorativo (NO bloquea clics) -->
  <div class="absolute inset-0 z-0 pointer-events-none">
    <div class="w-full h-1/3 bg-gradient-to-b from-verde to-[#C8FF96]"></div>
    <div class="w-full h-2/3 bg-gradient-to-b from-[#388E3C] to-[#81C784]"></div>
    <div class="w-full h-1/3 bg-[var(--color-blanco)]"></div>
  </div>

  <!-- Contenido principal -->
  <main class="mt-4 relative z-10">
    <div class="min-h-screen flex flex-col items-center py-12 bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)]">
      
      <div class="max-w-6xl w-full bg-white shadow-2xl rounded-xl p-10 mt-16 flex flex-col md:flex-row gap-10 relative">
        
        <!-- Imagen -->
        <div class="md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="text-3xl font-bold text-center text-verde mb-4">CRÉDITOS “Micro, Pequeña y Mediana empresa”</h2>
          <div class="border-4 border-yellow-400 rounded-lg overflow-hidden w-full h-72">
            <img src="/images/CREDITOSimg/empresa.jpg" alt="" class="object-cover w-full h-full" />
          </div>
        </div>

        <!-- Tabs -->
        <div class="md:w-1/2">
          <div class="flex border-b border-gray-300 mb-4">
            {#each tabs as tab}
              <button
                class="px-4 py-2 text-sm font-semibold transition duration-200"
                class:selected={activeTab === tab.key}
                on:click={() => activeTab = tab.key}
                class:bg-green-200={activeTab === tab.key}
                class:text-green-800={activeTab === tab.key}
                class:text-gray-600={activeTab !== tab.key}
              >
                {tab.name}
              </button>
            {/each}
          </div>

          <div class="text-verde space-y-0 text-justify leading-relaxed">
            {#if activeTab === 'descripcion'}
              <p>Créditos creados para satisfacer las necesidades de los micros y pequeños empresarios que deseen hacer crecer su negocio.</p>
            {:else if activeTab === 'requisitos'}
              <ul class="list-disc list-inside space-y-0">
                <li>Un año mínimo de tener negocio.</li>
                <li>DUI homologado.</li>
                <li>Recibo de agua o luz reciente.</li>
                <li>Presentar comprobantes (facturas de compra y venta).</li>
                <li>Créditos mayores a $10,000 (preferiblemente presentar declaración de IVA).</li>
                <li>Garantía Fiduciaria o Hipotecaria.</li>
                <li class="text-red-600 font-semibold">*Restricciones aplican</li>
              </ul>
            {:else if activeTab === 'uso'}
              <ul class="list-disc list-inside space-y-0">
                <li>Capital para adquisición de maquinaria y equipo.</li>
                <li>Ampliación y mejoras de local del negocio.</li>
                <li>Incrementar el capital de trabajo.</li>
                <li>Entre otros destinos.</li>
              </ul>
            {/if}
          </div>
        </div>

        <!-- Botón de solicitud -->
        <a
          href="/SOLICITUD"
          class="absolute bottom-4 right-4 bg-verde text-white px-6 py-3 rounded-full shadow-md hover:bg-amarillo hover:text-verde transition-all text-lg font-semibold hover:scale-105"
        >
          ¡Solicita Aquí!
        </a>

      </div>
    </div>
  </main>
</div>

<!-- Footer al frente siempre -->
<Footer class="relative z-20" />

<style>
  button[selected] {
    @apply border-b-2 border-green-700;
  }
</style>
