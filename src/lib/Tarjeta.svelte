<script>
    export let titulo;
    export let imagen;
    export let tabs;
  </script>
  
  <div class="max-w-6xl w-full bg-white shadow-2xl rounded-xl p-10 mt-16 z-10 flex flex-col md:flex-row gap-10 relative">
    <!-- Columna de imagen -->
    <div class="md:w-1/2 w-full flex flex-col justify-center items-center px-4">
  <h2 class="text-2xl sm:text-3xl font-bold text-verde mb-4 text-center">{titulo}</h2>
  <div class="border-4 border-yellow-400 rounded-lg overflow-hidden w-full h-72 sm:h-80 md:h-72">
    <img src={imagen} alt={titulo} class="object-cover w-full h-full" />
  </div>
</div>

  
    <!-- Columna de tabs y contenido -->
    <div class="md:w-1/2 flex flex-col justify-between">
      <div>
        <div class="flex border-b border-gray-300 mb-4 flex-wrap">
          {#each tabs as tab}
            <button
              class="px-4 py-2 text-sm font-semibold transition duration-200"
              class:bg-green-200={tab.active}
              class:text-verde={tab.active}
              class:text-gray-600={!tab.active}
              on:click={() => {
                tabs.forEach(t => t.active = false);
                tab.active = true;
              }}
            >
              {tab.name}
            </button>
          {/each}
        </div>
  
        <div class="text-verde space-y-0 text-justify leading-relaxed mb-6">
          {@html tabs.find(t => t.active)?.content}
        </div>
      </div>
  
      <!-- Botón al final del contenido, responsivo -->
      <a
        href="/SOLICITUD"
        class=" bg-verde text-white px-4 py-2 rounded-md shadow-md hover:bg-amarillo hover:text-verde transition-all text-sm font-medium hover:scale-105
               sm:px-5 sm:py-2.5 sm:text-base
               md:px-6 md:py-3 md:text-lg self-end"
      >
        ¡Solicita YA!
      </a>
    </div>
  </div>
