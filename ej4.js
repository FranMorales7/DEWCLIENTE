let numeros = [1,2,3,4,5,6,7,8,9,10];

let esPar = numeros.forEach((elemento) => {
        if (elemento % 2 == 0){
            return console.log(elemento);
        } 
    });
console.log(esPar);
