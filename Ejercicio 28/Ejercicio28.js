// escribe tu función acá
function traducirANumeros(arr) {
    // Objeto que mapea las palabras a sus equivalentes numéricos
    const letrasNumeros = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    // Función para traducir una palabra a su equivalente numérico
    function palabraANumero(palabra) {
        return equivalencias[palabra.toLowerCase()] || "No se encontro";
    }
// código de prueba
console.log(["cero", "uno", "dos", "tres", "what?", "cuatro"]) // [0, 1, 2, 3, -1, 4]
console.log(["cinco", "seis", "siete", "ocho", "nueve"]) // [5, 6, 7, 8, 9] 