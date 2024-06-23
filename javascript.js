//Getting the computers choice.
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

   switch(computerChoice) {
    case 0:
      computerChoice = "Rock";
      return ("The computers choice is Rock");
      break;
    
    case 1:
      computerChoice = "Paper";
      return ("The computers choice is Paper");
      break;
      
    case 2:
       computerChoice = "Scissors";
       return ("The computers choice is Scissors");
       break;   
   }
}

//Getting the humans choice.
function getHumanChoice() {
   let humanChoice = prompt("Pick up your weapon!"); 

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

    }
}
console.log(getHumanChoice());