function crearSaludo(nombre, edad, paseVip) {
    let saludoCreado = "";

    if(edad >= 18 || paseVip == true) {
        saludoCreado = nombre + " Podes entrar al boliche";
    } else {
        saludoCreado = nombre + " No podes ingresar";
    }

    return saludoCreado;
}

let saludo1 = crearSaludo("Alan", 25, true);
let saludo2 = crearSaludo("Malena", 17, true);
let saludo3 = crearSaludo("Lucas", 16, false);

console.log(saludo1);
console.log(saludo2);
console.log(saludo3);

// --------------------------------------------------------

function sumaConRetorno(a, b) {
    let resultado = a + b;

    return resultado;
}

let suma = sumaConRetorno(8, 4);
console.log(suma);

// --------------------------------------------------------

function restaSinRetorno(a, b) {
    let resultado = a - b;

    console.log(resultado);
}

restaSinRetorno(10, 4);

// --------------------------------------------------------

function calculadora(primerNumero, segundoNumero, operacion) {
    switch(operacion) {
        case "+":
            return primerNumero + segundoNumero;
        break;
        case "-":
            return primerNumero - segundoNumero;
        break;
        case "/":
            return primerNumero / segundoNumero;
        break;
        case "*":
            return primerNumero * segundoNumero;
        break;
        default:
            return 0;
        break;
    }
}

console.log(calculadora(10, 5, "+"));

// --------------------------------------------------------

// FORMA NUMERO 1 - COMUN
function multiplicacion(a, b) {
    let resultado = a * b;
    return resultado;
}

console.log(multiplicacion(5, 5));

// FORMA NUMERO 2 - ANONIMA
const division = function (a, b) {
    let resultado = a / b;
    return resultado;
}

console.log(division(5, 5));

// FORMA NUMERO 3 - FLECHA
const resto = (a, b) => {
    let resultado = a % b;
    return resultado;
}

console.log(resto(3, 3));

// FORMA NUMERO 4 - FLECHA
const sumaDosNumeros = (a, b) => a + b

console.log(sumaDosNumeros(3, 3));