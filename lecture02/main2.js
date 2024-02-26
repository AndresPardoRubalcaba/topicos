//Con esta forma selecionamos body para poder introducir cosas
const body = document.querySelector('body')

//Asi creamos un parrafo y le damos texto con textcontent
//const parrafo = document.createElement('p')
//parrafo.textContent = 'Soy un parrafo'

//Esto es para darle un hijo a body y poder introducir el parrafo al body y mostrarlo
//body.appendChild(parrafo)

//Asi se crea un div 
const div = document.createElement('div')
//Asi metemos el div como hijo de body
body.appendChild(div)
//Asi le damos al div una altura de 500 pixeles y un color de fondo rojo
div.style.height='500px'
div.style.background='red'

//Asi creamos un parrafo
const p = document.createElement('p')
//Asi le damos texto al parrafo
p.textContent='Soy el parrafo hijo'
p.style.fontSize = '30px'
//Asi hacemos a p hijo de div para mostrarlo
div.appendChild(p)
