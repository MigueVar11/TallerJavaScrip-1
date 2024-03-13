// escribe tu función acá
function numAsteriscos(arreglo) {
    let contador = 0;
    arreglo.forEach(asterisco => {
        contador += (asterisco === '*') ? 1 : 0;
    });
    return contador;
}
// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0