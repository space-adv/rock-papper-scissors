//Getting the computers choice.
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

   switch(computerChoice) {
    case 0:
      computerChoice = "rock";
      return ("The computers choice is Rock");
      break;
    
    case 1:
      computerChoice = "paper";
      return ("The computers choice is Paper");
      break;
      
    case 2:
       computerChoice = "scissors";
       return ("The computers choice is Scissors");
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
            return ("Your weapon of choice is Rock!");
            break;
        
        case "paper":
            humanChoice = "paper";
            return ("Your weapon of choice is Paper!");
            break;
            
        case "scissors":
            humanChoice = "scissors";
            return ("Your weapon of choice is Scissors!");
            break;

        default:
            return prompt("You need to pick one of the three weapons, either Rock, Paper or Scissors.");    

    }
}
console.log(getHumanChoice());

//making the players score variables.
let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    let result;

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
}
