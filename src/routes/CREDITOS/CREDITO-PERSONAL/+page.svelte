<script>
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import BotonFlotante from '$lib/BotonFlotante.svelte';
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

<!-- Fondo decorativo no bloquea interacción -->
<div class="relative">
  <div class="absolute inset-0 z-0 pointer-events-none">
    <div class="w-full h-1/3 bg-gradient-to-b from-verde to-[#C8FF96]"></div>
    <div class="w-full h-2/3 bg-gradient-to-b from-[#388E3C] to-[#81C784]"></div>
    <div class="w-full h-1/3 bg-[var(--color-blanco)]"></div>
  </div>

  <!-- Contenido principal -->
  <main class="mt-4 relative z-10">
    <div class="min-h-screen bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)] flex flex-col items-center py-12">
      <div class="max-w-6xl w-full bg-white shadow-2xl rounded-xl p-10 mt-16 flex flex-col md:flex-row gap-10 relative">
        <div class="md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="text-3xl font-bold text-verde mb-4">Crédito Personal</h2>
          <div class="border-4 border-yellow-400 rounded-lg overflow-hidden w-full h-72">
            <img
              src="/images/CREDITOSimg/personal.jpg"
              alt=""
              class="object-cover w-full h-full"
            />
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
                Si eres empleado de una empresa privada o pública, o tienes negocio, acércate a cualquiera de nuestras sucursales de Caja de crédito San Martín y solicita tu crédito personal ya.
              </p>
            {:else if activeTab === 'requisitos'}
              <ul class="list-disc list-inside space-y-0">
                <li>Tener un año mínimo de laborar o tener continuidad laboral comprobable.</li>
                <li>Edad entre 18 a 60 años.</li>
                <li>Recibo de agua o luz reciente (deudor y fiador).</li>
                <li>Ingresos mínimos de $400.00 dólares.</li>
                <li>Constancia de salario.</li>
                <li>Si es negocio deberá presentar comprobantes (facturas o declaración de IVA).</li>
                <li>Garantía Fiduciaria o Hipotecaria.</li>
                <li>Solvencia Municipal.</li>
                <li class="text-red-600 font-semibold">*Restricciones aplican</li>
              </ul>
            {:else if activeTab === 'uso'}
              <ul class="list-disc list-inside space-y-0">
                <li>Consolidación de deudas.</li>
                <li>Compra de vehículo.</li>
                <li>Artículos del hogar.</li>
                <li>Gastos médicos.</li>
                <li>Viajes.</li>
                <li>Estudios.</li>
                <li>Entre otros destinos.</li>
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

<Footer class="relative z-20" />

<style>
  button[selected] {
    @apply border-b-2 border-green-700;
  }
</style>
