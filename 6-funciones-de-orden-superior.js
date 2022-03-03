// Recibir funciones por parametro
function porCadaUno(arr, fn) {
    for(const el of arr) {
        fn(el);
    }
}

const myArray = ["alan", "nicolas", "matias"];

// Se puede pasar funciones o metodos
porCadaUno(myArray, console.log);

// --------------------------------------------------------

// forEach: Itera sobre el array y por cada elemento ejecuta la función que enviaremos por parámetro, la cual recibe a su vez el elemento del array que se está recorriendo.

const numeros1 = [1, 2, 3, 4, 5];

numeros1.forEach((num) => {
    console.log(num);
});

// find: Recibe una funcion de comparacion por parámetro. Captura el elemento que se está recorriendo y retorno true o false según la comparación ejecutada.
const cursos1 = [
    {nombre: "ReactJS", precio: 23000},
    {nombre: "JavaScript", precio: 35000}
]

const resultado1 = cursos1.find((el) => el.nombre === "ReactJS");
console.log(resultado1);

// filter: Recibe, al igual que find(), una función comparadora por parámetro, y retorna un nuevo array con todos los elementos que cumplan esa condición. Si no hay coincidencias, retornara un array vacío.
const cursos2 = [
    {nombre: "ReactJS", precio: 23000},
    {nombre: "JavaScript", precio: 35000}
]

const resultado2 = cursos2.filter((el) => el.precio > 24000);
console.log(resultado2);

// some: Funciona igual que el find() recibiendo una función de búsqueda. En vez de retornar el elemento encontrado, some() retorna true o false según el resultado de la interacción de búsqueda.
const cursos3 = [
    {nombre: "ReactJS", precio: 23000},
    {nombre: "JavaScript", precio: 35000}
]

const resultado3 = cursos3.some((el) => el.nombre == "JavaScript");
console.log(resultado3);

// map: Crea un nuevo array con todos los elementos del original transformados según las operaciones de la función enviada por parámetro. Tiene la misma cantidad de elementos pero los almacenados son el return de la función.
const cursos4 = [
    {nombre: "ReactJS", precio: 23000},
    {nombre: "JavaScript", precio: 35000}
]

const resultado4 = cursos4.map((el) => el.nombre);
console.log(resultado4);

// reduce: Nos permite obtener un único valor tras iterar sobre el array. Funciona como un método que resume el array a un único valor de retorno.
const numeros2 = [1, 2, 3, 4, 5];

// Empieza del 0 para ir acumulando cada elemento.
const total = numeros2.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(total);

// sort: Nos permite re-ordenar un array según un criterio que definamos. Recibe una funcion de comparacion por parametro que, a la vez, recibe dos elementos del array. La función retorna un valor numérico (1, -1, 0) que indica que elemento se posiciona antes o después.
const items = [
    {name: "pikachu", price: 29},
    {name: "charmander", price: 57},
    {name: "pidgey", price: 169}
]

const result = items.sort((a, b) => {
    if(a.price < b.price) {
        return 1;
    }
    if(a.price > b.price) {
        return -1;
    }
    // a es igual a b
    return 0;
});

console.log(result);

// --------------------------------------------------------

// El objeto Math contiene una serie de métodos que nos permiten realizar algunas operaciones matemáticas más complejas.
let numberPi = Math.PI;
console.log(numberPi);

// Min & Max: Reciben una serie de argumentos numéricos y devuelven aquel de valor maximo o minimo.
console.log(Math.max(1, 3, 6, 77, 355));

// Ceil, Floor & Round: Sirven para redondear un valor numérico a un número entero cercano.
console.log(Math.ceil(numberPi));
console.log(Math.floor(numberPi));
console.log(Math.round(numberPi));

// Square Root: El método Math.sqrt() retorna la raíz cuadrada de un número. Si se le envia un numero negativo, el método retorna NaN.
console.log(Math.sqrt(14));

// Random: Genera un número pseudo-aleatorio entre 0 y 1, siendo el 0 límite inclusivo y el 1 exclusivo.
console.log(Math.random());

// El objeto Date nos permite instanciar un objeto Date nos genera la fecha y tiempo actual.
console.log(new Date());