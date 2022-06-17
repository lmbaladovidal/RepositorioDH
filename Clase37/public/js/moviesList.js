const body   = document.querySelector("body");
const h1   = document.querySelector("h1");
let fondoOscuro

fondoOscuro = confirm("Desea utilizar fondo oscuro?");

fondoOscuro?body.style.backgroundColor = "#7f7f7f":null;
body.classList.add("fondoMoviesList");
h1.innerHTML += "LISTADO DE PELÍCULAS";
h1.style.color = "white";
h1.style.backgroundColor = "teal";
h1.style.fill = "20px"