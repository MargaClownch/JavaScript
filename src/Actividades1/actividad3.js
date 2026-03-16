let input1 = parseInt(prompt("Introduce el primer numero"))
let input2 = parseInt(prompt("Introduce el segundo numero"))
if (input1 < input2) {
    console.log(input1 + " Es mayor que " + input2)
    alert(input1 + " Es mayor que " + input2)
} else if (input2 < input1) {
    console.log(input2 + " Es mayor que " + input2)
    alert(input2 + " Es mayor que " + input2)
} else{
    console.log("Los numeros son iguales")
    alert("Los numeros son iguales")
}