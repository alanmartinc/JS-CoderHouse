// LOCALSTORAGE
/* localStorage.setItem('ms', 'Hola Mundo!'); */

let mensaje = localStorage.getItem('ms');
document.getElementById("mostrarMS").innerHTML = mensaje;

// SESSIONSTORAGE
/* sessionStorage.setItem('email', 'info@gmail.com'); */


// STRINGIFY: Con JSON.stringify podemos transformar un objeto JavaScript a un string en formato JSON.
const producto1 = {"id": 2, producto: "Arroz"};
const enJSON1 = JSON.stringify(producto1);
console.log(enJSON1);

// PARSE: Con JSON.parse podemos transformar string en formato JSON a objeto JavaScript.
const enJSON2 = '{"id":2,"producto":"Arroz"}';
const producto2 = JSON.parse(enJSON2);
producto2.stock = 10;
console.log(producto2);