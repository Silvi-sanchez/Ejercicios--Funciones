
const calcularPorcentaje = (numero, porcentaje) => (numero * porcentaje) / 100;

const restarPorcentaje = (numero, porcentaje) => {
    porcentajeCalculo = calcularPorcentaje(numero, porcentaje);
    porcentajeRestar = numero - PorcentajeCalculo;
    return porcentajeRestar;
}


console.log(restarPorcentaje(100, 15));
console.log(restarPorcentaje(10, 40));
console.log(restarPorcentaje(200, 10));