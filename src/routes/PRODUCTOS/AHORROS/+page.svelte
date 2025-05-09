<script>
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
    import BotonFlotante from '$lib/BotonFlotante.svelte';
    import Tarjeta from '$lib/Tarjeta.svelte';
    import { fade, fly } from 'svelte/transition'; // Importa las transiciones
  export const prerender = true;

    let tarjetas = [
      {
        titulo: 'CUENTA DE AHORRO CORRIENTE',
        imagen: '/images/AHORROSimg/AHORROS.png',
        tabs: [
          {
            name: 'Descripción',
            active: true,
            content: `<p>Es una cuenta de ahorro a la vista, donde el
socio tiene disponible los fondos y puede
hacer uso de ellos en cualquier momento a
través de los diferentes puntos de servicio.</p>`
          },
          {
            name: 'Requisitos',
            active: false,
            content: `<ul>
            
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Ser Socio de la institución.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> DUI homologado.</li>
  <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de energía eléctrica.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Comprobante de ingresos.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Si es estudiante presentar Carnet.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Monto mínimo de apertura $ 15.00.</li>


            </ul>`
          },
          {
            name: 'Beneficios',
            active: false,
            content: `<ul>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Libreta de ahorro para un buen control de las transacciones
que realiza.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Disponibilidad de tu dinero a través de nuestros canales
electrónicos.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Sin comisiones ni recargos por manejo de tus ahorros.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Tarjeta de débito VISA internacional, para realizar operaciones
en cajeros automáticos y compras en comercios, sin
membresía y sin costo.</li>
                  <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibe tus remesas familiares directamente en tu cuenta de
ahorro.</li>
                    <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Notificación de compras por medios de mensajes de texto al número de teléfono
  celular que nos has proporcionado.</li>
                      <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>TASA DE INTERÉS: 0.25% ANUAL</li>
                            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>*Exclusivamente para socios.</li>
                    
              </ul>`
          }
        ]
      },
      {
        titulo: 'CUENTA DE AHORRO INFANTIL',
        imagen: '/images/AHORROSimg/AHORROS.png',
        tabs: [
          {
            name: 'Descripción',
            active: true,
            content: `<p>La Cuenta de Ahorro Infantil ha sido creada
especialmente para incentivar y promover la cultura
del ahorro en nuestros niños.
Es una cuenta de ahorro a la vista, donde el socio es
representante del menor y en la libreta aparece el
nombre del socio y del menor.</p>`
          },
          {
            name: 'Requisitos',
            active: false,
            content: `<ul>
  
                
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Ser Socio de la institución.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> DUI homologado.</li>
  <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de energía eléctrica.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Comprobante de ingresos.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Si es estudiante presentar Carnet.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Monto mínimo de apertura $ 15.00.</li>
              
              </ul>`
          },
          {
            name: 'Beneficios',
            active: false,
            content: `<ul>
               <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Libreta de ahorro con el nombre del socio y del menor,
para un buen control de las transacciones que realiza.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Disponibilidad de tu dinero a través de nuestros canales
electrónicos.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Sin comisiones ni recargos por manejo de tus ahorros.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Participa en rifa navideña y celebración del día del niño..</li>
                  <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibe tus remesas familiares directamente en tu cuenta de
ahorro.</li>
                      <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>TASA DE INTERÉS: 0.25% ANUAL</li>
                      <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>*Exclusivamente para socios.</li>
              </ul>`
          }
        ]
      },
      {
        titulo: 'CUENTA DE AHORRO PLANILLA',
        imagen: '/images/AHORROSimg/AHORROS.png',
        tabs: [
          {
            name: 'Descripción',
            active: true,
            content: `<p>Este servicio le permite a su negocio o empresa
efectuar el pago a sus empleados a través de una
cuenta de ahorro y Tarjeta de Débito sin costo de
membresía ni comisiones. Automatice el pago de
sus planillas, ahorre tiempo y minimizando riesgos
por uso de efectivo realizando un pago seguro y ágil,
ofreciéndole la oportunidad a su personal obtener
una Cuenta Ahorro.</p>`
          },
          {
            name: 'Requisitos',
            active: false,
            content: `<ul>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Ser socio de la institución</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Dui homologado</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Comprobante de ingresos</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de energía eléctrica</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Si es estudiante presentar carnet de estudiante</li>
               <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Monto mínimo $15.00</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> La empresa o negocio deberá de tener convenio de
pago de salario con la Caja de Crédito y deberá tener
cuenta de ahorros para hacer los pagos de planilla con
cargo a cuenta.</li>
 

              </ul>`
          },
          {
            name: 'Beneficios',
            active: false,
            content: `<ul>
                  <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Libreta de ahorro para un buen control de las transacciones
que realiza.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Disponibilidad de tu dinero a través de nuestros canales
electrónicos.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Sin comisiones ni recargos por manejo de tus ahorros.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Tarjeta de débito VISA internacional, para realizar operaciones
en cajeros automáticos y compras en comercios, sin
membresía y sin costo.</li>
                 
                      <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>TASA DE INTERÉS: 0.25% ANUAL</li>
                      <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>*Exclusivamente para socios.</li>
              </ul>`
          }
        ]
      },
      {
        titulo: 'CUENTA DE AHORRO PROGRAMADO',
        imagen: '/images/AHORROSimg/AHORROS.png',
        tabs: [
          {
            name: 'Descripción',
            active: true,
            content: `<p>Invertir y proyectar tu futuro es una de las mejores
decisiones que puedes tomar.
Adquiere tu Ahorro Programado con la cuota que más
te convenga, al final del periodo, siempre tendrás tu
dinero disponible; Las cuotas de ahorro pueden ser
pago en ventanilla o por descuento en planilla.</p>`
          },
          {
            name: 'Requisitos',
            active: false,
            content: `<ul>
              
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Ser socio de la institución</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Dui homologado</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Comprobante de ingresos</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de energía eléctrica</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Si es estudiante presentar carnet de estudiante</li>
               <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Monto mínimo $15.00</li>
              </ul>`
          },
          {
            name: 'Beneficios',
            active: false,
            content: `<ul>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Te ayuda a cumplir tus metas.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Obtenga mayor rentabilidad que en una Cuenta de Ahorros tradicional.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> SLibreta de ahorro para un buen control de las transacciones.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Plazos disponibles desde 3 meses hasta 1 año.</li>
             <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Factibilidad de realizar abonos adicionales a la cuota de ahorro.</li>
  <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Cuota y plazo de acuerdo a tus necesidades (desde 3 meses hasta un
año).</li>
  <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Intereses capitalizables cada 3 meses.</li>
  <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Sin comisiones ni recargos por manejo de tus ahorros.</li>
  <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> TASA DE INTERÉS: 5.00% ANUAL.</li>
  <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>*Exclusivamente para socios.</li>
              </ul>`
          }
        ]
      },
      {
        titulo: 'CUENTA DE AHORRO “CRECE MUJER”',
        imagen: '/images/AHORROSimg/AHORROS.png',
        tabs: [
          {
            name: 'Descripción',
            active: true,
            content: `<p>Es una cuenta de ahorro con diseño exclusivo para
mujeres con la cual tendrá la oportunidad de ahorrar
y tendrá la disponibilidad de fondos a través de los
diferentes puntos de servicio.</p>`
          },
          {
            name: 'Requisitos',
            active: false,
            content: `<ul>
              
             <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Ser socio de la institución</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Dui homologado</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Comprobante de ingresos</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de energía eléctrica</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Si es estudiante presentar carnet de estudiante</li>
               <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Monto mínimo $15.00</li>
              </ul>`
          },
          {
            name: 'Beneficios',
            active: false,
            content: `<ul>
             <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Libreta de ahorro para un buen control de las transacciones.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Sin comisiones ni recargos por manejo de tus ahorros.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Posibilidad de obtener beneficios médicos gratuitos a través del Programa
Salud a Tu Alcance.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Disponibilidad de tu dinero a través de nuestros canales electrónicos.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> STarjeta de débito VISA internacional, para realizar operaciones en Cajeros
Automáticos y compras en comercios, sin membrecía y sin costo.</li>
               <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> TASA DE INTERÉS: 0.25% ANUAL</li>
               <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>*Exclusivamente para socios.</li>
  
              </ul>`
          }
        ]
      },
      {
        titulo: 'CUENTA DE AHORRO MI CUENTA',
        imagen: '/images/AHORROSimg/AHORROS.png',
        tabs: [
          {
            name: 'Descripción',
            active: true,
            content: `<p>Es una cuenta dirigida a las personas que deseen
ahorrar, sin incurrir en costo mensuales de
comisiones ni membresía, monto máximo a
ahorrar es $1,000.00.</p>`
          },
          {
            name: 'Requisitos',
            active: false,
            content: `<ul>
              
                <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Ser socio de la institución</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Dui homologado</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Comprobante de ingresos</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de energía eléctrica</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Si es estudiante presentar carnet de estudiante</li>
               <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Monto mínimo $2.00</li>
              </ul>`
          },
          {
            name: 'Beneficios',
            active: false,
            content: `<ul>
               <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Libreta electrónica</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Sin comisiones ni recargos por manejo de
tus ahorros.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Disponibilidad de tu dinero a través de
nuestros canales electrónicos</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tarjeta de débito, para realizar retiros en
la amplia red de Cajeros Automáticos del
Sistema Fedecredito.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tarjeta de bandera local.</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>*Exclusivamente para socios.</li>
              
  
              </ul>`
          }
        
        ]
      },
    ];
  </script>
  
  <Navbar />
  <BotonFlotante />
  
 <!-- Banner con imagen de fondo y texto alineado -->
<section
class="relative w-full h-64 sm:h-72 md:h-[400px] bg-cover bg-no-repeat bg-center flex items-center justify-center md:justify-end text-white shadow-md mt-20"
style="background-image: url('/images/AHORROSimg/banco.jpg');"
>


<!-- Texto sobre la imagen -->
<div
  class="relative z-10 bg-verde bg-opacity-90 p-4 sm:p-6 md:p-10 rounded-lg shadow-lg max-w-md sm:max-w-lg md:max-w-xl w-[90%] text-left mr-4 sm:mr-8 md:mr-16"
>
  <h2 class="text-2xl sm:text-3xl font-bold text-amarillo mb-2 sm:mb-4">
    CUENTAS DE AHORRO
  </h2>
  <p class="text-sm sm:text-base text-white whitespace-pre-line">
    Tus operaciones financieras.
    Ingresa desde tu celular o tablet a nuestra app FEDE MÓVIL y accede a tus productos y servicios financieros las 24 horas.
    *Exclusivo para socios
  </p>
</div>


</section>
<div class="relative pt-0">
  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amarillo">
    <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amarillo"></div>
  </div>
</div>

<!-- Contenido principal -->
<main class="bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)]">
  
<div class="min-h-screen flex flex-col items-center py-6 sm:py-20 relative">
  <!-- Imagen de presentación -->
  

  <!-- Contenedor de tarjetas -->
  <div class="max-w-6xl w-full bg-green-100 shadow-2xl rounded-xl p-6 sm:p-10 mt-4 z-10 flex flex-col md:flex-row gap-6 sm:gap-10">
    <div class="w-full flex flex-col items-center">
      {#each tarjetas as tarjeta (tarjeta.titulo)}
        <Tarjeta titulo={tarjeta.titulo} imagen={tarjeta.imagen} tabs={tarjeta.tabs} />
      {/each}
    </div>
  </div>
</div>
</main>

<Footer />

  
  