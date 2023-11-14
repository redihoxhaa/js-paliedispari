// FUNCTIONS



// OPERATIONS


const availableMoves = ["CARTA", "SASSO", "FORBICE"];
let pcChosenMove;

for (i = 0; i < availableMoves.length; i++) {
    pcChosenMove = availableMoves[Math.floor(Math.random() * 3)]
}
const userChosenMove = prompt("Scegli CARTA, SASSO oppure FORBICE");
if (availableMoves.includes(userChosenMove)) {
    console.log("L'utente ha scelto " + userChosenMove);
    console.log("La CPU ha scelto " + pcChosenMove);

    if (userChosenMove === pcChosenMove) {
        console.log("Scontro finito in parità! Premi F5 per un altra partita!");
    } else if (userChosenMove === "CARTA" && pcChosenMove === "FORBICE") {
        console.log("Mi spiace, hai perso! Premi F5 per un altra partita!")
    } else if (userChosenMove === "FORBICE" && pcChosenMove === "SASSO") {
        console.log("Mi spiace, hai perso! Premi F5 per un altra partita!")
    } else if (userChosenMove === "SASSO" && pcChosenMove === "CARTA") {
        console.log("Mi spiace, hai perso! Premi F5 per un altra partita!")
    } else if (userChosenMove === "CARTA" && pcChosenMove === "SASSO") {
        console.log("Congratulazioni, hai vinto! Premi F5 per un altra partita!")
    } else if (userChosenMove === "FORBICE" && pcChosenMove === "CARTA") {
        console.log("Congratulazioni, hai vinto! Premi F5 per un altra partita!")
    } else if (userChosenMove === "SASSO" && pcChosenMove === "FORBICE") {
        console.log("Congratulazioni, hai vinto! Premi F5 per un altra partita!")
    }
} else {
    console.log("Hai inserito una scelta inesistente, ricarica la pagina per restartare!")
}
