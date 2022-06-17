const main  = document.querySelector("main");
const h2   = document.querySelector("h2");
const a = document.querySelector("a");
const p = document.querySelectorAll("p");
let nombre = prompt("Ingresá tu nombre");
let fondo

nombre == ""?h2.innerHTML += " invitado":h2.innerHTML += " " + nombre
h2.style.fontStyle = "uppercase";
a.style.color ="#E51B3E"
fondo = confirm("Quiere un fondo de pantalla?")
fondo?document.querySelector("body").classList.add("fondo"):null
main.style.display = "block"
for (let i = 0;i<p.length;i++){
    console.log(p[i])
    i%2==0?p[i].classList.add("descatadoPar"):p[i].classList.add("destacadoImpar")
}
