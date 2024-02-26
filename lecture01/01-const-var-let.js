console.log("Hola mundo")

/*Codigo que te dice si es mayor de edad o no//
var edadPersona;
edadPersona=18;

if (edadPersona>=18) {
    console.log("Eres mayor de edad")
}
else{
    console.log("Eres menor de edad")
}
*/

//Codigo que te da un numero de una carta y si es igual a 21 ganas
function getRandomInt(max) {
    return Math.floor(Math.random() * 21);
  }

NumeroDeLaCarta = getRandomInt();
console.log("Te salio el numero: " + NumeroDeLaCarta)

if(NumeroDeLaCarta==21){
    console.log("Ganaste")
}
if(NumeroDeLaCarta>21){
    console.log("Perdiste")
}
if(NumeroDeLaCarta<21){
    console.log("Perdiste")
}