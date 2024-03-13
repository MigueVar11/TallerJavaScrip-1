// escribe tu función acá
function terminanConS(Arreglo) {
    return Arreglo.filter(palabraFinal => palabraFinal.endsWith('s'));
}
// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])); // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])); // []
console.log(terminanConS([])); // []
