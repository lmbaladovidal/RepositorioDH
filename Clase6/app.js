
const funcionesDeTareas = require("./funcionesDeTareas.js");

switch (process.argv[2].toUpperCase()) {
    case "LISTAR":
        let objParseado = funcionesDeTareas.leerArchivo()
        objParseado.forEach(element => {console.log(element)            
        });        
       break;
    case "GUARDAR":{
        if (process.argv[3]!= undefined){
            funcionesDeTareas.guardarTarea({titulo:process.argv[3],estado:"Pendiente"})
        }else{
            console.log("Debes ingresar una tarea a guardar.")
        }        
        break;
    }
    case "FILTRAR":{
        if (process.argv[3]!= undefined){
            console.log(funcionesDeTareas.filtrarTarea(process.argv[3]));
        }else{
            console.log("Debes ingresar un estado.")
        }        
        break;
    }
    case "ELIMINAR":{
        console.log("PENDIENTE");
    }
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