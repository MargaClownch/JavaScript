let numero = parseInt(prompt("Ingrese un numero: "));

function esPar(numero) {
    if ( numero % 2 === 0){
        console.log(numero + " Es par")
        alert(numero + " Es par")
    } else{
        console.log(numero + " Es impar")
        alert(numero + " Es impar")
    }
}
esPar(numero)