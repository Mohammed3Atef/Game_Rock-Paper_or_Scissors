function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  const choice = choices[randomNumber];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  // console.log(`playerSelection:`, playerSelection);
  // console.log(`computerSelection:`, computerSelection);
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "draw";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "draw";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "draw";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win";
  } else {
    return "Wrong Choice";
  }
}

let playerScore = 0;
let computerScore = 0;

function playGame() {
  const playerSelection = prompt(
    "You Have To Choose Between ( Paper,Rock Or Scissors )"
  ).toLowerCase();
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  if (result === "You Win") {
    playerScore++;
  } else if (result === "You Lose") {
    computerScore++;
  }
}

for (let i = 1; i <= 5; i++) {
  playGame();
  console.log("playerScore", playerScore, "computerScore", computerScore);
}

if (playerScore > computerScore) {
  console.log("You Win");
} else if (playerScore < computerScore) {
  console.log("You Lose");
} else {
  console.log("It's a Draw");
}
