//Getting the computers choice.
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

   switch(computerChoice) {
    case 0:
      computerChoice = "rock";
      return "rock";
      break;
    
    case 1:
      computerChoice = "paper";
      return "paper";
      break;
      
    case 2:
       computerChoice = "scissors";
       return "scissors";
       break;   
   }
}

//Getting the humans choice.
function getHumanChoice() {
   let humanChoice = prompt("Pick up your weapon!"); 
       humanChoice = humanChoice.toLowerCase();

       switch(humanChoice) {
        case "rock":
            humanChoice = "rock";
            return "rock";
            break;
        
        case "paper":
            humanChoice = "paper";
            return "paper";
            break;
            
        case "scissors":
            humanChoice = "scissors";
            return "scissors";
            break;

        default:
            return prompt("You need to pick one of the three weapons, either Rock, Paper or Scissors.");    

        }
}


//making the players score variables.
let humanScore = 0;
let computerScore = 0;
let result;

function playRound(computerChoice, humanChoice) {
    

    if (computerChoice === humanChoice) {
        result = "It's a draw";
    } else if (
        (humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")
    ) {
        result = "The computer wins";
    } else {
        result = "The player wins";
    }
     console.log(result);   


    if (result == "The computer wins") {
        computerScore += 1;
    } else {
        humanScore +=1;
    }
}

 let humanSelection = getHumanChoice();
 let computerSelection = getComputerChoice();


 function playGame() {
    humanScore = 0;
    computerScore = 0;
    for(let i = 0; i < 5; i++) {
        getComputerChoice();
        getHumanChoice();
        playRound(humanSelection, computerSelection);
    } 

    if (computerScore > humanScore) {
        alert("The computer wins");
    } else {
        alert("The player wins");
    }
 }

 playGame();