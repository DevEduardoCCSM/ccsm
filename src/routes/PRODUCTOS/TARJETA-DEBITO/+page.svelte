<script>


  import Tarjeta from '$lib/Tarjeta.svelte';
  import { fade, fly } from 'svelte/transition'; // Importa las transiciones
  export const prerender = true;


  let tarjetas = [
    {
      titulo: 'TARJETA DE DÉBITO',
      imagen: '/images/TARJETAS/TDEBITO.png',
      tabs: [
        {
          name: 'Descripción',
          active: true,
          content: `<p>Te permite acceder a tu cuenta de ahorro, y realizar
operaciones de forma rápida y segura.
Realiza tus transacciones con mayor rapidez,
comodidad, tranquilidad y seguridad y te brinda la
posibilidad de acceder a una extensa red de cajeros
automáticos y comercios afiliados a la marca VISA, a
nivel nacional e internacional.</p>`
        },
        {
          name: 'Requisitos',
          active: false,
          content: `<ul>
          
          <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Presentar DUI.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tener cuenta de ahorro activa.</li>
          </ul>`
        },
        {
          name: 'Beneficios',
          active: false,
          content: `<ul>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Acceso a fondos de efectivo en todo momento.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Sin costo y sin membresía.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Acceso a los comercios y redes de cajeros automáticos que estén afiliados a la
red de VISA a nivel local e internacional.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Acumulas FEDEPUNTOS por realizar pagos.</li>
                <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Descuentos y promociones en comercios afiliados.</li>
                  <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Notificación de compras por medios de mensajes de texto al número de teléfono
celular que nos has proporcionado.</li>
                    <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Los retiros en ventanilla son siempre gratis.</li>
                  <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Ya no tendrá que hacer filas para retirar efectivo, consultar saldos o realizar
pagos de servicios básicos.</li>
                      <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Desde la comodidad de su casa puede realizar compras a través de Internet.</li>
                        <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Exclusiva para socios.</li>
            </ul>`
        }
      ]
    },
    {
      titulo: 'TARJETA DE DÉBITO CRECE MUJER',
      imagen: '/images/TARJETAS/MUJER.jpg',
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
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Si es estudiante presentar carnet de estudiante</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Ser socio de la institución</li>
             <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Monto mínimo $15.00</li>
            </ul>`
        },
        {
          name: 'Beneficios',
          active: false,
          content: `<ul>
             <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Libreta de ahorro para un buen control de las transacciones</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Sin comisiones ni recargos por manejo de tus ahorros</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Posibilidad de obtener beneficios médicos gratuitos a través del Programa
Salud a Tu Alcance</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Disponibilidad de tu dinero a través de nuestros canales electrónicos</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tarjeta de débito VISA internacional, para realizar operaciones en Cajeros
Automáticos y compras en comercios, sin membrecía y sin costo</li>
<li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Exclusiva para socios.</li>
            </ul>`
        }
      ]
    },
    {
      titulo: 'TARJETA DE DÉBITO MI CUENTA',
      imagen: '/images/TARJETAS/MI.jpg',
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
             <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Libreta electrónica.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Sin comisiones ni recargos por manejo de
tus ahorros.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Disponibilidad de tu dinero a través de
nuestros canales electrónicos.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tarjeta de débito, para realizar retiros en
la amplia red de Cajeros Automáticos del
Sistema Fedecredito.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tarjeta de bandera local.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span>Exclusiva para socios.</li>
            </ul>`
        }
      ]
    },
    {
      titulo: 'TARJETA DE CRÉDITO CLÁSICA',
      imagen: '/images/TARJETAS/CLASICA.jpg',
      tabs: [
        {
          name: 'Descripción',
          active: true,
          content: `<p>Limite de Crédito desde $300.00 hasta $2,000.00.
Nivel de ingresos requeridos:
Comprobar ingresos desde $300.00 a $999.99.</p>`
        },
        {
          name: 'Requisitos',
          active: false,
          content: `<ul>
            
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> DUI homologado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de agua o luz reciente.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Constancia de salario si es empleado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Estado de Cuenta de AFP de los últimos seis meses, para empleados.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Si es negocio deberá presentar comprobantes (facturas o declaración de IVA).</li>
             <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tener negocio o ser empleado con un año mínimo de laborar o continuidad
comprobable.</li>
            <li class="flex items-start gap-2"><span class="text-red-800 font-bold">✓</span> *Restricciones aplican</li>
            </ul>`
        },
        {
          name: 'Beneficios',
          active: false,
          content: `<ul>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Membresía gratis para las tarjetas
de crédito con límites hasta
$2,000.00.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tecnología Contactless para hacer
más seguras tus transacciones.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Servicio gratuito de notificaciones
de alertas por compra o retiros,
por medio de mensajes de texto a
tu celular.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Estado de Cuenta de AFP de los últimos seis meses, para empleados.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Descuentos y promociones en
comercios afiliados al programa de
lealtad.</li>

            </ul>`
        }
      ]
    },
    {
      titulo: 'TARJETA DE CRÉDITO PLATINUM',
      imagen: '/images/TARJETAS/PLATINUM.jpg',
      tabs: [
        {
          name: 'Descripción',
          active: true,
          content: `<p>Limite de Crédito desde $4,000.00 hasta
$25,000.00.
Nivel de ingresos requeridos:
Comprobar ingresos desde $2,000.00 en adelante.</p>`
        },
        {
          name: 'Requisitos',
          active: false,
          content: `<ul>
            
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> DUI homologado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de agua o luz reciente.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Constancia de salario si es empleado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Estado de Cuenta de AFP de los últimos seis meses, para empleados.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Si es negocio deberá presentar comprobantes (facturas o declaración de IVA).</li>
             <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tener negocio o ser empleado con un año mínimo de laborar o continuidad
comprobable.</li>
            <li class="flex items-start gap-2"><span class="text-red-800 font-bold">✓</span> *Restricciones aplican</li>
            </ul>`
        },
        {
          name: 'Beneficios',
          active: false,
          content: `<ul>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Membresía gratis para las tarjetas
de crédito con límites hasta
$2,000.00.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tecnología Contactless para hacer
más seguras tus transacciones.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Servicio gratuito de notificaciones
de alertas por compra o retiros,
por medio de mensajes de texto a
tu celular.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Estado de Cuenta de AFP de los últimos seis meses, para empleados.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Descuentos y promociones en
comercios afiliados al programa de
lealtad.</li>

            </ul>`
        }
      ]
    },
    {
      titulo: 'TARJETA DE CRÉDITO ORO',
      imagen: '/images/TARJETAS/ORO.jpg',
      tabs: [
        {
          name: 'Descripción',
          active: true,
          content: `<p>Limite de Crédito desde $2,100.00 hasta
$3,900.00.
Nivel de ingresos requeridos:
Comprobar ingresos desde $1,400.00 a $1,999.99.</p>`
        },
        {
          name: 'Requisitos',
          active: false,
          content: `<ul>
            
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> DUI homologado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de agua o luz reciente.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Constancia de salario si es empleado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Estado de Cuenta de AFP de los últimos seis meses, para empleados.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Si es negocio deberá presentar comprobantes (facturas o declaración de IVA).</li>
             <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tener negocio o ser empleado con un año mínimo de laborar o continuidad
comprobable.</li>
            <li class="flex items-start gap-2"><span class="text-red-800 font-bold">✓</span> *Restricciones aplican</li>
            </ul>`
        },
        {
          name: 'Beneficios',
          active: false,
          content: `<ul>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Membresía gratis para las tarjetas
de crédito con límites hasta
$2,000.00.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tecnología Contactless para hacer
más seguras tus transacciones.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Servicio gratuito de notificaciones
de alertas por compra o retiros,
por medio de mensajes de texto a
tu celular.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Estado de Cuenta de AFP de los últimos seis meses, para empleados.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Descuentos y promociones en
comercios afiliados al programa de
lealtad.</li>

            </ul>`
        }
      ]
    },
    {
      titulo: 'TARJETA DE CRÉDITO INFINITE ',
      imagen: '/images/TARJETAS/INFINITE.png',
      tabs: [
        {
          name: 'Descripción',
          active: true,
          content: `<p>Limite de Crédito desde $4,000.00 hasta
$30,00.00.
Nivel de ingresos requeridos:
Ingresos minimos $3,500.00 en adelante.</p>`
        },
        {
          name: 'Requisitos',
          active: false,
          content: `<ul>
            
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> DUI homologado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de agua o luz reciente.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Constancia de salario si es empleado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Estado de Cuenta de AFP de los últimos seis meses, para empleados.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Si es negocio deberá presentar comprobantes (facturas o declaración de IVA).</li>
             <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tener negocio o ser empleado con un año mínimo de laborar o continuidad
comprobable.</li>
            <li class="flex items-start gap-2"><span class="text-red-800 font-bold">✓</span> *Restricciones aplican</li>
            </ul>`
        },
        {
          name: 'Beneficios',
          active: false,
          content: `<ul>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Membresía gratis para las tarjetas
de crédito con límites hasta
$2,000.00.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tecnología Contactless para hacer
más seguras tus transacciones.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Servicio gratuito de notificaciones
de alertas por compra o retiros,
por medio de mensajes de texto a
tu celular.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Estado de Cuenta de AFP de los últimos seis meses, para empleados.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Descuentos y promociones en
comercios afiliados al programa de
lealtad.</li>

            </ul>`
        }
      ]
    },
    {
      titulo: 'TARJETA DE CRÉDITO EMPRESARIAL',
      imagen: '/images/TARJETAS/EMPRESARIAL.png',
      tabs: [
        {
          name: 'Descripción',
          active: true,
          content: `<p>Limite de Crédito desde $2,100.00 hasta
$50,00.00.
Nivel de ingresos requeridos:
Ingresos minimos $1,500.00 en adelante.</p>`
        },
        {
          name: 'Requisitos',
          active: false,
          content: `<ul>
            
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> DUI homologado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de agua o luz reciente.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Constancia de salario si es empleado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Estado de Cuenta de AFP de los últimos seis meses, para empleados.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Si es negocio deberá presentar comprobantes (facturas o declaración de IVA).</li>
             <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tener negocio o ser empleado con un año mínimo de laborar o continuidad
comprobable.</li>
            <li class="flex items-start gap-2"><span class="text-red-800 font-bold">✓</span> *Restricciones aplican</li>
            </ul>`
        },
        {
          name: 'Beneficios',
          active: false,
          content: `<ul>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Membresía gratis para las tarjetas
de crédito con límites hasta
$2,000.00.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tecnología Contactless para hacer
más seguras tus transacciones.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Servicio gratuito de notificaciones
de alertas por compra o retiros,
por medio de mensajes de texto a
tu celular.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Estado de Cuenta de AFP de los últimos seis meses, para empleados.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Descuentos y promociones en
comercios afiliados al programa de
lealtad.</li>

            </ul>`
        }
      ]
    },
    {
      titulo: 'TARJETA DE CRÉDITO JOVEN',
      imagen: '/images/TARJETAS/JOVEN.png',
      tabs: [
        {
          name: 'Descripción',
          active: true,
          content: `<p>Para asalariados, comerciantes o hijos de socios
activos de esta Caja.Limite de Crédito desde $500.00 hasta $1,500.00.
Nivel de ingresos requeridos:
Ingresos minimos comprobables $500.00 en
adelante. </p>`
        },
        {
          name: 'Requisitos',
          active: false,
          content: `<ul>
            
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> DUI homologado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de agua o luz reciente.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Constancia de salario si es empleado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Estado de Cuenta de AFP de los últimos seis meses, para empleados.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Si es negocio deberá presentar comprobantes (facturas o declaración de IVA).</li>
             <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tener negocio o ser empleado con un año mínimo de laborar o continuidad
comprobable.</li>
            <li class="flex items-start gap-2"><span class="text-red-800 font-bold">✓</span> *Restricciones aplican</li>
            </ul>`
          },
          {
            name: 'Beneficios',
          active: false,
          content: `<ul>
             <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Bono de 1,500 FEDEPUNTOS de bienvenida.
Membresía gratis.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Descuentos adicionales en eventos.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Acumulación de FEDEPUNTOS por cada
dólar en consumo en compras:</li>
            <li class="flex items-start gap-2"><span class="text-black-500 font-bold">•</span>3 FEDEPUNTOS al realizar tus pagos de Apps
Streaming**.</li>
            <li class="flex items-start gap-2"><span class="text-black-500 font-bold">•</span> 2 FEDEPUNTOS al realizar compras en Apps
Delivery y comercios de Estilo de vida
seleccionados.</li>
             <li class="flex items-start gap-2"><span class="text-black-500 font-bold">•</span> 1 FEDEPUNTOS por compras en el resto de los
establecimientos.</li>
   
            </ul>`
        }
      ]
    },
    {
      titulo: 'TARJETA DE CRÉDITO GARANTIZADA',
      imagen: '/images/TARJETAS/GARANTIZADA.png',
      tabs: [
        {
          name: 'Descripción',
          active: true,
          content: `<p>Acumula FEDEPUNTOS por cada compra que realices y canjéalos por dinero en efectivo o LifeMiles de Avianca
Tecnología Contactless para hacer más seguras tus transacciones.</p>`
        },
        {
          name: 'Requisitos',
          active: false,
          content: `<ul>
            
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> DUI homologado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Recibo de agua o luz reciente.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Constancia de salario si es empleado.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Estado de Cuenta de AFP de los últimos seis meses, para empleados.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Si es negocio deberá presentar comprobantes (facturas o declaración de IVA).</li>
             <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tener negocio o ser empleado con un año mínimo de laborar o continuidad
comprobable.</li>
            <li class="flex items-start gap-2"><span class="text-red-800 font-bold">✓</span> *Restricciones aplican</li>
            </ul>`
        },
        {
          name: 'Beneficios',
          active: false,
          content: `<ul>
             <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tarjeta de Crédito Garantizada por un
depósito a plazo.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Línea rotativa de crédito de acuerdo con un
porcentaje automático del depósito a plazo.</li>
            <li class="flex items-start gap-2"><span class="text-green-500 font-bold">✓</span> Tasa de interés Nominal del 15% anual.</li>
            </ul>`
        }
      ]
    },
  ];
</script>




  <!-- Fondo decorativo -->
<div class="w-full h-full absolute top-0 left-0 right-0 z-0">
  <div class="w-full h-1/3 bg-gradient-to-b from-verde to-[#C8FF96]"></div>
  <div class="w-full h-2/3 bg-gradient-to-b from-[#388E3C] to-[#81C784]"></div>
  <div class="w-full h-1/3 bg-[var(--color-blanco)]"></div>
</div>



<main class="mt-16">
  <div class="min-h-screen bg-gradient-to-b from-[var(--color-amarillo)] to-[var(--color-verde)] flex flex-col items-center py-6 sm:py-20 relative">

    <!-- Imagen de presentación -->
    <div class="w-full h-50 bg rounded-lg mb-4 sm:mb-1">
      <img src="/images/TARJETAS/TARJETAS.png" alt="" class="w-full h-full object-cover rounded-lg" loading="lazy" in:fly={{ y: -50, duration: 800 }} />
    </div>

    <!-- Contenedor principal (más grande y profesional) -->
    <div class="min-h-screen flex flex-col items-center py-6 sm:py-20 relative">
      <div class="w-full flex flex-col items-center">
        {#each tarjetas as tarjeta (tarjeta.titulo)}
          <Tarjeta titulo={tarjeta.titulo} imagen={tarjeta.imagen} tabs={tarjeta.tabs} />
        {/each}
      </div>
    </div>
  </div>
  
</main>


