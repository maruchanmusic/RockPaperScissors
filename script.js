
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
    let humanChoice = prompt("Rock, paper or scissors? Choose!").toLowerCase;
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if(humanSelection.toLowerCase = "rock") {
        switch (computerSelection) {
            case "rock" : console.log("Its a draw...");
            case "paper" : computerScore++; 
            console.log("Paper beats rock. You lose!");
            case "scissors" : humanScore++;
            console.log("Rocks beats scissors. You win!");
        }
    }
    else if (humanScore.toLowercase = "paper") {
            switch (computerSelection) {
                case "rock" : humanScore++;
                console.log("Paper beats rock. You win!")
                case "paper" : console.log("Its a draw...");
                case "scissors" : computerScore++;
                console.log("Scissors beats paper. You lose!")
            }
        }
    else if (humanScore.toLowercase = "scissors") {
            switch (computerSelection) {
                case "rock" : computerScore++;
                console.log("Rock beats scissors. You lose!");
                case "paper" :humanScore++;
                console.log("Scissors beats paper. You win!");
                case "scissors" : console.log("Its a draw...")
            }
        }
    }
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
