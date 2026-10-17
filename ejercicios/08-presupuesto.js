// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 08
// Presupuesto estudiantil
// Declara const presupuestoTexto="150", const transporteTexto="25.50", const alimentacionTexto="40". Convierte cada valor y calcula saldoDisponible después de ambos gastos.

// TODO: escribe aquí tu solución.
const presupuestoTexto = "150";
const transporteTexto = "25.50";
const alimentacionTexto = "40";
let presupuesto = number(presupuestoTexto);
let transporte = number(transporteTexto);
let alimentacion = number(alimentacionTexto);
let saldodisponible = presupuesto - transporte - alimentacion;
console.log("El saldo disponible es " + saldodisponible);
