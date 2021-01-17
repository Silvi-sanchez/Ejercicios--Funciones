
const aceptaDeposito = (monto) => monto % 10 === 0


console.log(aceptaDeposito(440)); 
console.log(aceptaDeposito(123)); 
console.log(aceptaDeposito(500.50));
console.log(aceptaDeposito(1000));