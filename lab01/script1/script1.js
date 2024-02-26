//Asi obtenemos el body del html 
const body = document.querySelector('body')

//Arreglo con colores
colores = ["green","red","brown","black","orange","purple"]

//For para crear 10 div 
for(let i=0;i<10;i++){
    //Asi creamos el div
    const div = document.createElement('div')
    //Asi metemos el div al body
    body.appendChild(div)
    //Asi le damos altura de 100 pixeles y le damos texto
    div.style.height="100px"
    div.textContent="Soy div"
    //Asi obtemos un numero random y lo multiplicamos por la longitud del arreglo
    color=Math.floor(Math.random()*colores.length)
    console.log(color)
    //Asi le damos color al div con una posicion aleatoria
    div.style.background= colores[color]
}
