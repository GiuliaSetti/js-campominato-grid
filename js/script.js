// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


/* 
- memorizzo l'elemento bottone

- memorizzo l'elemento griglia

- memorizzo una variabile cella che valga 100.

- creo una funzione che mi generi l'elemento (div) con classe .square.

al CLICK del bottone:

- creo una griglia di celle in base alla funzione precedentemente creata. 

- appendo la cella alla contenitore griglia

*/


// console.log("prova sa sa");


// - memorizzo l'elemento bottone
let startGameButton = document.getElementById("start_game");

// - memorizzo l'elemento griglia
let gridEl = document.getElementById("grid_container");

// - memorizzo una variabile cella che valga 100.
let totalCells = 100;

for(let i = 1; i <= totalCells; i++){

    let cell = squareGenerator(i);

    gridEl.append(cell);

}


// startGameButton.addEventListener("click", function(){
   
// });



























// creo la funzione

function squareGenerator(testo){

    // creo un elemento div
    let newEl = document.createElement("div");

    // assegno all'elemento la classe cell
    newEl.classList.add("cell");

    // all'interno dell'elemento in HTML introduco il parametro testo

    newEl.innerHTML = testo;


    return newEl

}