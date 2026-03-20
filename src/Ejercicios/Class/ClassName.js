// Importante pa examen
const texto = document.getElementsByClassName("texto");
const colores = ["#E63946", "#2A9D8F", "#0077B6"]; // Rojo, Verde, Azul

for (let i = 0; i < texto.length; i++) {

    texto[i].textContent = "Parrafo " + (i + 1);
    texto[i].style.color = colores[i];
}