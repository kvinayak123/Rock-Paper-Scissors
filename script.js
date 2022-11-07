let userScore = document.querySelector(".user").textContent;
let cpuScore = document.querySelector(".cpu").textContent;
let statusText = document.querySelector(".status").textContent;
let newNum = document.querySelector(".cpu").textContent;
let scoreUser = 0;
let scoreCpu = 0;

let makeDecision = function (playerChoice) {
  let computerValueArray = [0, "rock", "paper", "scissors"];
  let computerValue = Math.floor(Math.random() * 3) + 1;
  let comChoice = computerValueArray[computerValue];
  document.querySelector(".cpuSelection").textContent = comChoice;
  document.querySelector(".userSelection").textContent = playerChoice;
  console.log(`Computer= ${comChoice},Player= ${playerChoice}`);

  if (comChoice == playerChoice) {
    document.querySelector(".mainStatus").textContent = "It is a draw";
  } else if (comChoice == "rock") {
    playerChoice == "paper"
      ? (document.querySelector(".mainStatus").textContent = "Player Wins")
      : (document.querySelector(".mainStatus").textContent = "Computer Wins");
  } else if (comChoice == "paper") {
    playerChoice == "scissors"
      ? (document.querySelector(".mainStatus").textContent = "Player Wins")
      : (document.querySelector(".mainStatus").textContent = "Computer Wins");
  } else if (comChoice == "scissors") {
    playerChoice == "rock"
      ? (document.querySelector(".mainStatus").textContent = "Player Wins")
      : (document.querySelector(".mainStatus").textContent = "Computer Wins");
  }
  if (document.querySelector(".mainStatus").textContent == "Computer Wins") {
    scoreCpu++;
    document.querySelector(".cpu").textContent = scoreCpu;
  } else if (
    document.querySelector(".mainStatus").textContent == "Player Wins"
  ) {
    scoreUser++;
    document.querySelector(".user").textContent = scoreUser;
  }
};

let makeDecisionR = function () {
  makeDecision("rock");
};
let makeDecisionP = function () {
  makeDecision("paper");
};
let makeDecisionS = function () {
  makeDecision("scissors");
};

let rock = document.querySelector(".rock");
rock.addEventListener("click", makeDecisionR);
let paper = document.querySelector(".paper");
paper.addEventListener("click", makeDecisionP);
let scissors = document.querySelector(".scissors");
scissors.addEventListener("click", makeDecisionS);
