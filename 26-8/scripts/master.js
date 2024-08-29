//arrays lo basico y modulos

//array
//const no puede cmbiar de valor

let edades = [];//vacio
const edad = [17,18,16,];

let nombres = ["juan","jose","pedro"];

let jugadores = [
    {nombre:"juan",edad:17,skill:""},
    {nombre:"pedro",edad:19,skill:""},
];
//arreglo bidimencional
let partidas =[[],{},"",15];


// con la anotaion de corchetes tengo un elemento
console.log("la edad es: ", edad[0])

//notacion de corchetes para signar un valor a un elemento

edad[0]=15;

//metodos de los arreglos
edades.push(5);//agregar un elemento al final
edades.pop();//quita el ultimo elemento


//longitud
edad.length();

edad.map((edad)=>{
    console.log("la edad es",edad);
});

