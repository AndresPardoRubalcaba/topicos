//IMPORTANTE NO OLVIDES PONER EL defer EN EL HTML PARA LLAMAR AL JAVASCRIPT
//Asi obtenemos el body del html 
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every
const body = document.querySelector('body')

//Arreglo con colores
colores = ["green","red","brown","black","orange","purple","blue","yellow","white","aqua",
            "pink","grey","violet","lime","cyan","salmon","teal","magenta","chocolate","turquoise"]

//Arreglo para guardar las posiciones aleatorias de los colores
coloresUsados = []

//Llamar a la funcion para crear las 10 posiciones aleatorias
crearPosiciones()

//For para crear los 10 div
for(let i=0;i<10;i++){
    //Creacion de div
    const div = document.createElement('div')
    //Hacer hijo del body al div
    body.appendChild(div)
    //Poner 100 pixeles de altura a los div
    div.style.height="100px"
    //Poner texto al div
    div.textContent="Soy div"
    //Asignarle el color al div con las posiciones del arreglo de colores usados en el arreglo colores
    div.style.background = colores[coloresUsados[i]]
}

//Funcion para crear las posiciones 
function crearPosiciones(){
    while(coloresUsados.length<10){
        //Asi obtemos un numero random y lo multiplicamos por la longitud del arreglo
        color=Math.floor(Math.random()*colores.length)
        //Usamos la funcion every para determinar si todos los elementos del arreglo 
        //cumplen la condicion de ser diferentes del numero nuevo a ingresar.
        //La funcion every regresa un valor true o false
        //en este caso si el valor es verdadero se ingresa el nuevo color al arreglo
        const verificador = (colorVerificado) => colorVerificado != color ;
        if(coloresUsados.every(verificador)){
            coloresUsados.push(color)
        }
    console.log(color)
}
}