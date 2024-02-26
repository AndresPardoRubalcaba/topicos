//Para importar texto del html 
//querySelector busca cierta y cuando la encuentra la importa
//const parrafo1 = document.querySelector('p')
//Para cambiar el texto de color
//parrafo1.style.color="aqua"
//console.log(parrafo1)

/*
<div id="container1">1</div>
    <div id="container2">2</div>
    <div id="container3">3</div>
    <div id="container4">4</div>
    <div id="container5">5</div>
    <div id="container6">6</div>
    <div id="container7">7</div>
    <div id="container8">8</div>
    <div id="container9">9</div>
    <div id="container10">10</div>
*/

//Esta forma agarra todos los div y te los manda a un array, pero los agarra por medio de la posicion
const container0 = document.querySelectorAll('div')
//console.log(container0[1])

//Este te optiene un elemento por su id y lo guarda
const container1= document.getElementById('container1')
const container2= document.getElementById('container2')
const container3= document.getElementById('container3')
const container4= document.getElementById('container4')
const container5= document.getElementById('container5')
const container6= document.getElementById('container6')
const container7= document.getElementById('container7')
const container8= document.getElementById('container8')
const container9= document.getElementById('container9')
const container10= document.getElementById('container10')

//Con este se cambia el color a las letras cuando ya lo tienes importado por id
container1.style.color="red"
container3.style.color="red"
container5.style.color="red"
container7.style.color="red"
container9.style.color="orange"

//Con este se cambia el fondo de el texto
container1.style.background="orange"
container2.style.background="red"
container3.style.background="black"
container4.style.background="purple"
container5.style.background="yellow"
container6.style.background="green"
container7.style.background="white"
container8.style.background="cyan"
container9.style.background="brown"
container10.style.background="orange"

//Con este se cambia el tamano de altura 
container1.style.height= "200px"
container2.style.height= "200px"
container3.style.height= "200px"
container4.style.height= "200px"
container5.style.height= "200px"
container6.style.height= "200px"
container7.style.height= "200px"
container8.style.height= "200px"
container9.style.height= "200px"
container10.style.height= "200px"

const colores=["red",'purple','cyan','orange','black']
container0.forEach((item)=>{
    item.style.height='200px'
    item.style.background=colores
})