// escribe tu función acá
function min(numeros) {
    let minimo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < minimo) {
            minimo = numeros[i];
        }
    }
    return minimo;
}
// código de prueba
console.log(min([3, 9, 6])); // 3
console.log(min([67, 35, 54, 26])); // 26
console.log(min([5, 9, 2, 4, 5, 7])); // 2
