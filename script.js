let humanScore = 0;
let computerScore = 0;
function playGame() {
  let game;
  let getComputerChoice = function () {
    let randomNumber = Math.round(Math.random() * 10);
    let computerChoice;
    if (randomNumber >= 0 && randomNumber < 5) computerChoice = "rock";
    else if (randomNumber === 5) computerChoice = "paper";
    else if (randomNumber > 5 && randomNumber <= 10)
      computerChoice = "scissors";
    return computerChoice;
  };

  let getHumanChoice = function () {
    let choice = prompt(`Please enter any one choice: rock, paper, scissors`);
    choice.trim().toLowerCase();
    return choice;
  };

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  let playRound = function (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore += 1;
      console.log(`You win!🥳 Rock beats scissors`);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore += 1;
      console.log(`You win!🥳 Scissors beats paper`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore += 1;
      console.log(`You win!🥳 Paper beats rock`);
    }

    if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore += 1;
      console.log(`You lose!😓 Rock beats scissors`);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore += 1;
      console.log(`You lose!😓 Scissors beats paper`);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore += 1;
      console.log(`You lose!😓 Paper beats rock`);
    }

    return humanScore, computerScore;
  };
  game = playRound(humanSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
  playGame();
  console.log(`Your score: ${humanScore} and opponent score: ${computerScore}`);
}
