//Las clases siempre empiezan con mayuscula
class Libro{
    constructor(titulo,autor,año,genero){
        this.titulo = titulo
        this.autor = autor
        this.año = año
        this.genero = genero
    }

    informacionDelLibro(){
        // Se usa para hacer template string ``
        return `El libro se llama ${titulo} y lo escribio ${autor} en el año de ${año}
        y pertenece al genero de ${genero}`
    }
}

//Arreglo para guardar los libros
const libros=[];

while(libros.length<3){
    let titulo = prompt("Nombre del libro: ", )
    let autor = prompt("Nombre del autor: ", )
    let año = prompt("Año del libro: ", )
    let genero = prompt("Genero del libro(Puede ser aventura,terror o fantasia): ", )

    //Validar que los campos no sean vacios
    if(titulo == "" || autor == "" || año == "" || genero ==""){
        window.alert("Dejaste un espacio vacio, porfavor vuelve a introducir los datos")
    }
    else{
        //validar que sea un numero y tenga 4 digitos
        if(isNaN(año)){
            window.alert("Tu fecha introducida no es un numero")
            console.log("Tu fecha introducia no es un numero")
        }
        else if(año.length!=4){
            window.alert("Tu fecha introducida no es de 4 digitos")
            console.log("Tu fecha introducida no es de 4 digitos")
        }
        else{
            //Validar que el genero sea aventura,terror o fantasia
            if(genero == "aventura" || "terror" || "fantasia"){
                window.alert("Libro ingresado")
                console.log("Libro ingresado")
                //Aqui se agregan los datos del libro al arreglo
                libros.push(new Libro(titulo,autor,año,genero))
            }
            else{
                window.alert("El genero de tu libro no es el correcto")
                console.log("El genero de tu libro no es el correcto")
            }
        }
    }
}

//funcion que muestra todos los libros
function mostrarLosLibros(){
    console.log("Los libros disponibles son: ")
    libros.map((mostrar)=>{console.log(mostrar.titulo)})
}
mostrarLosLibros()

//funcion que muestre los autores ordenados alfabeticamente
function mostrarAutoresAlfabeticamente(){
    libros.sort((autorAlf1,autorAlf2)=>{
        if(autorAlf1.autor<autorAlf2.autor){
            return -1
        }
        if(autorAlf1.autor<autorAlf2.autor){
            return 1
        }
        return 0
    })
    console.log("Los autores son:")
    libros.map((autores)=>{console.log(autores.autor)})
}
mostrarAutoresAlfabeticamente()

//funcion que pide un genero y muestra informacion  
function pedirGenero(){
    const generoPedido = prompt("Que genero estas buscando?")

    const buscaGenero = libros.filter((buscador)=>{
        return buscador.genero === generoPedido 
    })

    if(buscaGenero == generoPedido ){
        console.log("No se encontro un libro con ese genero")
    }
    else{
        console.log("Se encontro un libro con ese genero")
        buscaGenero.map((libro)=>{
        console.log("El libro se llama " + libro.titulo + " y lo escribio " + libro.autor + " en el año de " + libro.año + " y pertenece al genero de " + libro.genero)
        })   
    }
}
pedirGenero()