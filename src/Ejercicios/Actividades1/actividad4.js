let nota = parseInt(prompt("Introduce la nota del alumno: "))
if (nota >= 0 && nota <=3){
    console.log("Insuficiente")
    alert("Insuficiente")
} else if (nota > 3 && nota <= 5){
    console.log("Regular")
    alert("Regular")
} else if (nota > 5 && nota <= 6){
    console.log("Suficiente")
    alert("Suficiente")
} else if (nota > 6 && nota <= 7){
    console.log("Bien")
    alert("Bien")
} else if (nota > 7 && nota <= 9){
    console.log("Muy bien")
    alert("Muy bien")
} else if (nota === 10){
    console.log("Excelente")
    alert("Excelente")
} else{
    console.log("Nota invalida")
    alert("Nota invalida")
}