let makeDecision = function (playerChoice) {
  let computerValueArray = [0, "rock", "paper", "scissors"];
  let computerValue = Math.floor(Math.random() * 3) + 1;
  let comChoice = computerValueArray[computerValue];
  console.log(`Computer= ${comChoice},Player= ${playerChoice}`);
  if (comChoice == playerChoice) {
    console.log("Draw");
  } else if (comChoice == "rock") {
    playerChoice == "paper"
      ? console.log("Player Wins")
      : console.log("Com Wins");
  } else if (comChoice == "paper") {
    playerChoice == "scissors"
      ? console.log("Player Wins")
      : console.log("Com Wins");
  } else if (comChoice == "scissors") {
    playerChoice == "rock"
      ? console.log("Player Wins")
      : console.log("Com Wins");
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
