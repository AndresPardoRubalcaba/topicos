//Arrays

var arr=[];
arr.length
arr.push(5,4,6)// Inserta valores al final del arreglo
arr.unshift(12,7,8)// Inserta valores al inicio del arreglo 
/*
arr.splice(3, undefined,100); //? Significa que puedes o no estar, que no es necesario ponerlo
console.log(arr); 
var newArr = arr.splice(1,3)
console.log(newArr)
*/
/*
//for - for in - for of - forEach
for(let i in arr){
    console.log(i)
}

for(let i of arr){
    console.log(i)
}

//Mostrar arreglo con for in 
for(let i in arr)[
    console.log(arr[i])
]

arr.forEach(element => {
    console.log(element)}
)
*/

newArry2 = arr.filter((i)=>i != 6)
console.log(newArry2)
