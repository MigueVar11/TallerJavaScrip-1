// escribe tu respuesta acá
function multiplicarArreglo(arreglo) {
    if (arreglo.length === 0) {
        // Si el arreglo está vacío, la multiplicación es 1 (elemento neutro).
        return 1;
    }
    let Multiplicar = 1;
    for (let i = 0; i < arreglo.length; i++) {
        Multiplicar *= arreglo[i];
    }
    return Multiplicar;
}

// Código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])); // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
console.log(multiplicarArreglo([])); // 1
