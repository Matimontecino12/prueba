//prompt("Hola Mundo");

//funciones
//funcion declarada - la podemos llamar en cualquier parte del codigo. tambien arriba no hace falta que este declarada primero

/* function sumar(a,b){
    return a + b
}

let resultado = sumar(2,2);

console.log(resultado);

//expresadas

let suma = function sumar2(a,b){
    console.log(a+b)
}

suma(7,8);


//funciones anonimas
let resta = function(a,b){
    console.log(a-b)
}

resta(8,8);

//arrow function

let multiplicar = (a,b) => a*b;

multiplicar(1,4);



let numeroUno = parseInt(prompt("Decime un numero"));
let numeroDos = parseInt(prompt("Decime otro numero"));

let res = sumar(numeroUno, numeroDos);

alert("El resultado es" + res); */

function sumar(a,b){
    return a + b
}

let restar = (a,b) => a-b;

let multiplicar = (a,b) => a*b;

function dividir(a,b){
    if(b>0){
        return a/b
    }else{
        alert("El divisor debe ser mayor a 0")
    }
}





let numeroUno = parseInt(prompt("Decime un numero"));
let numeroDos = parseInt(prompt("Decime otro numero"));

let operacion = prompt("... opciones");

switch (operacion){
    case 1:
        sumar(numeroUno, numeroDos);
        break
    case 1:
        restar(numeroUno, numeroDos);
        break
    case 1:
        multiplicar(numeroUno, numeroDos);
        break
    case 1:
        dividir(numeroUno, numeroDos);
        break
}