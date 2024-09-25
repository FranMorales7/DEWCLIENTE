let numeros = [1,2,3,4,5,5,6];
let aux = numeros.filter((item, index)=>{
    return numeros.indexOf(item) == index;
});

console.log("nuevo array: ",aux);
