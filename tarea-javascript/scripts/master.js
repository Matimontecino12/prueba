

var NumeroRandom;
var intentos = 0;
var numero;
var nombre = "";

function PedirNombre (){
    let  nombre =  prompt("decime tu nombre");
}

function generarnumerorandom(){
    let NumeroRandom = Math.floor(Math.random()*100)+1;
   

    while(numero != NumeroRandom){
    let  numero =  prompt("decime un numero");
    if(numero == NumeroRandom) {
     alert("acertaste");
    }
    else if(numero < NumeroRandom) {
        alert("el numero que me dijiste es menor al seleccionado");
        nombre.intentos  += 1;
     }
      else if(numero > NumeroRandom) {
        alert("el numero que me dijiste es mayor al seleccionado");
        intentos += 1;
     };

    }

    let jugador = {
        nombre: "",
        intentos: 0
    }
    jugador.nombre = prompt("Ingresa tu nombre");
   
}

PedirNombre();
generarnumerorandom();
