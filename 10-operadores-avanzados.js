// DESESTRUCTURACIÓN
const usuario = {
    nombre: "Alan",
    edad: 25,
    telefono: {
        cel: 1145678654,
        casa: null
    }
}

const {nombre, edad, telefono: {cel} } = usuario;
console.log(usuario);

// DESESTRUCTURACIÓN EN PARÁMETROS
const mostrarObjeto = ({id, nombre}) => {
    console.log(id, nombre);
}

mostrarObjeto({id: 324, nombre: "Alan"});

// DESESTRUCTURACIÓN DE ARRAYS
const nombres = ["Lucas", "Daniel", "Maria", "Damian"];
const [a,b] = nombres;
console.log(a);
console.log(b);

// OPERADOR SPREAD
const myArray1 = ["nike", "adidas", "puma"];
const myArray2 = ["remera", "pantalon", "medias"];

const container = [...myArray1, ...myArray2];
console.log(container);