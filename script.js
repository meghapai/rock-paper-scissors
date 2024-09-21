//variables to keep track of score after each round
let humanScore = 0;
let computerScore = 0;

//make a object for score
let score = {
  humanScore,
  computerScore,
};

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const resultText = document.querySelector(".result-text");
const scores = document.querySelector(".scores");
const comm = document.querySelector(".commentary");
const decision = document.querySelector(".decision");

let getHumanChoice;

//init function
let init = function () {
  resultText.textContent = "";
  comm.textContent = "Keep playing!";
};

//gets a choice from computer : rock/paper/scissors
let getComputerChoice = function () {
  let randomNumber = Math.round(Math.random() * 10);
  let computerChoice;
  if (randomNumber >= 0 && randomNumber < 5) computerChoice = "rock";
  else if (randomNumber === 5) computerChoice = "paper";
  else if (randomNumber > 5 && randomNumber <= 10) computerChoice = "scissors";
  return computerChoice;
};

//plays a single round
let playRound = function (humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    resultText.textContent = `You win!🥳 Rock beats scissors`;
    score.humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    resultText.textContent = `You win!🥳 Scissors beats paper`;
    score.humanScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    resultText.textContent = `You win!🥳 Paper beats rock`;
    score.humanScore += 1;
  }

  if (humanChoice === "scissors" && computerChoice === "rock") {
    resultText.textContent = `You lose!😓 Rock beats scissors`;
    score.computerScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    resultText.textContent = `You lose!😓 Scissors beats paper`;
    score.computerScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    resultText.textContent = `You lose!😓 Paper beats rock`;
    score.computerScore += 1;
  }

  if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    resultText.textContent = `Oh you both made same choices!😐`;
  }

  return score;
};

rock.addEventListener("click", function () {
  init();
  getHumanChoice = "rock";
});

paper.addEventListener("click", function () {
  init();
  getHumanChoice = "paper";
});

scissors.addEventListener("click", function () {
  init();
  getHumanChoice = "scissors";
});

function playGame() {
  //variables to store the choice from players
  let humanSelection = getHumanChoice;
  const computerSelection = getComputerChoice();

  //variable  for each round
  let game;

  game = playRound(humanSelection, computerSelection);

  scores.innerHTML = `Your score: ${game.humanScore} <br> Opponent score:${game.computerScore}`;

  if (game.humanScore === 5) {
    decision.textContent = `You win 🎊 !`;
    comm.textContent = "";
    resultText.textContent = "";
  } else if (game.computerScore === 5) {
    decision.textContent = `You lose 😓 !`;
    comm.textContent = "";
    resultText.textContent = "";
  }
}

rock.addEventListener("click", playGame);
paper.addEventListener("click", playGame);
scissors.addEventListener("click", playGame);
