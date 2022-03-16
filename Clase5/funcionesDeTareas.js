
let archivoTareas = {
    leerArchivo: function(){
        let fs = require("fs");
        return  fs.readFileSync('./tareas.json',{encoding:'utf8', flag:'r'});
    }
}
module.exports = archivoTareas;