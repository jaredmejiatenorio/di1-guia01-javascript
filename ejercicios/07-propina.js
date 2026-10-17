// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 07
// Calculadora de propina
// Declara const montoTexto="80.50", const porcentajeTexto="10". Convierte ambos a Number; calcula propina y totalConPropina (monto + propina).

// TODO: escribe aquí tu solución.
onst montoTexto = "80.50";
const porcentajeTexto = "10";
let monto = Number(montoTexto);
let porcentaje = Number(porcentajeTexto);
let propina = monto * (porcentaje / 100);
let totalConPropina = monto + propina;
console.log("La propina es " + propina + ", el total a pagar con la propina es " + totalConPropina);
