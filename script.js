
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 100);
  if (computerChoice < 33) {
    computerChoice = "rock";
    console.log("Rock!");
  }
  else if (computerChoice > 66) {
    computerChoice = "paper";
    console.log("Paper!");
  }
  else {
    computerChoice = "scissors";
    console.log("Scissors!");
  }
 return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors? Choose!").toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if(humanSelection.toLowerCase() === "rock") {
        switch (computerSelection) {
            case "rock" : console.log("Its a draw...");
            break;
            case "paper" : computerScore++; 
            console.log("Paper beats rock. You lose!");
            break;
            case "scissors" : humanScore++;
            console.log("Rocks beats scissors. You win!");
            break;
        }
    }
    else if (humanSelection.toLowerCase() === "paper") {
            switch (computerSelection) {
                case "rock" : humanScore++;
                console.log("Paper beats rock. You win!");
                break;
                case "paper" : console.log("Its a draw...");
                break;
                case "scissors" : computerScore++;
                console.log("Scissors beats paper. You lose!")
                break;
            }
        }
    else if (humanSelection.toLowerCase() === "scissors") {
            switch (computerSelection) {
                case "rock" : computerScore++;
                console.log("Rock beats scissors. You lose!");
                break;
                case "paper" :humanScore++;
                console.log("Scissors beats paper. You win!");
                break;
                case "scissors" : console.log("Its a draw...")
                break;
            }
        }
    }
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {   
   for(let i = 1; i <= 5; i++) {
     const humanSelection = getHumanChoice();
     const computerSelection = getComputerChoice();
     playRound(humanSelection, computerSelection); 
   }
}
playGame();


console.log(`Good game! You won ${humanScore} of 5 matches`);
if (humanScore > computerScore) {
    console.log("Congratulations. You are the winner!!!")
}
else if (humanScore < computerScore) {
    console.log("Sorry...you lost the game :(")
}
else {
    console.log("It seems like it is a draw! Let's play again!")
}