// escribe tu función acá
function password(texto) {
    const textoMinusculas = texto.toLowerCase();
    const textoSinEspacios = textoMinusculas.replace(/ /g, "");
    const textoConNumeros = textoSinEspacios.replace(/a/g, "4").replace(/e/g, "3").replace(/i/g, "1").replace(/o/g, "0");
    return textoConNumeros;
}

// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("Miguel")) // "m1gu3l"
