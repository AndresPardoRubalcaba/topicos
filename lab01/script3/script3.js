const texto = ['Wikipedia','es','una','enciclopedia','libre','nota','políglota','y','editada','de','manera','colaborativa',
'por', 'la', 'Fundación Wikimedia','una','organización','sin', 'ánimo', 'de' ,'lucro' ,'cuya' ,'financiación' ,
'está','basada','en' ,'donaciones']

const body = document.querySelector('body')

for(let i=0;i<5;i++){
    generarParrafo()
}

function generarParrafo(){
    numeroDePalabras()
    const p = document.createElement('p')
    body.appendChild(p)
    for(let a=0;a<numDePalabrasAlea;a++){
        palabrasAleatorias = Math.floor(Math.random()*texto.length)
        p.textContent += texto[palabrasAleatorias] + ' ';
    }
    console.log("El numero de palabras es:" + ' ' + numDePalabrasAlea)
}

function numeroDePalabras(){
    numDePalabrasAlea = Math.floor(Math.random()*100)
    if(numDePalabrasAlea<=75){
        numeroDePalabras()
    }
    return numDePalabrasAlea
}


