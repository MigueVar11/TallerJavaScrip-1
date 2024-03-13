// escribe tu respuesta acá
function contarRango(numero1, numero2) {
    let Contador = 0;
    for (let i = numero1 + 1; i < numero2; i++) {
        Contador++;
    }
    return Contador;
}

// código de prueba
console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0
