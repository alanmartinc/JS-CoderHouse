let a = parseInt(prompt("Ingrese el valor a"));
let b = parseInt(prompt("Ingrese el valor b"));
let resultado = a + b;

setTimeout(() => {
    // GETELEMENTBYID(): Sirve para acceder a un elemento de la estructura HTML, utilizando su atributo ID como identificación.
    document.getElementById("p-resultado").style.backgroundColor = "gray";
    document.getElementById("p-resultado").innerHTML = resultado;
}, 2000);

console.log(resultado);

// OBTENER DATOS DE INPUTS: Para obtener o modificar datos de un formulario HTML desde JS, podemos hacerlo mediante el DOM. Accediendo a la propiedad value de cada input.
setTimeout(() => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    
    document.getElementById("info").innerHTML = nombre + " " + apellido;
}, 2000);