function computerPlay (){
    // Define possible options
    const compOptions = ["Rock", "Paper", "Scissors"]
    let compSelection = ""
    let selectionNumber = Math.floor(Math.random()*3);
    
    // Have computer choose from options
   if (selectionNumber === 0){
       console.log(compSelection = compOptions[0].toString());
   } else if (selectionNumber === 1) {
       console.log(compSelection = compOptions[1].toString());
   } else { selectionNumber === 2 
       console.log(compSelection = compOptions[2].toString());
   } 
   

   return compSelection

}



function playRound(playerSelection, compSelection) {
    let outcome = ""
    if(playerSelection == compSelection){
        console.log(outcome = "It's a tie");
        // Rock
    } else if (playerSelection == "Rock" && compSelection == "Paper"){
        console.log(outcome= "You lose"); 
    } else if (playerSelection == "Rock" && compSelection == "Scissors") {
        console.log(outcome = "You win")
    } //Paper 
    else if (playerSelection == "Paper" && compSelection == "Rock") {
        console.log(outcome = "You win");
    } else if (playerSelection == "Paper" && compSelection == "Scissors") {
        console.log(outcome = "You lose")
    } // Scissors 
    else if (playerSelection == "Scissors" && compSelection == "Rock")
        console.log(outcome= "You lose");

    }
    }
    

   console.log(playerSelection, compSelection)
}

let playerSelection = "Rock";
let compSelection = computerPlay();

console.log(playRound(playerSelection,compSelection));