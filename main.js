// get computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  const choice = choices[randomNumber];
  return choice;
}

// function to print game result
function printGameResult() {
  if (playerScore === 5 || computerScore === 5) {
    let gameResult = "";
    if (playerScore > computerScore) {
      gameResult = `Final Result : You Win`;
    } else if (playerScore < computerScore) {
      gameResult = `Final Result : You Lose!`;
    } else {
      gameResult = `Final Result : It's a Draw!`;
    }
    return gameResult;
  } else {
    return "";
  }
}

// function to print result in console
function displayScores() {
  document.querySelector("#player-score").innerHTML = playerScore;
  document.querySelector("#computer-score").innerHTML = computerScore;
  document.querySelector("#round").innerHTML = countOfRound;
}

// function to play one round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "You Lose";
  } else {
    return "You Win";
  }
}

let playerScore = 0;
let computerScore = 0;
let countOfRound = 0;

function increaseScores(result) {
  if (result === "You Win") {
    playerScore++;
  } else if (result === "You Lose") {
    computerScore++;
  }
}

function handleButtonClick(e) {
  if (playerScore === 5 || computerScore === 5) {
    return;
  }
  const playerSelection = e.target.getAttribute("choice");
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  increaseScores(result);
  countOfRound++;
  displayScores();
  document.querySelector(".computer").innerHTML = `${computerSelection}`;
  document.querySelector("#final-result").innerHTML = printGameResult();
}

document.getElementById("paper").addEventListener("click", handleButtonClick);
document.getElementById("rock").addEventListener("click", handleButtonClick);
document
  .getElementById("scissors")
  .addEventListener("click", handleButtonClick);
