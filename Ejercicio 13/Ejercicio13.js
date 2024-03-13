// escribe tu respuesta acá
function removerCeros (arreglo){
    return arreglo.filter(DiferentesDeCero => DiferentesDeCero !== 0);
}
// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []
console.log(removerCeros([0, 0, 0])) // []