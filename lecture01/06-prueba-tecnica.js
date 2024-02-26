//1.Clase persona
class Persona{
    constructor(nombre,direccion,telefono,edad){
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
        this.edad = edad
    }
}

//2.arreglo para almacenar 5 personas 
const personas=[]

//3.captura las personas
while(personas.length<5){
    let nombre = prompt("Cual es tu nombre? ", )
    let direccion = prompt("Cual es tu direccion? ", )
    let telefono = prompt("Cual es tu telefono? ", )
    //Usamos parseInt para volver la entrada un numero y poder sumarla facilmente
    let edad = parseInt(prompt("Cual es tu edad? ", ))

    let validadorDeCampoVacio =  noCampoVacio(nombre,direccion,telefono,edad)
    let validadorDeNumero = validarNumero(telefono,edad)

    if(validadorDeCampoVacio == true && validadorDeNumero == true ){
        personas.push(new Persona(nombre,direccion,telefono,edad))
    }
}

//4.funcion para que no quede vacio
function noCampoVacio(nombre,direccion,telefono,edad){
    if(nombre == "" || direccion == "" || telefono == "" || edad ==""){
        window.alert("Dejaste un espacio vacio, porfavor vuelve a introducir los datos")
        console.log("Dejaste un espacio vacio, porfavor vuelve a introducir los datos")
    }
    else{
        return true
    }
}

//5.funcion para verificar que sea un numero
function validarNumero(telefono,edad){
    if(isNaN(telefono)){
        window.alert("Tu telefono introducido no es un numero")
        console.log("Tu telefono introducido no es un numero")
    }
    if(isNaN(edad)){
        window.alert("Tu edad introducida no es un numero")
        console.log("Tu edad introducia no es un numero")
    }
    else{
        return true
    }
}

//6.funcion para ver el promedio de edad
function promedioEdad(){
    let sumaEdades = 0
    personas.forEach(persona =>{
        sumaEdades = sumaEdades + persona.edad
    })
    sumaEdades = sumaEdades/5
    console.log("El promedio de las edades es: " + sumaEdades)
}
promedioEdad()

//7.Funcion que ordena y pone en mayusculas los nombres
function ordenAlfabetico(){
    //Aqui se ordena alfabeticamente
    personas.sort((personaAlf1,personaAlf2)=>{
        if(personaAlf1.nombre<personaAlf2.nombre){
            return -1
        }
        if(personaAlf1.nombre<personaAlf2.nombre){
            return 1
        }
        return 0
    })

    //Aqui se pone en mayusculas
    for(let i = 0;i<personas.length;i++){
        personas[i].nombre=personas[i].nombre.toUpperCase()
    }

    console.log("Las personas son:")
    personas.map((personas)=>{console.log(personas.nombre)})
}
ordenAlfabetico()