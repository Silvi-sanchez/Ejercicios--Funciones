

const calcularPuntaje = (facil, normal, dificil) => {
    const valorFacil = 3;
    const valorNormal = 5;
    const valorDificil = 10;
    return facil * valorFacil + normal * valorNormal + dificil * valorDificil;
}



console.log(calcularPuntaje(3, 0, 0));
console.log(calcularPuntaje(0, 2, 1));
console.log(calcularPuntaje(5, 1, 2));