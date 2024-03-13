// escribe tu función acá
function empiezanConA(ArregloLetras) {
    return ArregloLetras.filter(palabra => palabra[0].toLowerCase() === 'a');
}
// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])); // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])); // []
console.log(empiezanConA([])); // []
