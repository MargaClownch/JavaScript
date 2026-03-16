
function calcularEdad(edad){
    if (edad >= 18 && edad <= 65) {
    console.log("Usted es mayor de edad")
} else if (edad < 18) {
    console.log("Usted es menor de edad")
} else if (edad > 65 && edad <= 120){
    console.log("Usted es jubilado")
} else{
    console.log("Edad invalida")
    }
}
function calcularNota(nota) {
    if (nota >= 0 && nota <= 3) {
        console.log("Has sacado un Insuficiente")
    } else if (nota > 3 && nota <= 5) {
        console.log("Has sacado un Regular")
    } else if (nota > 5 && nota <= 6) {
        console.log("Has sacado un Suficiente")
    } else if (nota > 6 && nota <= 7) {
        console.log("Has sacado un Bien")
    } else if (nota > 7 && nota <= 9) {
        console.log("Has sacado un Muy bien")
    } else if (nota === 10) {
        console.log("Has sacado un Excelente")
    } else {
        console.log("Nota invalida")
    }
}
function saludarAlumno(nombre) {
    console.log("Hola " + nombre)
}

let saludar = prompt("Introduce el nombre: ")
let edad = parseInt(prompt("Ingrese su edad:"))
let nota = parseInt(prompt("Introduce la nota del alumno: "))

saludarAlumno(saludar)
calcularEdad(edad)
calcularNota(nota)