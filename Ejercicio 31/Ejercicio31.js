// escribe tu función acá
function distancia (tex1,tex2){
    let contador = 0;
const longitud = Math.min(tex1.length, tex2.length);
for (let i=0;i<longitud;i++) {
   if (tex1[i]!==tex2[i]){
}
// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3