for(let i = 0; i < 10; i++) {
    console.log("Hola Coder " + i);
}

// --------------------------------------------------------

for(let i = 1; i <= 3; i++) {
    let nombre = prompt("Como te llamas?");
    alert(nombre + " Tu turno es el N " + i);
}

// --------------------------------------------------------

for(let i = 1; i <= 10; i++) {
    let tabla = 5 * i;
    let resto = tabla % 2;
    
    if(resto == 0) {
        console.log("Es par ", tabla);
    } else {
        console.log("Es impar ", tabla)
    }
}

// --------------------------------------------------------

function escribirTablaMultiplicar(j){
	document.write("<h2>Tabla de multiplicar del "+ j +"</h2>");
	document.write("<ul>");

	for(i = 1; i <= 10; i++){
		document.write("<li>");
		document.write(j + " x " + i + " = " + j * i);
		document.write("</li>");
	}

	document.write("</ul>");
}

var numTablas = parseInt(window.prompt("¿cuantas tablas quieres?"));

for(k = 1; k <= numTablas; k = k+1){
	document.write("<div>");
	escribirTablaMultiplicar(k);	
	document.write("</div>");
} 

// --------------------------------------------------------

let ladron = "";

while(ladron != "bin") {
    ladron = prompt("sos bin?")
}

let ladron = "";

do {
    ladron = prompt("sos bin?")
} while(ladron != "bin");

// --------------------------------------------------------

let dia = "Martes";

switch (dia) {
    case "Lunes":
        console.log("Lunes");
    break;

    case "Martes":
        console.log("Martes");
    break;
    
    case "Miercoles":
        console.log("Miercoles");
    break;
    
    default:
        console.log("No es un dia");
    break;
}

// --------------------------------------------------------

let nombre = "";
let apellido = "";

while(nombre == "" || apellido == "") {
    nombre = prompt("Ingrese su nombre");

    if(nombre != "") {
        apellido = prompt("Ingrese su apellido");
    }

    console.log(nombre + " " + apellido);
}