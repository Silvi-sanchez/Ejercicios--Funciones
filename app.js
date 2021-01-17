      // FUNCIONES DECLARADAS

// Declaración de la función
function sumaDeclarada() {
    const resultado = 3 + 3;
    alert(resultado);
    return resultado;
};
// Para que funcione hay que llamarla:
sumaDeclarada();
// alert(sumaDeclarada()); ---> Otra opción




      // FUNCION EXPRESADA

const sumaDeclarada = function () {
    const resultado = 3 + 3;
    alert(resultado);
    return resultado;
};
// Para que funcione hay que llamarla:
sumaDeclarada();




      // FUNCIONES FLECHA 
      // Arrow Functions
 
const sumaDeclarada = () => {
    const resultado = 3 + 3;
    alert(resultado);
    return resultado;
}
     // Para que funcione hay que llamarla:
sumaDeclarada();


     //RETORNO IMPLICITO (En funcion flecha):
const sumaDeclarada = () => 5+ 5;

    // Para llamar el retorno implicito uso alert:
alert(sumaDeclarada());




// Arrow Function con parametros
const sumaDosNumeros = (num1, num2) => {
   const resultado = num1 + num2;
   return resultado;
};

      //Invocación con argumentos
alert(`El total de la suma es ${sumaDosNumeros(num1, num2)}`);