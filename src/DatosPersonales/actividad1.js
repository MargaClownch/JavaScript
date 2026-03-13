let nombreCompleto = prompt("Introduzca su nombre y primer apellido:");
let diaNacimiento = parseInt(prompt("Introduzca DÍA de nacimiento (número):"));
let mesNacimiento = parseInt(prompt("Introduzca MES de nacimiento (número del 1 al 12):"));
let anyoNacimiento = parseInt(prompt("Introduzca AÑO de nacimiento (4 dígitos):"));
let hoy = new Date();
let opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let fechaHoyTexto = hoy.toLocaleDateString('es-ES', opcionesFecha);
let longitudNombre = nombreCompleto.length;
let nombreMayusculas = nombreCompleto.toUpperCase();
let primeraA = nombreMayusculas.indexOf('A')+1;
let ultimaA = nombreMayusculas.lastIndexOf('A')+1;
let nombreMenos3 = nombreCompleto.substring(3);
let edad = hoy.getFullYear() - anyoNacimiento;
let mesActual = hoy.getMonth() + 1;
if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < diaNacimiento)) {
    edad--;
}
let fechaNac = new Date(anyoNacimiento, mesNacimiento - 1, diaNacimiento);
let diaSemanaNacido = fechaNac.toLocaleDateString('es-ES', { weekday: 'long' });
let coseno180 = Math.cos(180 * Math.PI / 180);
let numeroMayor = Math.max(34, 67, 23, 75, 35, 19);
let numeroAzar = Math.random();
let contenidoHTML = `
    <li>Buenos días <strong>${nombreCompleto}</strong>, hoy es ${fechaHoyTexto}</li>
    <li>Tu nombre tiene ${longitudNombre} caracteres, incluidos espacios.</li>
    <li>La primera letra A de tu nombre está en la posición: ${primeraA !== -1 ? primeraA : "No tiene la letra A"}</li>
    <li>La última letra A de tu nombre está en la posición: ${ultimaA !== -1 ? ultimaA : "No tiene la letra A"}</li>
    <li>Tu nombre menos las 3 primeras letras es: ${nombreMenos3}</li>
    <li>Tu nombre todo en mayúsculas es: ${nombreMayusculas}</li>
    <li>Tu edad es: ${edad} años.</li>
    <li>Naciste un feliz ${diaSemanaNacido} del año ${anyoNacimiento}.</li>
    <li>El coseno de 180 es: ${coseno180}</li>
    <li>El número mayor de (34,67,23,75,35,19) es: ${numeroMayor}</li>
    <li>Ejemplo de número al azar: ${numeroAzar}</li>
`;
document.getElementById('resultados').innerHTML = contenidoHTML;