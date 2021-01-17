
const gritar = (str) => (`¡${str}!`);
const obtenerNombreCompleto = (nombre, apellido) => (`${nombre} ${apellido}`);
const saludar = (nombre) => (`Hola ${nombre}, un gusto conocerte`);


const saludarGritando = (nombre, apellido) => {
    const nombreCompleto = obtenerNombreCompleto(nombre, apellido);
    const saludoCompleto = saludar(nombreCompleto);
    const gritoFinal = gritar(saludoCompleto);
    return gritoFinal;
}


console.log(saludarGritando('Ada', 'Lovelace'));

