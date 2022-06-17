const section   = document.querySelector("section");
const article  = document.querySelector("article");
const h1  = document.querySelector("h1");

h1.innerHTML += "AGREGAR PELÍCULAS";
h1.classList.add("titulo");
article.classList.add("fondoTransparente");
section.classList.add("fondoCRUD")
console.log(h1)