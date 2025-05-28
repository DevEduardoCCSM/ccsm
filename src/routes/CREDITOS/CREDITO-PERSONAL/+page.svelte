<script>
 
  import Tarjeta from '$lib/Tarjeta.svelte';
  export const prerender = true;

  let tarjetas = [
    
    {
      titulo: 'Crédito Personal',
      imagen: '/images/CREDITOSimg/personal.jpg',
      tabs: [
        {
          name: 'Descripción',
          active: true,
          content: `<p>Si eres empleado de una empresa privada o pública, o tienes negocio, acércate a cualquiera de nuestras sucursales de Caja de crédito San Martín y solicita tu crédito personal ya.</p>`
        },
        {
          name: 'Requisitos',
          active: false,
          content: `<ul class="space-y-0">
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tener un año mínimo de laborar o tener continuidad laboral comprobable.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Edad entre 18 a 60 años.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de agua o luz reciente (deudor y fiador).</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Ingresos mínimos de $400.00 dólares.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Constancia de salario.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Si es negocio deberá presentar comprobantes (facturas o declaración de IVA).</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Garantía Fiduciaria o Hipotecaria.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Solvencia Municipal.</li>
            <li class="flex items-start gap-2 text-red-600 font-semibold"><span class="text-green-500 font-bold">✓</span> *Restricciones aplican</li>
          </ul>`
        },
        {
          name: 'Uso',
          active: false,
          content: `<ul class="space-y-0">
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Consolidación de deudas.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Compra de vehículo.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Artículos del hogar.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Gastos médicos.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Viajes.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Estudios.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Entre otros destinos.</li>
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


