# PALI E DISPARI

#### CONSEGNA DELL'ESERCIZIO 1

```
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
```

#### SVOLGIMENTO

Questo esercizio ci chiede di far inserire all'utente una parola a piacere, per verificare se sia palindroma o meno, ovvero verifica se la parola inserita. è uguale a se stessa scritta al contrario. Per lo svoglimento di questo esercizio ci possiamo servire di un ciclo for per costruire un'array con le lettere della parola, e poi un altro ciclo for con scorrimento inverso per costruire un array con le lettere al contrario. Alla fine dovremo confrontare, sempre con un ciclo, se tutti gli indici in successione del primo array, sono uguali indice (dato da lunghezza array - contatore) della parola al contrario.

_Considerazioni post esercizio_

- Nell'ultima parte dell'esercizio possiamo semplicemente andare a confrontare gli array con lo stesso indice, perchè se una parola è palindroma avremo due array uguali. Quindi la condizione sarà:
```JS
 if (wordArray[i] === reversedWordArray[i]) {
            return true;
        } 
        return false;
```

------

#### CONSEGNA DELL'ESERCIZIO 2

```
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
```

#### SVOLGIMENTO

In questo esercizio chiediamo all'utente di scegliere se vuole giocare con PARI o DISPARI e lo assegniamo ad una variabile. Gli facciamo scegliere un numero da 1 a 5 (1 e 5 inclusi), che andremo ad assegnare ad una variabile. Successivamente creiamo una funzione che genera un numero randomico usando `Math.floor(Math.random() * 5) + 1`. Assegniamo il valore del return della nostra funzione ad una variabile, e la sommiamo alla variabile che contiene il numero utente. Creiamo una funzione che stabilisce se il numero è pari o dispari usando `somma % 2 === 0`. Se la funzione ci ritorna true il numero è pari, altrimenti è dispari. Creiamo una condizione secondo la quale se l'utente  ha scelto pari e il risultato è true, avrà vinto, altrimenti avrà perso. Facciamo la stessa cosa per dispari e risultato false.

