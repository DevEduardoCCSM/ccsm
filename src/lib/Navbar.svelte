<script>
  let isMenuOpen = false;
  let openDropdown = null;
  let openMobileDropdown = null;
  import SafeLink from '$lib/SafeLink.svelte';

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
      { text: 'FEDE RED 365', href: '/SERVICIOS/RED365' },
    ],
    CRÉDITOS: [
      { text: 'Créditos Personales', href: '/CREDITOS/CREDITO-PERSONAL' },
      { text: 'Créditos Vivienda', href: '/CREDITOS/CREDITO-VIVIENDA' },
      { text: 'Créditos MYPE', href: '/CREDITOS/CREDITO-EMPRESA' },
      { text: 'Crédito Pupular ', href: '/CREDITOS/CREDITO-MICRO' },
    ],
    PRODUCTOS: [
      { text: 'Cuentas Ahorro', href: '/PRODUCTOS/AHORROS' },
      { text: 'Tarjetas de Debito/Credito', href: '/PRODUCTOS/TARJETA-DEBITO' },
    ]
  };
</script>

<nav class="fixed top-0 left-0 w-full bg-white text-verde shadow-md  z-50 ">
  <div class="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="/" class="flex-shrink-0">
        <img src="/images/logo.png" alt="Logo Empresa" class="h-16 transition-transform duration-300" loading="lazy" />
      </a>

      <!-- Desktop Menu -->
      <ul class="hidden lg:flex   divide-x divide-amarillo text-sm font-semibold ">
        <li class="px-4"><a href="/GOBIERNO-CORPORATIVO" class="hover:text-green-700 transition">Gobierno Corporativo</a></li>
        <li class="px-4"><a href="/AGENCIAS" class="hover:text-green-700 transition">Agencias</a></li>
        <li class="px-4"><a href="/FEDE-PUNTO" class="hover:text-green-700 transition">Fede Punto Vecino</a></li>
        <li class="px-4"><a href="/INMUEBLES" class="hover:text-green-700 transition">Inmuebles</a></li>
        <li class="px-4"><a href="/CONTACTENOS" class="hover:text-green-700 transition">Contáctenos</a></li>
      </ul>

      <!-- Mobile menu button -->
      <div class="lg:hidden">
        <button on:click={toggleMenu} aria-label="Toggle menu">
          <span class="material-icons text-verde text-3xl">{isMenuOpen ? 'CERRAR' : 'MENU'}</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div class="lg:hidden bg-white w-full text-sm font-semibold text-gray-500 shadow-md">
      <ul class="divide-y divide-gray-200 px-4 py-4 space-y-2">
        <li><a href="/GOBIERNO-CORPORATIVO" class="block py-2 hover:text-green-700">Gobierno Corporativo</a></li>
        <li><a href="/AGENCIAS" class="block py-2 hover:text-green-700">Agencias</a></li>
        <li><a href="/FEDE-PUNTO" class="block py-2 hover:text-green-700">Fede Punto Vecino</a></li>
        <li><a href="/INMUEBLES" class="block py-2 hover:text-green-700">Inmuebles</a></li>
        <li><a href="/CONTACTENOS" class="block py-2 hover:text-green-700">Contáctenos</a></li>

        {#each Object.keys(dropdownItems) as title}
          <li>
            <button
              class="w-full text-left py-2 text-verde hover:text-green-600 transition"
              on:click={() => toggleMobileDropdown(title)}
            >
              {title}
            </button>
            {#if openMobileDropdown === title}
              <ul class="pl-4 space-y-1">
                {#each dropdownItems[title] as item}
                  <li>
                    <a
                      href={item.href}
                      class="block py-1 text-gray-700 hover:text-green-700"
                    >
                      {item.text}
                    </a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>

      <!-- Redes sociales para móviles -->
      <div class="mt-6 flex justify-center space-x-6">
        <SafeLink href="https://www.facebook.com/CajadeCreditoSanMartin/?locale=es_LA" target="_blank" aria-label="Facebook"
          class="text-verde hover:text-blue-600 transition duration-300 transform hover:scale-150">
          <i class="fab fa-facebook-f text-2xl"></i>
        </SafeLink>
        <SafeLink href="https://wa.me/50377424422" target="_blank" aria-label="WhatsApp"
          class="text-verde hover:text-green-500 transition duration-300 transform hover:scale-150">
          <i class="fab fa-whatsapp text-2xl"></i>
        </SafeLink>
        <SafeLink href="https://www.instagram.com/Cajasanmartin/" target="_blank" aria-label="Instagram"
          class="text-verde hover:text-pink-600 transition duration-300 transform hover:scale-150">
          <i class="fab fa-instagram text-2xl"></i>
        </SafeLink>
      </div>
    </div>
  {/if}

  <!-- Redes sociales (solo visible en escritorio) -->
  <div class="footer-social hidden lg:flex flex-row justify-end items-center  space-x-6 mt-2 tracking-wide">
    <SafeLink href="https://www.facebook.com/CajadeCreditoSanMartin/?locale=es_LA" target="_blank" aria-label="Facebook"
      class="text-verde hover:text-blue-600 transition duration-300 transform hover:scale-150">
      <i class="fab fa-facebook-f text-2xl"></i>
    </SafeLink>
    <SafeLink href="https://wa.me/50377424422" target="_blank" aria-label="WhatsApp"
      class="text-verde hover:text-green-500 transition duration-300 transform hover:scale-150">
      <i class="fab fa-whatsapp text-2xl"></i>
    </SafeLink>
    <SafeLink href="https://www.instagram.com/Cajasanmartin/" target="_blank" aria-label="Instagram"
      class="text-verde hover:text-pink-600 transition duration-300 transform hover:scale-150">
      <i class="fab fa-instagram text-2xl"></i>
    </SafeLink>


  <!-- Menú con dropdowns (solo visible en desktop) -->
  <ul class="hidden lg:flex flex-row items-start justify-end  space-x-2 text-left tracking-wide">
    {#each Object.keys(dropdownItems) as title}
      <li class="relative">
        <button
          on:click={() => toggleDropdown(title)}
          class="px-12 py-1 text-verde hover:text-verde transition"
        >
          {title}
        </button>
        {#if openDropdown === title}
          <ul class="absolute mt-0 w-48 bg-white shadow-lg border rounded right-0 z-10">
            {#each dropdownItems[title] as item}
              <li class="border-b border-gray-200 last:border-none">
                <a href={item.href} class="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 transition">
                  {item.text}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</nav>
