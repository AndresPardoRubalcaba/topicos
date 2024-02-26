//IMPORTANTE NO OLVIDES PONER EL defer EN EL HTML PARA LLAMAR AL JAVASCRIPT
//Creamos el arreglo donde va a estar las palabras para usar 
const texto = ['Wikipedia','es','una','enciclopedia','libre','nota','políglota','y','editada','de','manera','colaborativa',
'por', 'la', 'Fundación Wikimedia','una','organización','sin', 'ánimo', 'de' ,'lucro' ,'cuya' ,'financiación' ,
'está','basada','en' ,'donaciones']

//Buscamos el body 
const body = document.querySelector('body')

//For para crear 5 parrafos llamando a la funcion de parrafos
for(let i=0;i<5;i++){
    generarParrafo()
}

//Funcion que genera los parrafos
function generarParrafo(){
    //Llamamos a la funcion para generar un numero aleatorio de palabras a usar
    numeroDePalabras()
    //Creamos el parrafo
    const p = document.createElement('p')
    //Lo hacemos hijo de body
    body.appendChild(p)
    //For que tiene la condicion que mientras sea menor del numero de palabras
    //asiganadas no va a parar de agregar texto al parrafo creado
    for(let i=0;i<numDePalabrasAlea;i++){
        //Variable para la posicion de las letras en el arreglo
        palabrasAleatorias = Math.floor(Math.random()*texto.length)
        //Asi le agregamos texto al parrafo
        p.textContent += texto[palabrasAleatorias] + ' ';
    }
    console.log("El numero de palabras es:" + ' ' + numDePalabrasAlea)
}

//Funcion para generar un numero de palabras de entre 75 y 100
function numeroDePalabras(){
    numDePalabrasAlea = Math.floor(Math.random()*100)
    if(numDePalabrasAlea<=75){
        numeroDePalabras()
    }
    return numDePalabrasAlea
}