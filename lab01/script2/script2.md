# LAB 01
## Script 2

### Instruciones 
* Usando el script anterior agrega la funcionalidad de
que los colores no se repitan.
**Tu estructura deberá contar con 20 colores
diferentes.

### Documentacion del codigo:

#### Variables usadas:
* body
* div 
* color

#### Arreglos:
* colores 
* colores usados

#### funciones 
* crearPosiciones

```javascript
const body = document.querySelector('body')
```
Con esta linea de codigo creamos la variable para encontrar a la etiqueta de body en el archivo HTML.

```javascript
colores = ["green","red","brown","black","orange","purple","blue","yellow","white","aqua",
            "pink","grey","violet","lime","cyan","salmon","teal","magenta","chocolate","turquoise"]
```
Luego creamos un arreglo predefinido donde guardamos los colores que vamos a usar

```javascript
coloresUsados = []
```
Luego creamos un arreglo vacio donde guardaremos las posiciones de los colores que vamos a usar(Estas posiciones van a ser usados en el arreglo de colores).

```javascript
function crearPosiciones(){
    while(coloresUsados.length<10){
        color=Math.floor(Math.random()*colores.length)
        const verificador = (colorVerificado) => colorVerificado != color ;
        if(coloresUsados.every(verificador)){
            coloresUsados.push(color)
        }
    console.log(color)
}
}
```
Cremoas una funcion para crear las 10 posiciones la cual contiene un while que tiene la condicion de seguir hasta que la longitud del arreglo de coloresUsados sea menor a 10.Dentro del while hay lo siguiente:

```javascript
while(coloresUsados.length<10){
        color=Math.floor(Math.random()*colores.length)
        const verificador = (colorVerificado) =>        colorVerificado != color ;
        if(coloresUsados.every(verificador)){
            coloresUsados.push(color)
        }
    console.log(color)
```
A la variable de color le asignamos un valor aleatorio, luego creamos una variable de verificiar en la cual usamos un callback donde si detecta que todos los valores son diferentes a color este retornara un true y luego en el if este se cumplira viendo que cada numero sea difertente de los numeros anteriores, luego lo ingresamos al arreglo de colores usados.

```javascript
crearPosiciones()

//For para crear los 10 div
for(let i=0;i<10;i++){
    const div = document.createElement('div')
    body.appendChild(div)
    div.style.height="100px"
    div.textContent="Soy div"
    div.style.background = colores[coloresUsados[i]]
}
```
Luego llamamos a la funcion para que cree los 10 valores para poder usarlos en el arreglo de colores. Ademas tenemos un for en el cual se crea el div usando el mismo metodo de script 1 solo que ahora usamos la posicion dada por coloresUsados.