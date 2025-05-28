<script>

  import Tarjeta from '$lib/Tarjeta.svelte';
  export const prerender = true;

  let tarjetas = [
    {
      titulo: 'Crédito Vivienda',
      imagen: '/images/CREDITOSimg/vivienda.webp',
      tabs: [
        {
          name: 'Descripción',
          active: true,
          content: `<p>
            Crédito para vivienda te da la posibilidad de comprar
            vivienda nueva o usada, ampliar o remodelar tu vivienda,
            compra de terreno, construcción de vivienda y traslado de
            deuda de vivienda.
          </p>`
        },
        {
          name: 'Requisitos',
          active: false,
          content: `<ul class="space-y-0">
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tener negocio o ser empleado con un año mínimo o continuidad laboral comprobable.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> DUI homologado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de agua o luz reciente.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Constancia de salario si es empleado o comerciante.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Copia de la escritura.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Carta oferta del inmueble a comprar o presupuesto de la construcción o mejoras a realizar.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Si el inmueble queda como garantía se realizará un VALÚO.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Solvencia Municipal.</li>
            <li class="flex items-start gap-2 text-red-600 font-semibold"><span class="text-green-500 font-bold">✓</span> *Restricciones aplican</li>
          </ul>`
        },
        {
          name: 'Uso',
          active: false,
          content: `<ul class="space-y-0">
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Comprar vivienda nueva o usada.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Ampliar o remodelar tu vivienda.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Compra de terreno.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Construcción de vivienda.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Traslado de deuda de vivienda.</li>
          </ul>`
        }
      ]
    }
  ];
</script>


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

