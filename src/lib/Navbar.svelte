<script>
  import SafeLink from '$lib/SafeLink.svelte';
  import { afterNavigate } from '$app/navigation';

  let isMenuOpen = false;
  let openDropdown = null;
  let openMobileDropdown = null;

  afterNavigate(() => {
    isMenuOpen = false;
    openDropdown = null;
    openMobileDropdown = null;
  });

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    if (!isMenuOpen) {
      openDropdown = null;
      openMobileDropdown = null;
    }
  };

  const toggleDropdown = (name) => {
    openDropdown = openDropdown === name ? null : name;
  };

  const toggleMobileDropdown = (name) => {
    openMobileDropdown = openMobileDropdown === name ? null : name;
  };

  const dropdownItems = {
    SERVICIOS: [
      { text: 'Remesas', href: '/SERVICIOS/REMESAS' },
      { text: 'Colecturias', href: '/SERVICIOS/COLECTURIAS' },
      { text: 'Salud', href: '/SERVICIOS/SALUD' },
      { text: 'FEDEMÓVIL', href: '/SERVICIOS/FEDEMOVIL' },
      { text: 'FEDE RED 365', href: '/SERVICIOS/RED365' }
    ],
    CRÉDITOS: [
      { text: 'Créditos Personales', href: '/CREDITOS/CREDITO-PERSONAL' },
      { text: 'Créditos Vivienda', href: '/CREDITOS/CREDITO-VIVIENDA' },
      { text: 'Créditos MYPE', href: '/CREDITOS/CREDITO-EMPRESA' },
      { text: 'Crédito Pupular', href: '/CREDITOS/CREDITO-MICRO' }
    ],
    PRODUCTOS: [
      { text: 'Cuentas Ahorro', href: '/PRODUCTOS/AHORROS' },
      { text: 'Tarjetas de Debito/Credito', href: '/PRODUCTOS/TARJETA-DEBITO' }
    ]
  };
</script>

<nav class="fixed top-0 left-0 w-full bg-white text-verde shadow-md z-50">
  <div class="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20 sm:h-24 overflow-hidden">
      <a href="/" class="flex-shrink-0">
        <img
          src="/images/logo.png"
          alt="Logo Empresa"
          class="h-14 sm:h-20 max-w-full object-contain transition-transform duration-300"
          loading="lazy"
        />
      </a>

      <!-- Botón móvil -->
      <div class="lg:hidden">
        <button on:click={toggleMenu} aria-label="Toggle menu">
          <span class="material-icons text-verde text-3xl">{isMenuOpen ? 'CERRAR' : 'MENU'}</span>
        </button>
      </div>

      <!-- Menú escritorio -->
      <ul class="hidden lg:flex divide-x divide-amarillo text-sm font-semibold space-x-4">
        <li class="px-4"><a href="/" class="hover:text-verde">Inicio</a></li>
        <li class="px-4"><a href="/AGENCIAS" class="hover:text-green-700">Agencias</a></li>
        <li class="px-4"><a href="/FEDE-PUNTO" class="hover:text-green-700">Fede Punto Vecino</a></li>
        <li class="px-4"><a href="/INMUEBLES" class="hover:text-green-700">Inmuebles</a></li>
        <li class="px-4"><a href="/CONTACTENOS" class="hover:text-green-700">Contáctenos</a></li>
      </ul>
    </div>
  </div>

  <!-- Menú desplegable móvil -->
  {#if isMenuOpen}
    <div class="lg:hidden bg-white w-full text-center text-sm font-semibold text-verde shadow-md px-4 py-4 space-y-2">
      <ul class="space-y-2">
        <li><a href="/" class="block py-2 hover:text-verde" on:click={() => isMenuOpen = false}>Inicio</a></li>
        <li><a href="/AGENCIAS" class="block py-2 hover:text-green-700" on:click={() => isMenuOpen = false}>Agencias</a></li>
        <li><a href="/FEDE-PUNTO" class="block py-2 hover:text-green-700" on:click={() => isMenuOpen = false}>Fede Punto Vecino</a></li>
        <li><a href="/INMUEBLES" class="block py-2 hover:text-green-700" on:click={() => isMenuOpen = false}>Inmuebles</a></li>
        <li><a href="/CONTACTENOS" class="block py-2 hover:text-green-700" on:click={() => isMenuOpen = false}>Contáctenos</a></li>

        {#each Object.keys(dropdownItems) as title}
          <li>
            <button
              class="w-full text-center py-2 text-verde hover:text-verde"
              on:click={() => toggleMobileDropdown(title)}
            >
              {title}
            </button>
            {#if openMobileDropdown === title}
              <ul class="pl-4 space-y-1">
                {#each dropdownItems[title] as item}
                  <li>
                    <a href={item.href} class="block py-1 hover:text-verde" on:click={() => isMenuOpen = false}>
                      {item.text}
                    </a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>

      <!-- Redes móviles -->
      <div class="mt-6 flex justify-center space-x-6">
        <SafeLink href="https://www.facebook.com/CajadeCreditoSanMartin/?locale=es_LA" target="_blank" aria-label="Facebook" class="text-verde hover:text-blue-600 hover:scale-110">
          <i class="fab fa-facebook-f text-2xl"></i>
        </SafeLink>
        <SafeLink href="https://wa.me/50377424422" target="_blank" aria-label="WhatsApp" class="text-verde hover:text-green-500 hover:scale-110">
          <i class="fab fa-whatsapp text-2xl"></i>
        </SafeLink>
        <SafeLink href="https://www.instagram.com/Cajasanmartin/" target="_blank" aria-label="Instagram" class="text-verde hover:text-pink-600 hover:scale-110">
          <i class="fab fa-instagram text-2xl"></i>
        </SafeLink>
      </div>
    </div>
  {/if}

  <!-- Menú de dropdowns + redes sociales (alineados a la derecha en escritorio) -->
<div class="hidden lg:flex justify-end items-center space-x-8 px-8 mt-1">
  <!-- Dropdowns -->
  <ul class="flex space-x-4 text-sm font-semibold tracking-wide">
    {#each Object.keys(dropdownItems) as title}
      <li class="relative">
        <button on:click={() => toggleDropdown(title)} class="px-4 py-2 hover:text-verde">
          {title}
        </button>
        {#if openDropdown === title}
          <ul class="absolute mt-0 w-56 bg-white border shadow-lg rounded right-0 z-50">
            {#each dropdownItems[title] as item}
              <li class="border-b last:border-none">
                <a href={item.href} class="block px-4 py-2 hover:bg-green-100 hover:text-green-700">
                  {item.text}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>

  <!-- Redes sociales -->
  <div class="flex space-x-4 items-center">
    <SafeLink href="https://www.facebook.com/CajadeCreditoSanMartin/?locale=es_LA" target="_blank" aria-label="Facebook" class="text-verde hover:text-blue-600 hover:scale-110">
      <i class="fab fa-facebook-f text-2xl"></i>
    </SafeLink>
    <SafeLink href="https://wa.me/50377424422" target="_blank" aria-label="WhatsApp" class="text-verde hover:text-green-500 hover:scale-110">
      <i class="fab fa-whatsapp text-2xl"></i>
    </SafeLink>
    <SafeLink href="https://www.instagram.com/Cajasanmartin/" target="_blank" aria-label="Instagram" class="text-verde hover:text-pink-600 hover:scale-110">
      <i class="fab fa-instagram text-2xl"></i>
    </SafeLink>
  </div>
</div>


   
  
</nav>
