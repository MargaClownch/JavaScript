
function addDia() {
    var nuevoTexto = prompt("Introduce un nuevo día de la semana:");
    var lista = document.getElementById("listaDias");
    var nuevoLi = document.createElement("li");

    nuevoLi.innerHTML = nuevoTexto;
    lista.appendChild(nuevoLi);
}
function borrarPrimerDia() {
    var lista = document.getElementById("listaDias");
    var elementosLi = lista.getElementsByTagName("li");
    lista.removeChild(elementosLi[0]);
}
function borrarUltimoDia() {
    var lista = document.getElementById("listaDias");
    lista.removeChild(lista.lastChild);
}