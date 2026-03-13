
function dameUnNumero() {
    let numeroStr = prompt("Dame un número: ");
    return parseInt(numeroStr);
}

function esMayor(numero_1, numero_2) {
    return numero_1 > numero_2;
}

let num1 = dameUnNumero();
let num2 = dameUnNumero();

while (esMayor(num1, num2) || num1 === num2) {
    alert("El primero es mayor");
    num1 = dameUnNumero();
    num2 = dameUnNumero();
}
alert("El segundo es mayor. FIN de la ejecución");