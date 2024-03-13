// escribe tu función acá
function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""
