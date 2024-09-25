let numeros = [3, 45, 6, 7, 23, 5, 76, 34];

let numMax = numeros.reduce((max, numero) => {
    if (numero > max){max = numero;}
   return max;

});

console.log("El número mas alto es : ", numMax);
