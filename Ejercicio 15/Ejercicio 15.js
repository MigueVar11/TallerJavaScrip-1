// escribe tu función acá
function transcribir(cadenaADN) {
    const complementos = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };

    const cadenaARN = cadenaADN
        .split('')
        .map(base => complementos[base])
        .join('');

    return cadenaARN;
}

// Código de prueba
console.log(transcribir("ACGT")); // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"
