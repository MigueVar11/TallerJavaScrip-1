
//Numero de likes
function likes(numero) {
    if (numero < 1000) {
        return numero.toString();
    } else if (numero < 1000000) {
        if (numero % 1000 === 0) {
            return (numero / 1000) + "K";
        } else {
            return (numero / 1000).toFixed(0) + "K";
        }
    } else {
        if (numero % 1000000 === 0) {
            return (numero / 1000000) + "M";
        } else {
            return (numero / 1000000).toFixed(0) + "M";
        }
    }
}

// código de prueba
console.log(likes(983)); // "983"
console.log(likes(1900)); // "1K"
console.log(likes(54000)); // "54K"
console.log(likes(120800)); // "121K" (Se aproxima)
console.log(likes(25222444)); // "25M"
