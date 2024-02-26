# LAB 01
## Script 1

### Instruciones 
* Elabora un script que genere 10 contenedores de
tamaño 100 y les agregue un color aleatorio.

### Documentacion del codigo:

#### Variables usadas:
* body
* div 
* color 

#### Arreglos: 
* colores 

```javascript
const body = document.querySelector('body')
```
Con esta linea de codigo creamos la variable para encontrar a la etiqueta de body en el archivo HTML 

```javascript
colores = ["green","red","brown","black","orange","purple"]
```
Luego creamos un arreglo predefinido donde guardamos los colores que vamos a usar

```javascript
for(let i=0;i<10;i++){
    const div = document.createElement('div')
    body.appendChild(div)
    div.style.height="100px"
    div.textContent="Soy div"
    color=Math.floor(Math.random()*colores.length)
    console.log(color)
    div.style.background= colores[color]
}
```
Luego usamos un for e inicializamos la variable i y le asignamos el valor de 0, luego le damos la condicion de mientras que sea menor de 10 siga el proceso, y luego le damos el incremento a la i. Dentro de el for tenemos: 
```javascript
    const div = document.createElement('div')
    body.appendChild(div)
    div.style.height="100px"
    div.textContent="Soy div"
    color=Math.floor(Math.random()*colores.length)
    console.log(color)
    div.style.background= colores[color]
```
Creamos la variable div y le asignamos que cree un div en el HTML, luego hacemos a div hijo de body, luego le aplicamos una altura de 100 pixeles. Ademas creamos una variable color y le asiganamos un valor random entero el cual es resultado de multiplicar la longitud de el arreglo de colores por la funcion random(), luego mostrarmos en consola el valor de color y por ultimo le colocamos a div un fondo usando el arreglo y el valor de color.