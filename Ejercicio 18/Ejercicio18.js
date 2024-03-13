// escribe tu función acá
function max(arreglo) {
    let contador = 0;
for (let i = 0; i < arreglo.length; i++) {
    if (contador < arreglo[i]) {
        contador = arreglo[i];
    }
}
return contador;
}
// código de prueba
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9