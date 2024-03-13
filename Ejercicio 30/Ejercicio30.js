// escribe tu función acá
function numAsteriscos(matriz) {
    let contador = 0;
    matriz.forEach(fila => {
        fila.forEach(astericos => {
            if (astericos === '*') {
                contador++;
            }
        });
    });
    return contador;
}

// código de prueba
console.log(numAsteriscos([
  ['*', '', '*'],
  ['', '*', ''],
  ['*', '', '*']
])); // 5