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
    { name: 'Beneficios', key: 'beneficios' }
  ];
</script>

<Navbar />
<BotonFlotante />

<!-- Fondo decorativo corregido -->
<div class="relative">
  <!-- Fondo decorativo que NO bloquea clics -->
  <div class="absolute inset-0 z-0 pointer-events-none">
    <div class="w-full h-1/3 bg-gradient-to-b from-verde to-[#C8FF96]"></div>
    <div class="w-full h-2/3 bg-gradient-to-b from-[#388E3C] to-[#81C784]"></div>
    <div class="w-full h-1/3 bg-[var(--color-blanco)]"></div>
  </div>

  <!-- Contenido principal -->
  <main class="mt-4 relative z-10">
    <div class="min-h-screen bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)] flex flex-col items-center py-12">
      
      <!-- Tarjeta principal -->
      <div class="max-w-6xl w-full bg-white shadow-2xl rounded-xl p-10 mt-16 flex flex-col md:flex-row gap-10 relative">
        
        <!-- Imagen -->
        <div class="md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="text-3xl font-bold text-verde mb-4">Microcréditos</h2>
          <div class="border-4 border-yellow-400 rounded-lg overflow-hidden w-full h-72">
            <img src="/images/CREDITOSimg/micro.jpg" alt="" class="object-cover w-full h-full" />
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
              <p>
                Crédito dirigido a los comerciantes que tengan sus ingresos de forma diaria.  
                Te ayudamos a crecer en tu Negocio.
              </p>
            {:else if activeTab === 'requisitos'}
              <ul class="list-disc list-inside space-y-0">
                <li>Un año mínimo de tener negocio</li>
                <li>DUI homologado.</li>
                <li>Recibo de agua o luz reciente</li>
                <li>Presentar comprobantes (facturas)</li>
                <li>Créditos mayores a $10,000 deberá presentar (declaración de IVA)</li>
                <li>Garantía Fiduciaria o Hipotecaria.</li>
                <li class="text-red-600 font-semibold">*Restricciones aplican</li>
              </ul>
            {:else if activeTab === 'beneficios'}
              <ul class="list-disc list-inside space-y-0">
                <li>Formación de Ahorro para capital de Trabajo.</li>
                <li>Crear tu Ahorro Navideño.</li>
                <li>Cobertura de Seguro de Vida y Deuda.</li>
                <li>Incrementar negocios.</li>
                <li>Aumentar tus ganancias.</li>
              </ul>
            {/if}
          </div>
        </div>

        <!-- Botón solicitud -->
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

<!-- Footer con z-20 -->
<Footer class="relative z-20" />

<style>
  button[selected] {
    @apply border-b-2 border-green-700;
  }
</style>
