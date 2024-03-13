// escribe tu función acá
function numerosAPalabras(arreglo){
const nombres = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];

function numeroAPalabra(numero) {
    if (numero >= 0 && numero <= 9) {
        return nombres[numero];
    } else {
    }
}
}

// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]