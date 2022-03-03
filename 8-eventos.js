// Manera de controlar las acciones de los usuarios, y definir un comportamiento de la pagina o aplicacion cuando se produzcan.

// Opcion 1:
let boton1 = document.getElementById("btnPrincipal1");
boton1.addEventListener("click", respuestaClick1);

function respuestaClick1() {
    console.log("Me hiciste click");
}

// Opcion 2:
let boton2 = document.getElementById("btnPrincipal2");
boton2.onclick = () => {respuestaClick2()}

function respuestaClick2() {
    console.log("Me hiciste click");
}

// Opcion 3:
function respuestaClick3() {
    console.log("Me hiciste click");
}