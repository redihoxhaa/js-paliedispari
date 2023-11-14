const chosenTeam = prompt("Scrivi PARI o DISPARI in base a come vuoi giocare");
const chosenNum = Number(prompt("Scegli un numero da 1 a 5, estremi inclusi"));
const minNumber = 1;
const maxNumber = 5;

if (chosenNum >= minNumber && chosenNum <= maxNumber) {

    console.log("Hai scelto team " + chosenTeam);
    console.log("Il tuo numero è " + chosenNum);

    if (chosenTeam === "PARI") {
        console.log("Il pc ha scelto team DISPARI");
    } else if (chosenTeam === "DISPARI") {
        console.log("Il pc ha scelto team PARI");
    }

    function generateANumber() {
        const generatedNumber = Math.floor(Math.random() * 5) + 1;
        return generatedNumber;
    }

    const pcNumber = generateANumber();
    console.log("Il pc ha generato " + pcNumber);

    const numberSum = chosenNum + pcNumber;

    function evenOrOdd(number) {
        if (number % 2 === 0) {
            return true;
        } return false;
    }

    const result = evenOrOdd(numberSum);

    if (chosenTeam === "PARI" && evenOrOdd(numberSum)) {
        console.log("Congratulazioni, hai vinto!")
    } else if (chosenTeam === "DISPARI" && !evenOrOdd(numberSum)) {
        console.log("Congratulazioni, hai vinto!")
    } else {
        console.log("Mi dispiace, hai perso!")
    }
} else {
    alert("Scegli un numero da 1 a 5 la prossima volta, sei pregato di ricaricare la pagina");
}

