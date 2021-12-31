function computerPlay (){
    // Define possible options
    const compOptions = ["Rock", "Paper", "Scissors"]
    let compSelection = ""
    let selectionNumber = Math.floor(Math.random()*3);
    
    // Have computer choose from options
   if (selectionNumber === 0){
       compSelection = compOptions[0].toString();
   } else if (selectionNumber === 1) {
       compSelection = compOptions[1].toString();
   } else { selectionNumber === 2 
       compSelection = compOptions[2].toString();
   } 
   

   return compSelection

}

let score = 0


function playRound(playerSelection, compSelection) {
    let outcome = ""
    if(playerSelection == compSelection){
        outcome = "It's a tie";
        // Losing 
    } else if (playerSelection == "Rock" && compSelection == "Paper" ||
                playerSelection == "Paper" && compSelection == "Scissors" ||
                playerSelection == "Scissors" && compSelection == "Rock"){
        outcome= "You lose"; 
        //Winning
    } else if (playerSelection == "Rock" && compSelection == "Scissors" || 
                playerSelection == "Paper" && compSelection == "Rock" || 
                playerSelection == "Scissors" && compSelection == "Paper") {
        outcome = "You win";

    }


    if (outcome == "You win"){
        score += 1;
    } else {
        score = score;
    }

    return outcome; 


   
}

let playerSelection = "";
let compSelection = computerPlay();

function game(choice){
   let selection = prompt("Choose Rock, Paper or Scissors:")
   fLetter = selection.charAt(0).toUpperCase();
   letters = selection.slice(1).toLowerCase();
   selection = fLetter.concat(letters);
   playerSelection = selection;

   

}


console.log(game());
console.log(playRound(playerSelection,compSelection))
console.log("You selected: " + playerSelection,  "Computer Selection: " + compSelection);
console.log(score)