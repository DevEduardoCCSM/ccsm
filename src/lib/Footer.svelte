<script>
    // Aquí puedes agregar alguna lógica de Svelte si es necesario
</script>

<!-- Pie de página -->
<footer class="footer bg-verde text-amarillo py-6">
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Grid 1: Contacto -->
        <div class="footer-info flex flex-col items-center">
            <h4 class="font-bold text-xl mb-4 text-amarillo">CONTÁCTENOS</h4>
            <div class="flex items-center mb-3 justify-center">
                <i class="fas fa-phone-alt mr-2"></i>
                <p>+503 2528-5000</p>
            </div>
            <div class="flex items-center mb-3 justify-center">
                <i class="fas fa-envelope mr-2"></i>
                <p>r.social@ccsmartin.com.sv</p>
            </div>
            <a href="/">
                <img src="/images/logo.png" alt="Logo Empresa" class="logo-image h-12 transition-transform transform hover:scale-105" loading="lazy"/>
            </a>
        </div>

        <!-- Grid 2: Enlaces -->
        <div class="footer-links flex flex-col items-center">
            <h4 class="font-bold text-xl mb-4 text-amarillo">INFORMACIÓN</h4>
            <ul class="space-y-2">
                <li><a href="/PRODUCTOS/TARJETA-DEBITO" class="text-white hover:text-yellow-300 transition duration-300">Tarjetas</a></li>
                <li><a href="/AGENCIAS" class="text-white hover:text-yellow-300 transition duration-300">Sucursales</a></li>
                <li><a href="/PRODUCTOS/AHORROS" class="text-white hover:text-yellow-300 transition duration-300">Ahorros</a></li>
                <li><a href="/CREDITOS/CREDITO-PERSONAL" class="text-white hover:text-yellow-300 transition duration-300">Créditos</a></li>
                <li><a href="/NOSOTROS" class="text-white hover:text-yellow-300 transition duration-300">Nosotros</a></li>
                <li><a href="/CONTACTENOS" class="text-white hover:text-yellow-300 transition duration-300">Contacto</a></li>
            </ul>
        </div>

        <!-- Grid 3: Síguenos (Redes sociales) -->
        <div class="footer-social flex flex-col items-center">
            <h4 class="font-bold text-xl mb-4 text-amarillo">SIGUENOS</h4>
            <div class="flex space-x-6 mb-6 justify-center">
                <a
                    href="https://www.facebook.com/CajadeCreditoSanMartin/?locale=es_LA"
                    target="_blank"
                    aria-label="Facebook"
                    class="text-white hover:text-blue-600 transition duration-300 transition-transform transform hover:scale-125"
                >
                    <i class="fab fa-facebook-f text-2xl"></i>
                </a>

                <a
                    href="https://wa.me/50377424422"
                    target="_blank"
                    aria-label="WhatsApp"
                    class="text-white hover:text-green-500 transition duration-300 transition-transform transform hover:scale-125"
                >
                    <i class="fab fa-whatsapp text-2xl"></i>
                </a>

                <a
                    href="https://www.instagram.com/Cajasanmartin/"
                    target="_blank"
                    aria-label="Instagram"
                    class="text-white hover:text-pink-600 transition duration-300 transition-transform transform hover:scale-125"
                >
                    <i class="fab fa-instagram text-2xl"></i>
                </a>
            </div>

            <!-- Contenedor con las imágenes -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                <a href="https://www.fedecredito.com.sv/promociones" target="_blank" class="transition-transform transform hover:scale-125">
                    <img src="/images/FOOTERimg/fedepuntos.png" alt="Imagen 1" class="w-full h-auto square-lg shadow-md hover:opacity+200" loading="lazy"/>
                </a>
                <a href="https://www.fedecredito.com.sv/canales/fede-movil" target="_blank" class="transition-transform transform hover:scale-125">
                    <img src="/images/FOOTERimg/fmobil.png" alt="Imagen 2" class="w-full h-auto square-lg shadow-md hover:opacity+200" loading="lazy"/>
                </a>
                <a href="/FEDE-PUNTO" class="transition-transform transform hover:scale-125">
                    <img src="/images/FOOTERimg/fpunto.png" alt="Imagen 3" class="w-full h-auto square-lg shadow-md hover:opacity+200" loading="lazy"/>
                </a>
                <a href="https://www.fedecredito.com.sv/canales/fede-red-365" target="_blank" class="transition-transform transform hover:scale-125">
                    <img src="/images/FOOTERimg/fred365.png" alt="Imagen 4" class="w-full h-auto square-lg shadow-md hover:opacity+200" loading="lazy"/>
                </a>
            </div>

            <!-- Contenedor con las imágenes descarga de app -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                <a href="https://apps.apple.com/us/app/fede-m%C3%B3vil/id1077370776" target="_blank" class="transition-transform transform hover:scale-125">
                    <img src="/images/FOOTERimg/app-store.webp" alt="Imagen 1" class="w-full h-auto square-lg shadow-md hover:opacity+200" loading="lazy"/>
                </a>
                <a href="https://play.google.com/store/apps/details?id=sv.fedecredito.fedemovil&hl=en" target="_blank" class="transition-transform transform hover:scale-125">
                    <img src="/images/FOOTERimg/google-store.webp" alt="Imagen 4" class="w-full h-auto square-lg shadow-md hover:opacity+200" loading="lazy"/>
                </a>
            </div>
        </div>
    </div>

    <div class="footer-bottom mt-6 text-center text-gray-300">
        <p> Caja de Crédito San Martín-Todos los derechos reservados. El Salvador 2025</p>
    </div>
</footer>

<!-- Agrega estos íconos en el <head> de tu archivo HTML si no los tienes -->
<!-- Esto es para FontAwesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
