

let arreglo =  ["Lunes","Martes","Miercoles","Jueves","Viernes"];

//FOR EACH
arreglo.forEach(element => {
    console.log("Esto es el for each: " + element);
});

arreglo.forEach((element,index) => {
    console.log("Esto es el for each "+index+": " + element);
    
});
//MAP
console.log("MAP");
let arreglo2 =  [1,4,9,2,81,36];
let raices = arreglo2.map(Math.sqrt);
console.log("Arreglo Original: "+ arreglo2);
console.log(raices);
//FILTER
console.log("FILTER");
console.log(arreglo2.filter(element=>{return element%2==0}))
//REDUCE
let sumNum = arreglo2.reduce((acc,element)=>{
    console.log("acc: "+acc+" element: "+element);
    return acc+element})
console.log(sumNum);