// escribe tu función acá

function imprimirMatriz(arreglo) {
    arreglo.forEach(fila => {
        fila.forEach(elemento => {
            console.log(elemento);
        })
    })
}

// código de prueba
console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9