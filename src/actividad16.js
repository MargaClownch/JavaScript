
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

let numeroDni;
let letraUsuario;

while (true) {
    numeroDni = parseInt(prompt("Introduce el número de tu DNI (solo los números):"));

    if (numeroDni >= 0 && numeroDni <= 99999999) {
        break;
    } else {
        alert("El número introducido NO es válido. Debe estar entre 0 y 99999999.");
    }
}
letraUsuario = prompt("Introduce la letra de tu DNI:").toUpperCase();

let resto = numeroDni % 23;
let letraCalculada = letras[resto];

if (letraUsuario === letraCalculada) {
    alert("¡Correcto! La letra coincide con el número del DNI.");
} else {
    alert("Incorrecto. La letra para ese número debería ser la " + letraCalculada);
}