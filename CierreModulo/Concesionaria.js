
let autos = require('./Autos')
let personas = require('./Personas')
const concesionaria = {
   autos: autos,
   buscarAuto:function (patente){
            busqueda= this.autos.filter(auto => auto.patente == patente)[0]
            return busqueda!= undefined?busqueda:null
        },

    buscarAuto2: function(patente){
            for (let i=0; i<autos.length; i++ ){
                console.log(i,autos[i]);
                if (autos[i].patente == patente){
                    return  autos[i];
                }                
            }
            return null
        },

    venderAuto:function (patente){
            auto = this.buscarAuto(patente)
            auto!=null?auto.vendido = true:null
        },
    autosParaLaVenta:function(){
            return busqueda= this.autos.filter(auto => auto.vendido == false? true:false)
        }, 
    autosNuevos: function(){
            return this.autosParaLaVenta().filter(auto=>auto.km<=100?true:false);
        },

        listaDeVentas: function (autos) {
            let acumulador = []
            for (let i=0; i<autos.length; i++){
                if (autos[i].vendido === true){
                    acumulador.push(autos[i].precio)
                }
            }
            return acumulador
        },
    totalDeVentas: function(){
            let total = this.listaDeVentas()
            return total.length>0?total.reduce((acc,precio)=>acc+=precio):0
        },  
    puedeComprar: function(auto,persona){
            let puedeContado=persona.capacidadDePagoTotal>=auto.precio;
            let puedeCuotas = persona.capacidadDePagoEnCuotas>=(auto.precio/auto.cuotas)
            return puedeContado&&puedeCuotas;
        },
    autosQuePuedeComprar:function(persona){
            return this.autosParaLaVenta().filter(auto=> this.puedeComprar(auto,persona))
        },


}

    
//JJK216
//APL123
console.log(concesionaria.venderAuto("APL123"));
console.log(concesionaria.listaDeVentas(autos));

