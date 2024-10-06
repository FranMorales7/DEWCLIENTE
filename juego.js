//definicion de variables y objetos
let baraja = [];
const TipoCarta = ["C", "D", "P", "T"];
const Especiales = ["A", "K", "Q", "J"];
let puntos = 0;
let puntosJugador = 0,
    puntosBanca = 0;

//Referencias al html
const btPedir = document.querySelector("#btnPedir");
const btPasar = document.querySelector("#btnPasar");
const btNuevo = document.querySelector("#btnNuevo");
const marcador = document.querySelectorAll("small");
const divCartaJugador = document.querySelector("#jugador-cartas");
const divCartaBanca = document.querySelector("#banca-cartas");


//variable para crear la baraja y repartir
const crearBaraja = () => {
    for (let a = 2; a <= 10; a++){
        for (let tipo of TipoCarta){
            baraja.push(a+tipo);
        }
    }

    for (let esp of Especiales){
        for (let tipo of TipoCarta){
            baraja.push(esp+tipo);
        }
    }
    //Desordenar las cartas
    baraja = _.shuffle(baraja);
    console.log(baraja);
    return baraja;
};

//pedir una carta y retirar de la baraja
const pedirCarta = () => {
    if(baraja.lenght === 0){
        throw "No hay cartas";
    }else{
        const carta = baraja.pop(); 
        return carta; 
    }
};

//calcular el valor de la carta
const valorCarta = (carta) =>{
    let puntos = carta.substring(0, carta.length - 1);
    let valor = isNaN(puntos) ? (puntos === "A" ? 11 : 10) : puntos * 1;
    return valor;
};

//Eventos
//click sobre boton Pedir
btPedir.addEventListener('click', () => {
    //sacar carta del array Baraja
    const carta = pedirCarta();
    //calcular puntos actuales del jugador
    puntosJugador += valorCarta(carta);
    //mostrar los puntos en el marcador
    marcador[0].innerText = puntosJugador;
    console.log(puntosJugador);
    const nuevaCarta = document.createElement("img");
    nuevaCarta.classList.add("carta");
    nuevaCarta.src = "img/"+carta+".png";
    divCartaJugador.append(nuevaCarta);

    //Controlar puntos del jugador
    if (puntosJugador > 21){
        console.warn('Has perdido');
        btPedir.disabled = true;
        btPasar.disabled = true;
    } else if (puntosJugador === 21){
        console.warn('21, genial');
        btPedir.disabled = true;
        btPasar.disabled = true;
    }
});

crearBaraja();
console.log(baraja);
