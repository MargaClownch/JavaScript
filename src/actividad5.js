let edad = parseInt(prompt("Ingrese su edad:"))
if (edad >= 18 && edad <= 65) {
    console.log("Usted es mayor de edad")
    alert("Usted es mayor de edad")
} else if (edad < 18) {
    console.log("Usted es menor de edad")
    alert("Usted es menor de edad")
} else if (edad > 65 && edad <= 120){
    console.log("Usted es jubilado")
    alert("Usted es jubilado")
} else{
    console.log("Edad invalida")
    alert("Edad invalida")
}