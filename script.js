
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = "rock";
  }
  else if (computerChoice === 1) {
    computerChoice = "paper";
 }
  else {
    computerChoice = "scissors";
  }
 return computerChoice;
}

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;


let btns = document.querySelectorAll('.buttons');
btns.forEach(btn => {
   btn.addEventListener('click', () => {
    humanSelection = btn.textContent.trim().toLowerCase();
    computerSelection = getComputerChoice();
    playRound (humanSelection, computerSelection);
    roundCount++;
});
   });  


function playRound(humanSelection, computerSelection) {
    if(humanSelection === "rock") {
        switch (computerSelection) {
            case "rock" : 
            const rockDraw = document.querySelector(".results");
            rockDraw.textContent = "Its a draw...";                            
            break;

            case "paper" : computerScore++; 
            const paperLose = document.querySelector(".results");
            paperLose.textContent = "Paper beats rock. You lose!";
            break;

            case "scissors" : humanScore++;
            const scissorsWin = document.querySelector(".results");
            scissorsWin.textContent = "Rocks beats scissors. You win!";
            break;
        }
    }
    else if (humanSelection === "paper") {
            switch (computerSelection) {
                case "rock" : humanScore++;
                const rockWin = document.querySelector(".results");
                rockWin.textContent = "Paper beats rock. You win!";
                break;

                case "paper" : 
                const paperDraw = document.querySelector(".results");
                paperDraw.textContent = "Its a draw...";
                break;

                case "scissors" : computerScore++;
                const scissorsLose = document.querySelector(".results");
                scissorsLose.textContent = "Scissors beats paper. You lose!";
                break;
            }
        }
    else if (humanSelection === "scissors") {
            switch (computerSelection) {
                case "rock" : computerScore++;
                const rockLose = document.querySelector(".results");
                rockLose.textContent = "Rock beats scissors. You lose!";                
                break;
                
                case "paper" : humanScore++;
                const paperWin = document.querySelector(".results");
                paperWin.textContent = "Scissors beats paper. You win!";
                break;
                
                case "scissors" : 
                const scissorsDraw = document.querySelector(".results");
                scissorsDraw.textContent = "Its a draw...";
                break;
            }
        }
    }

const finalScore = document.querySelector(".winner");
if (roundCount === 5) {
finalScore.textContent = `Good game! You won ${humanScore} of 5 matches`;
if (humanScore > computerScore) {
    winner.textContent = "Congratulations. You are the winner!!!";
}
else if (humanScore < computerScore) {
    winner.textContent = "Sorry...you lost the game :( "
}
else if (humanScore == computerScore) {
    winner.textContent = "It seems like it is a draw! Let's play again!";
}
};

// function playGame() {   
//    for(let i = 1; i <= 5; i++) {
//      playRound(); 
//      roundCount++;
//    }
// };

