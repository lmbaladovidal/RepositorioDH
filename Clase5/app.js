
const funcionesDeTareas = require("./funcionesDeTareas.js");
let objParseado = JSON.parse(funcionesDeTareas.leerArchivo());
//console.log(process.argv)
console.log(funcionesDeTareas.leerArchivo());
console.log(objParseado);
switch (process.argv[2]) {
    case "listar":
        console.log(objParseado);
       break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción. ")
        console.log("Las acciones disponibles son: Listar");
        console.log("-----------------------------------");

        break;
    default:
        console.log("No entiendo qué quieres hacer.")
        console.log("Las acciones disponibles son: Listar");
        console.log("-----------------------------------");
        break;
}