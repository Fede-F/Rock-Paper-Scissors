let computerSelection, playerSelection;
const empate = "¡Empate!";
const perdiste = "¡Perdiste!";
const ganaste = "¡Ganaste!";
const piedra = "Piedra";
const tijeras = "Tijera";
const papel = "Papel";
let puntajeJugador, puntajeCPU, ronda;

ronda = 0;
puntajeCPU = 0;
puntajeJugador = 0;

//Asignacion de botones
btn_piedra = document.getElementById('piedra');
btn_papel = document.getElementById('papel');
btn_tijeras = document.getElementById('tijeras');

//Asignacion de divs
txt_resultado = document.getElementById('resultado');
txt_puntaje = document.getElementById('puntaje');

//Asignacion de imagenes Borrar si no corresponde*******
img_piedra_pc = document.getElementById('piedra_pc');
img_papel_pc = document.getElementById('papel_pc');
img_tijeras_pc = document.getElementById('tijeras_pc');

//Guarda la eleccion  
btn_piedra.onclick = playerSelection_Piedra;
btn_papel.onclick = playerSelection_Papel;
btn_tijeras.onclick = playerSelection_Tijeras;



function playerSelection_Piedra() {
    playerSelection = piedra;
    game();

}
function playerSelection_Papel() {
    playerSelection = papel;
    game();

}
function playerSelection_Tijeras() {
    playerSelection = tijeras;
    game();

}

//Eleccion aleatoria de la cpu
function computerPlay() {
    img_piedra_pc.style.filter = null; //Quita el filtro de la imagen
    img_papel_pc.style.filter = null;
    img_tijeras_pc.style.filter = null;
    img_piedra_pc.style.transform = null; //Quita el aumento de la imagen
    img_papel_pc.style.transform = null;
    img_tijeras_pc.style.transform = null;
    img_piedra_pc.style.bordercolor= null; //quita borde color 
    img_piedra_pc.style.boxShadow  = null; //quita efecto de halo en el borde
    img_tijeras_pc.style.bordercolor = null;
    img_tijeras_pc.style.boxShadow  = null; 
    img_papel_pc.style.bordercolor = null;
    img_papel_pc.style.boxShadow  = null; 
    

    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        computerSelection = piedra;
        img_piedra_pc.style.transform= "scale(1.1)"; //Agrega aumento a la imagen
        img_papel_pc.style.filter = "grayscale(100%)"; //Agrega filtro de grisado a la imagen
        img_tijeras_pc.style.filter = "grayscale(100%)";
        img_piedra_pc.style.bordercolor= "#ffc600"; //Agrega borde color 
        img_piedra_pc.style.boxShadow  = "0 0 1rem #ffc600"; //agrega efecto de halo en el borde


    }
    else if (random == 1) {
        computerSelection = papel;
        img_papel_pc.style.transform= "scale(1.1)";
        img_tijeras_pc.style.filter = "grayscale(100%)";
        img_piedra_pc.style.filter = "grayscale(100%)";
        img_papel_pc.style.bordercolor= "#ffc600"; 
        img_papel_pc.style.boxShadow  = "0 0 1rem #ffc600"; 
    }
    else {
        computerSelection = tijeras;
        img_tijeras_pc.style.transform= "scale(1.1)";
        img_piedra_pc.style.filter = "grayscale(100%)";
        img_papel_pc.style.filter = "grayscale(100%)";
        img_tijeras_pc.style.bordercolor= "#ffc600"; 
        img_tijeras_pc.style.boxShadow  = "0 0 1rem #ffc600"; 
    }
}

//Validaciones donde se compara la eleccion del jugador y de la cpu
function playRound(playerSelection, computerSelection) {

    ronda++;

    if (playerSelection == piedra && computerSelection == piedra) {
        resultado = empate;

    }
    else if (playerSelection == piedra && computerSelection == papel) {
        puntajeCPU++;
        resultado = perdiste;
    }
    else if (playerSelection == piedra && computerSelection == tijeras) {
        puntajeJugador++;
        resultado = ganaste;
    }
    else if (playerSelection == tijeras && computerSelection == tijeras) {
        resultado = empate;
    }
    else if (playerSelection == tijeras && computerSelection == piedra) {
        puntajeCPU++;
        resultado = perdiste;
    }
    else if (playerSelection == tijeras && computerSelection == papel) {
        puntajeJugador++;
        resultado = ganaste;
    }
    else if (playerSelection == papel && computerSelection == papel) {
        resultado = empate;
    }
    else if (playerSelection == papel && computerSelection == tijeras) {
        puntajeCPU++;
        resultado = perdiste;
    }
    else if (playerSelection == papel && computerSelection == piedra) {
        puntajeJugador++;
        resultado = ganaste;
    }
}

function roundResult() {
    if (ronda == 5) {
        if (puntajeJugador > puntajeCPU) {
            txt_resultado.innerHTML = "¡Ganaste la ronda de 5!";
        }
        else if (puntajeJugador < puntajeCPU) {
            txt_resultado.innerHTML = "¡Perdiste la ronda de 5!";
        }
        else txt_resultado.innerHTML = "¡Empataste la ronda de 5!";

        ronda = 0;
    }
}


//Inicio del juego
function game() {
    console.log("Elegiste " + playerSelection);
    computerPlay();
    playRound(playerSelection, computerSelection);
    txt_resultado.innerHTML = resultado;
    roundResult();
    txt_puntaje.innerHTML = "Puntaje: Jugador " + puntajeJugador + " vs " + puntajeCPU + " CPU";
    console.log("CPU eligió " + computerSelection);
    console.log(resultado);
    console.log("Puntaje: Jugador " + puntajeJugador + " vs " + puntajeCPU + " CPU");
    playerSelection = "";


}




