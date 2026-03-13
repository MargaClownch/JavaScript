let tablero = "";
let tamaño = 8;

for (let i = 0; i < tamaño; i++) {
    for (let j = 0; j < tamaño; j++) {
        if ((i + j) % 2 === 0) {
            tablero += " ";
        } else {
            tablero += "#";
        }
    }
    tablero += "\n";
}
console.log(tablero);