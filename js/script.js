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


let selectLevel = document.getElementById("levels");

// - memorizzo una variabile cella che valga 100.
let totalCells = 100;



startGameButton.addEventListener("click", function(){
    gridEl.innerHTML = "";
    let selectLevelEl = selectLevel.value;

    if(selectLevelEl == "Hard"){

        let totalCells = 49;

        for(let i = 1; i <= totalCells; i++){

            let cell = squareGenerator(i);
        
            gridEl.append(cell);

            gridEl.classList.add("width49");
    
    
            cell.addEventListener("click", function(){
    
                cell.classList.toggle("lightpurple");
    
            })
        
        }
        
    } else if (selectLevelEl == "Medium"){

        let totalCells = 81;

        for(let i = 1; i <= totalCells; i++){

            let cell = squareGenerator(i);
        
            gridEl.append(cell);

            
            gridEl.classList.add("width81");
    
    
            cell.addEventListener("click", function(){
    
                cell.classList.toggle("lightpurple");
    
            })
        
        }
        

    } else {

        for(let i = 1; i <= totalCells; i++){
    
            let cell = squareGenerator(i);
        
            gridEl.append(cell);

            gridEl.classList.add("width100");
    
    
            cell.addEventListener("click", function(){
    
                cell.classList.toggle("lightpurple");
    
            });
        
        }
        
    }

    
   
});



























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