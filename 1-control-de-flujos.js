const dni = 40367845; // No cambia el valor
console.log(dni);

let nota = parseInt(prompt("Ingrese su edad"));

if (nota == 7) {
    alert(`Aprobaste con ${nota} debes practicar`);
} else if (nota > 7) {
    alert(`Aprobaste con ${nota} muy bien!`);
} else {
    alert(`Desaprobaste con ${nota}, tenes que recuperar`);
}

// --------------------------------------------------------

const nombre = ' ';

if((nombre != '') && (nombre != ' ')) {
    alert("Hola tu nombre es " + nombre);
} else {
    alert("Perdon, no te puedo saludar");
}

// --------------------------------------------------------

const descuentoPorEstudiante = true;
const descuentoPorJubilado = false;

if((descuentoPorEstudiante == true) || (descuentoPorJubilado == true)) {
    alert("Bienvendio, hoy es tu dia de suerte, tienes un descuento!");
}