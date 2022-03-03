let datos = {nombre: "Alan", apellido: "Cabot", edad: 25, telefono: 1562738495};

console.log(datos);
console.log(datos.nombre);
console.log(datos["apellido"]);

// --------------------------------------------------------

function Persona1(nombre, apellido, edad, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.telefono = telefono;
}

const persona1 = new Persona1("Lucas", "Cabot", 27, 1587403234);
console.log(persona1);

// --------------------------------------------------------

function Persona2(nombre, edad, calle) {
    // Propiedades -> variables
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;

    // Metodos -> functiones
    this.hablar = function () { 
        console.log("Hola soy " + this.nombre)
    }
}

// Crear objeto
const persona2 = new Persona2("Maria", 22, "Avellaneda 1230");

// Usar objeto
persona2.hablar();

// --------------------------------------------------------

// Diferencia entre function y class
class Persona3 {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }

    hablar() { 
        console.log("Hola soy " + this.nombre)
    }
}

const persona3 = new Persona3("Paula", 18, "Puerto madero 783");

persona3.hablar();