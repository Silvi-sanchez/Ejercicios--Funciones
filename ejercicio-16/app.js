
const calcularPorcentaje = (numero, porcentaje) => (numero * porcentaje) / 100;

const sumarPorcentaje = (numero, porcentaje) => {
    const PorcentajeCalculo = calcularPorcentaje(numero, porcentaje);
    const PorcentajeSumar = PorcentajeCalculo + numero;
    return PorcentajeSumar;
}

console.log(sumarPorcentaje(100, 15)); 
console.log(sumarPorcentaje(10, 50)); 
console.log(sumarPorcentaje(200, 10));