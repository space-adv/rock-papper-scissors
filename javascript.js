//Getting the computers choice.
let getComputerChoice = Math.floor(Math.random() * 3);
   switch(getComputerChoice) {
    case 0:
      getComputerChoice = "Rock";
      console.log("The computers choice is Rock");
      break;
    
    case 1:
      getComputerChoice = "Paper";
      console.log("The computers choice is Paper");
      break;
      
    case 2:
       getComputerChoice = "Scissors";
       console.log("The computers choice is Scissors");
       break;   
   }