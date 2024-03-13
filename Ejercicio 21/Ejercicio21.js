// escribe tu función acá
function pares(numeros) {
    const numerosPares = [];
    for (let i = 0; i < numeros.length; i++) {
        //Si el elemento es par se incluye al arreglo
        if (numeros[i] % 2 === 0) {
            numerosPares.push(numeros[i]);
        }
    }
    return numerosPares;
}

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []
