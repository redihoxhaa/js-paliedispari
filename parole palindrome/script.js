"use strict";

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//METODO CON CICLO FOR


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



// METODO SENZA CICLO

// const word = prompt("Inserisci la parola che vuoi verificare");

// function palindroma(word) {
//     const wordArray = word.split("");
//     console.log(wordArray);
//     const reversedArray = word.split("").reverse();
//     console.log(reversedArray);

//     // const wordReverse = reversedArray.join("");
//     // const wordReverse = word.split("").reverse().join("");
//     if (JSON.stringify(wordArray) === JSON.stringify(reversedArray)) {
//         return true;
//     }
//     return false;
// }

// const risultato = palindroma(word);

// if (risultato === true) {
//     alert(`${word} - è una parola palindroma`);
// } else {
//     alert(`${word} - NON è una parola palindroma`);
// }
