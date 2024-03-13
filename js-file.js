var choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  var random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  let comp = computerSelection;
  console.log("comp: " + comp);
  let player = playerSelection.toLowerCase();
  console.log("Player: " + player);
  let result;

  if (player === comp) {
    result = "It's a Tie! Both selected " + comp;
  } else if (player === "rock" && comp === "scissors") {
    result = "You Win! " + player + " beats " + comp;
  } else if (player === "rock" && comp === "paper") {
    result = "You Lose! " + comp + " beats " + player;
  } else if (player === "paper" && comp === "scissors") {
    result = "You Lose! " + comp + " beats " + player;
  } else if (player === "paper" && comp === "rock") {
    result = "You Win! " + player + " beats " + comp;
  } else if (player === "scissors" && comp === "rock") {
    result = "You Lose! " + comp + " beats " + player;
  } else if (player === "scissors" && comp === "paper") {
    result = "You Win! " + player + " beats " + comp;
  }

  return result;
}

// const playerSelection = "Paper";
// console.log(playerSelection);
// const computerSelection = getComputerChoice();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));

function playGame() {
  let countPlayer = 0;
  let countComp = 0;
  let result;
  let finalResut;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    let computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("Win")) countPlayer++;
    else if (result.includes("Lose")) countComp++;
  }

  if (countComp > countPlayer) {
    finalResut =
      "You Lost this Round! Player Score: " +
      countPlayer +
      " Computer Score: " +
      countComp;
  } else if (countComp < countPlayer) {
    finalResut =
      "You Won this Round! Player Score: " +
      countPlayer +
      " Computer Score: " +
      countComp;
  } else if (countComp == countPlayer) {
    finalResut =
      "It is a Tie! Player Score: " +
      countPlayer +
      " Computer Score: " +
      countComp;
  }

  return finalResut;
}
console.log(playGame());
