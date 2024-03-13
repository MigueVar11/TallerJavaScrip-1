// escribe tu función acá
function capitalizar(texto) {
    // Convertir el texto a minúsculas
    const textoMinusculas = texto.toLowerCase();
    // Dividir el texto en palabras
    const palabras = textoMinusculas.split(" ");
    // Capitalizar la primera letra de cada palabra
    const palabrasCapitalizadas = palabras.map((palabra) => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });
    // Unir las palabras capitalizadas en un solo string
    return palabrasCapitalizadas.join(" ");
}

// código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""
