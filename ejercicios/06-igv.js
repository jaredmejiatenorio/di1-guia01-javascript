// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 06
// Cálculo de IGV
// Declara const subtotal=100, const TASA_IGV=0.18. Calcula igv y totalPagar, muestra el total.

// TODO: escribe aquí tu solución.
const subtotal = 100;
const tasa_IGV = 0.18;
let igv = subtotal * tasa_IGV;
let totalPagar = subtotal + igv;
console.log("total a pagar es" +totalPagar);
