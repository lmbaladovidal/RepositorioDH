function dominio(dominio){
    console.log("http://"+dominio)
    return "http://"+dominio
}

function obtenerNombre(){
    let frase = 'Hola!, soy Carli';
    console.log(frase.slice(frase.indexOf("Carli"),frase.length))
}


function tengoClases(dia) {
	switch (dia) {
		
		case 'lunes':
		case 'miércoles ':	
		case 'viernes':	
			console.log('"tenés clases"')
			break;
		default:
			console.log('no tenés clases"')
	}
}

function bicicleta(){
    let bicicletaA = {
        rodado: 18,
        marca: "Mountain Bike"
    }
    let bicicletaB = {
        rodado: 24,
        marca: "Aurora"
    }
    
    let bicicletaConRodadoGrande = bicicletaA.rodado>bicicletaB.rodado ? bicicletaA:bicicletaB    
    console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );
}

function noParesDeContarImparesHasta(numero){
    // Escribe aqui tu código
    let acc = 0;
    for(i=1;i<=numero;i++){
        i%2!=0?acc++:"";
        console.log( i,i%2)
    }
    return acc;
}


function agregarHttp(url) {
    return "http://"+url
}

function procesar(arr,callBack){
    for(i=0;i<arr.length;i++){
        arr[i] = callBack(arr[i]);
    }
    console.log(arr)
}

function aprobados(){
    let estudiantes = [
        {nombre: 'John', promedio: 8.5, aprobado: true},
        {nombre: 'Jane', promedio: 7, aprobado: true},
        {nombre: 'June', promedio: 3, aprobado: false},
    ]
    
    let aprobados = estudiantes.filter(function(nota)
                                {return nota.promedio>=4?true:false});
    let desaprobados = estudiantes.filter(function(nota)
                                {return nota.promedio<4?true:false});
    console.log(aprobados);
    console.log(desaprobados);
}

function practicaDestructuring(){
    let arrayTest = ['Value1','Value2',124]
    let [value1,value2,value3] = arrayTest

    let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
    let [,bariloche, ,china] = destinosDelMundo;
    console.log(bariloche,china)

    let objetoTest ={
        key1:"value1",
        key2:"value2",
        key3:"value3"
    }
    let {key2,key3} = objetoTest
    console.log(value1,value2,value3);
    console.log(objetoTest["key1"],key2,key3);

}
practicaDestructuring();
