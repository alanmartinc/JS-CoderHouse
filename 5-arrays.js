const arrayA = [];

// Declaraciones de array con numeros
const arrayB = [100,267];

// Declaraciones de array con strings
const arrayC = ["C1", "C2", "C3"];

// Declaraciones de array con booleanos
const arrayD = [true, false, true, false];

// Declaraciones de array mixto
const arrayE = [768, false, "C4"];

console.log(arrayB[1]);

// --------------------------------------------------------

// Recorrido del Array
const numeros = [100, 2, 332, 44];

// Si se usa <= se debe poner -1 despues del numero
for(let x = 0; x < 4; x++) {
    console.log(numeros[x]);
}

// --------------------------------------------------------

// Metodos y Propiedades:

// La propiedad length nos sirve para obtener el largo de un Array, es decir, para identificar cuántos elementos tiene.
console.log(numeros.length);

// El método push () agrega elementos al final del array. Si queremos agregar al inicio del array, utilizamos el método unshift() de forma similar.
numeros.push(999);
numeros.unshift(888);
console.log(numeros);

// Si queremos eliminar el primer elemento del array utilizamos el método shift(); y si queremos eliminar el último elemento, el método pop().
numeros.shift();
numeros.pop();
console.log(numeros);

// El método splice() permite eliminar uno o varios elementos de un array en cualquier posición. Funciona con 2 parametros: el primero es el índice donde se ubica el método para trabajar, y el segundo es la cantidad de elementos a eliminar desde esa posición.
const nombres = ["Alan", "Lucas", "Maria", "Juan"];
nombres.splice(1, 2);
console.log(nombres);

// Mediante el método join podemos generar un string con todos los elementos del array, separados por el valor que pasamos por parámetro.
console.log(nombres.join(", "));

// Mediante el método concat podemos combinar dos Arrays en un único Array.
const perros = ["isa", "nino", "mery"];
const gatos = ["rayo", "ben"];
const mascotas = perros.concat(gatos);
console.log(mascotas);

// El método slice devuelve una copia de una parte del Array dentro de un nuevo Array, empezando por el inicio hasta fin. (fin no incluido).
const personas = ["maria", "agustina", "luz", "nancy"];
const femeninas = personas.slice(1, 3);
console.log(femeninas);

// El método indexOf() nos permite obtener el índice de un elemento en un array. Recibe por parámetro el elemento que queremos buscar en el array y, en caso de existir, nos retorna su índice. Si el elemento no existe nos retornara como valor: -1.
console.log(personas.indexOf("agustina"));

// Similar al anterior, el método includes me permite saber si un elemento que recibo por parámetro existe o no dentro de un array, retornando un valor booleano en caso afirmativo o negativo.
console.log(personas.includes("agustina"));

// El método reverse() invierte el orden de los elementos dentro de un array.
const numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers);

// --------------------------------------------------------

const listaNombres = [];
const cantidad1 = 5;

do {
    let entrada = prompt("Ingresar nombre");
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres.length);
} while(listaNombres.length != cantidad1);

const nuevaLista = listaNombres.concat(["ANA", "EMA"]);
alert(nuevaLista.join("\n"));

// --------------------------------------------------------

// Arrays de objetos 

// Los array pueden usarse para almacenar objetos. Podemos asignar objetos literales o previamente instanciados en la declaración del array o agregar nuevos objetos usando el método push y el constructor.
const objetoArroz = {id: 1, producto: "Arroz" };
const objetoFideos = {id: 2, producto: "Fideos" };

const array = [objetoArroz, objetoFideos];

array.push({id: 3, producto: "Pan"});

console.log(array);

// --------------------------------------------------------

// La sentencia for...of permite recorrer un array ejecutando un bloque de código por cada elemento del objeto.
const listadoProductos = [
    {id: 1, producto: "Papa" },
    {id: 2, producto: "Queso" },
    {id: 3, producto: "Jamon" }
];

for(const producto of listadoProductos) {
    console.log(producto.id);
    console.log(producto.producto);
} 