// escribe tu función acá para numeros pares
    function posiciones(arreglo) {
        let posicionesPares = [];
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] % 2 === 0) {
                posicionesPares.push(i);
            }
        }
        return posicionesPares;
    }
    
// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []