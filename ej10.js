let tareas = [];
let item = "";

do { 
item = prompt("Añade una tarea nueva: ");
tareas.push(item);

}while(item !== "salir");

console.log(tareas);
