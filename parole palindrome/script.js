"use strict";

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

/*
//METODO CON CICLO FOR -----------------------------------------------------------------

const word = prompt("Inserisci la parola che vuoi verificare");

function reverseIt(word) {

    // Creazione array della parola inversa
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }

    return reversedWord;
}

const risultato = reverseIt(word);

if (word === risultato) {
    alert(`${word} - è una parola palindroma`);
} else {
    alert(`${word} - NON è una parola palindroma`);
}
*/


/*

// METODO SENZA CICLO -----------------------------------------------------------------

const word = prompt("Inserisci la parola che vuoi verificare");

function reverseIt(word) {
    const reversedWord = word.split("").reverse().join("");
    return reversedWord;
}

const risultato = reverseIt(word);

if (word === risultato) {
    alert(`${word} - è una parola palindroma`);
} else {
    alert(`${word} - NON è una parola palindroma`);
}

*/


// METODO SENZA FUNZIONE -------------------------------------------------------------

const word = prompt("Inserisci la parola che vuoi verificare");
const reversedWord = word.split("").reverse().join("");
if (word === reversedWord) {
    alert(`${word} - è una parola palindroma`);
} else {
    alert(`${word} - NON è una parola palindroma`);
}
