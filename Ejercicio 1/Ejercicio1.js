
//Contraseña Valida
function contrasenaValida(str) {
    return str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9";
}
// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")); // true
console.log(contrasenaValida("eoZiugBf&g9")); // true
console.log(contrasenaValida("hola")); // false
console.log(contrasenaValida("Hola mundo")); // false
