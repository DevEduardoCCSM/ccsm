<script>
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import BotonFlotante from '$lib/BotonFlotante.svelte';
  import Tarjeta from '$lib/Tarjeta.svelte';
  export const prerender = true;

  let tarjetas = [
    {
      titulo: 'CRÉDITOS “Micro, Pequeña y Mediana empresa”',
      imagen: '/images/CREDITOSimg/empresa.jpg',
      tabs: [
        {
          name: 'Descripción',
          active: true,
          content: `<p>Créditos creados para satisfacer las necesidades de los micros y pequeños empresarios que deseen hacer crecer su negocio.</p>`
        },
        {
          name: 'Requisitos',
          active: false,
          content: `<ul class="space-y-0">
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Un año mínimo de tener negocio.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> DUI homologado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de agua o luz reciente.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Presentar comprobantes (facturas de compra y venta).</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Créditos mayores a $10,000 (preferiblemente presentar declaración de IVA).</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Garantía Fiduciaria o Hipotecaria.</li>
            <li class="flex items-start gap-2 text-red-600 font-semibold"><span class="text-green-500 font-bold">✓</span> *Restricciones aplican</li>
          </ul>`
        },
        {
          name: 'Uso',
          active: false,
          content: `<ul class="space-y-0">
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Capital para adquisición de maquinaria y equipo.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Ampliación y mejoras de local del negocio.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Incrementar el capital de trabajo.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Entre otros destinos.</li>
          </ul>`
        }
      ]
    }
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
  <main class="bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)]">
    <div class="min-h-screen flex flex-col items-center py-6 sm:py-20 relative">
      <div class="w-full flex flex-col items-center">
        {#each tarjetas as tarjeta (tarjeta.titulo)}
          <Tarjeta titulo={tarjeta.titulo} imagen={tarjeta.imagen} tabs={tarjeta.tabs} />
        {/each}
      </div>
    </div>
  </main>
</div>

<Footer />
