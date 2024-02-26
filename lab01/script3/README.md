# LAB 01
## Script 2

### Instruciones 
Elabora un script que sea capaz de generar 5
párrafos.
**Cada párrafo tendrá texto generado de manera
aleatoria con una función que sea creada por ti. El
tamaño del texto de cada párrafo deberá ser entre
50 y 100 palabras. [Se deberá mostrar el tamaño de
caracteres que tenga cada párrafo]

### Documentacion del codigo:

#### Variables usadas:
* body
* div 
* color
* numDePalabrasAlea
* palabrasAleatorias

#### Arreglos:
* texto
#### Funciones 
* generarParrafo
* numeroDePalabras

```javascript
const texto = ['Wikipedia','es','una','enciclopedia','libre','nota','políglota','y','editada','de','manera','colaborativa', 'por', 'la', 'Fundación Wikimedia','una','organización','sin', 'ánimo', 'de' ,'lucro' ,'cuya' ,'financiación' , 'está','basada','en' ,'donaciones']
```
Creamos un arreglo predefino donde esta un texto divido por palabras.

```javascript
const body = document.querySelector('body')
```
Creamos la variable de body para buscar el body en el HTML.

```javascript
function numeroDePalabras(){
    numDePalabrasAlea = Math.floor(Math.random()*100)
    if(numDePalabrasAlea<=75){
        numeroDePalabras()
    }
    return numDePalabrasAlea
}
```
Luego creamos una funcion llamada numero de palabras donde creamos aleatoriamente el numero de palabras.
Primero creamos la variable llamada numPalabrasAlea y le asignamos un valor entero aleatorio, pero lo multiplicamos por 100 el cual es el limite de palabras que puede a ver en el texto, luego hacemos un if donde si la variable de numDePalabrasAlea es menor a 75 (el cual es el menor numero de palabras que puede tener el texto), vuelva a llamar a la funcion para que se asigne un nuevo valor, y si todo esta correcto el valor numerodePlabras se retorna.

```javascript
function generarParrafo(){
    numeroDePalabras()
    const p = document.createElement('p')
    body.appendChild(p)
    for(let i=0;i<numDePalabrasAlea;i++){
        palabrasAleatorias = Math.floor(Math.random()*texto.length)
        p.textContent += texto[palabrasAleatorias] + ' ';
    }
    console.log("El numero de palabras es:" + ' ' + numDePalabrasAlea)
}
```
Para continuar creamos la funcion de generarParrafo() donde llamamos a la funcion anterior de numeroDePalabras() para saber cual es el numero de palabras que va a tener ese parrafo, luego creamos el parrafo y se lo asignamos a la varibale p y lo hacemos hijo de body, luego usamos un for un inizializamos a la variable i como 0 y ponemos como condicion que no tiene que ser menor que el valor de la variable numDePalabrasAlea, para continuar creamos una variable llamada palabrasAleatorias donde le vamos a asignar un numero aleatorio y lo vamos a multiplicar por la longitud del arreglo texto, luego a la variable p le damos texto y le vamos agregando palabras del arreglo texto y le damos la posicion asignada por palabrasAleatorias y le damos un pequeño espacio, Y por ultimo usamos console log para mostrar el numero de palabras que tiene ese parrafo.

```javascript
for(let i=0;i<5;i++){
    generarParrafo()
}
``` 
Por ultimo llamamos a la funcion de generarParrafo() 5 veces para generar 5 parrafos.