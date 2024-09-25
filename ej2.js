//Declaramos el array
const animales = ["perro", "gato", "conejo","tigre"];
//Añadimos leon en la posicion 2
animales.splice(2,0,"leon");
//Se muestra en consola el array
console.log("Añadimos leon",animales);
//Eliminamos el quinto
animales.splice(4,1);
//Se muestra en consola el array
console.log(animales);


