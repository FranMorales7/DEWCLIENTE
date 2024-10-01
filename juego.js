//definiciones variables globales
let baraja = [];
let tipoCarta = ["C", "D", "P", "T"];
let especiales = ["A", "K", "Q", "J"];
//crear baraja para repartir cartas
const crearBaraja = () =>{
    for (let a = 2; a<=10; a++){
        for (let tipo of tipoCarta){
         baraja.push(a+tipo);   
        }
    }
    for (let tipo of tipoCarta){
        for(let esp of especiales){
            baraja.push(esp+tipo);
        }
    }
    console.log(baraja);
    baraja = _.shuffle(baraja);
    return baraja;
    
}


crearBaraja();
console.log(baraja);
