function contarCaracteres(texto, caracterBuscado) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracterBuscado) {
            contador++;
        }
    }
    return contador;
}

function contarFs(texto) {
    return contarCaracteres(texto, "F");
}
console.log(contarFs("FFC"));
console.log(contarCaracteres("kakkerlak", "k"));
