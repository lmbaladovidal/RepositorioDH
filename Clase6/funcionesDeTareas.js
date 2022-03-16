const { json } = require("stream/consumers");

let archivoTareas = {
    archivo:'./tareas.json',
    leerArchivo: function(){
        let fs = require("fs");
        let contenidoArchivo = fs.readFileSync(this.archivo,{encoding:'utf8', flag:'r'});
        return  JSON.parse(contenidoArchivo);
    },
    escribirJason:function(arrayTareas){
        console.log("Escribir")
        let fs = require("fs");         
        fs.writeFileSync(this.archivo,JSON.stringify(arrayTareas));
    },
    guardarTarea:function(tarea){
        let listaTareas = this.leerArchivo();
        console.log(listaTareas)
        listaTareas.push(tarea);
        this.escribirJason(listaTareas);
    },
    filtrarTarea:function(estado){
        let listaTareas = this.leerArchivo();  
        return listaTareas.filter(tarea=>{
            return tarea.estado == estado})
    }
    
}
module.exports = archivoTareas;