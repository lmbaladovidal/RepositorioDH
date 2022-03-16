let autos =require("./autos"); 


const concesionaria = {

    autos: autos,
    buscarAuto:  function(patente){
        for (i=0; i< autos.length; i++ ){
            if (autos[i].patente === patente){
             return   autos[i];
            }
        }
        return null
    },
    venderAuto: function(patente){
        let auto= this.buscarAuto(patente);
        return auto.vendido = true
    },
    autosParaLaVenta: function () {
            let autosDisponibles = autos.filter(function(auto){
            return auto.vendido === false;
            });
            return autosDisponibles;
    },
    autosNuevos: function(autos) {
        let autosOkm = this.autosParaLaVenta()
        let autosNuevos =[];
        for (i=0; i<autosOkm.length; i++ ){
            if (autosOkm[i].km <= 100){
                autosNuevos.push(autosOkm[i]);
            }
        }
        return autosNuevos;
    }
}

console.log(concesionaria.autosNuevos());