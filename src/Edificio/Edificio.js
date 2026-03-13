class Edificio {
    constructor(calle, numero, codigoPostal) {
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;
        this.plantas = [];
        console.log(`Construido nuevo edificio en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codigoPostal}.`);
    }
    imprimeCalle(){
        return this.calle;
    }
    imprimeNumero(){
        return this.numero;
    }
    imprimeCodigoPostal(){
        return this.codigoPostal;
    }
    modificarCalle(nuevaCalle){
        this.calle = nuevaCalle;
    }
    modificarNumero(nuevoNumero){
        this.numero = nuevoNumero;
    }
    modificarCodigoPostal(nuevoCodigoPostal){
        this.codigoPostal = nuevoCodigoPostal;
    }
    agregarPlantasYPuertas(numPlantas, puertasPorPlantas){
        for (let i = 0; i < numPlantas; i++) {
            let nuevaPlanta = new Array(puertasPorPlantas).fill("");
            this.plantas.push(nuevaPlanta);
        }
    }
    agregarPropietario(nombre, planta, puerta){
        this.plantas[planta - 1][puerta - 1] = nombre;
        console.log(`${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`);
    }
    imprimePlantas() {
        console.log(`Listado de propietarios del edificio calle ${this.calle} número ${this.numero}`);

        // Recorremos las plantas
        for (let i = 0; i < this.plantas.length; i++) {
            // Recorremos las puertas de cada planta
            for (let j = 0; j < this.plantas[i].length; j++) {
                let propietario = this.plantas[i][j];
                console.log(`Propietario del piso ${j + 1} de la planta ${i + 1}: ${propietario}`);
            }
        }
    }
}
// Prueba Fase 1
let edificioA = new Edificio("Garcia Prieto", "58", "15706");
let edificioB = new Edificio("Camino Caneiro", "29", "32004");
let edificioC = new Edificio("San Clemente", "s/n", "15705");

console.log(`El código postal del edificio A es: ${edificioA.imprimeCodigoPostal()}.`);
console.log(`La calle del edificio C es: ${edificioC.imprimeCalle()}.`);
console.log(`El edificio B está situado en la calle ${edificioB.imprimeCalle()} número ${edificioB.imprimeNumero()}.`);
console.log("\n--- FASE 2 ---");

// Prueba Fase 2
console.log("Agregamos 2 plantas y 3 puertas por planta al edificio A...");
edificioA.agregarPlantasYPuertas(2, 3);

console.log("Agregamos 4 propietarios al edificio A...");
edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);

edificioA.imprimePlantas();

console.log("\nAgregamos 1 planta más al edificio A...");
edificioA.agregarPlantasYPuertas(1, 3);

console.log("Agregamos 1 propietario más al edificio A planta 3, puerta 2...");
edificioA.agregarPropietario("Pedro Meijide", 3, 2);

edificioA.imprimePlantas();