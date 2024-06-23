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

