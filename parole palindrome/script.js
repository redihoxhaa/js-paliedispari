"use strict";

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const word = prompt("Inserisci la parola che vuoi verificare");

function palindroma(word) {

    // Creazione array della parola
    const wordArray = [];
    for (let i = 0; i < word.length; i++) {
        wordArray.push(word[i]);
    }

    console.log("wordarray è " + wordArray)

    // Creazione array della parola inversa
    const reversedWordArray = [];
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWordArray.push(word[i]);
    }

    console.log("reversedwordarray è " + reversedWordArray)


    // Verifica dell'uguaglianza

    for (let i = 0; i < word.length; i++) {
        if (wordArray[i] === reversedWordArray[i]) {
            return true;
        }
        return false;
    }
}

const risultato = palindroma(word);

if (risultato === true) {
    alert(`${word} - è una parola palindroma`);
} else {
    alert(`${word} - NON è una parola palindroma`);
}