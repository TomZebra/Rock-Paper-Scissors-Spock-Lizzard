const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const explanationDisplay = document.getElementById("explanation");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let explanation;
let result;
let winMessage = "You Win!";
let loseMessage = "You Loose.";

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    computerChoiceFunc();
    getResult();
  })
);

function computerChoiceFunc() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  if (randomNumber === 1) {
    computerChoice = "ROCK";
  } else if (randomNumber === 2) {
    computerChoice = "PAPER";
  } else if (randomNumber === 3) {
    computerChoice = "SCISSORS";
  } else if (randomNumber === 4) {
    computerChoice = "SPOCK";
  } else if (randomNumber === 5) {
    computerChoice = "LIZZARD";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

// function getResult() {
//   if (computerChoice === userChoice) {
//     explanation = "A stalemate..."
//     result = "Its a Draw";
//   } else if (
//     userChoice === "ROCK" && (computerChoice === "SCISSORS" || computerChoice === "LIZZARD")
//     userChoice === "PAPER" && (computerChoice === "ROCK" || computerChoice === "SPOCK")
//     userChoice === "SCISSORS" && (computerChoice === "LIZZARD" || computerChoice === "PAPER")
//     userChoice === "SPOCK" && (computerChoice === "SCISSORS" || computerChoice === "ROCK")
//     userChoice === "LIZZARD" && (computerChoice === "SPOCK" || computerChoice === "PAPER")
//   )
//   {
//     return winMessage;
//   } else () {
//     return loseMessage;
//   }
//   explanationDisplay.innerHTML = explanation;
//   resultDisplay.innerHTML = result;
// }

// function wichVerb () {
//     if (userChoice === "ROCK" || computerChoice === "ROCK") && (computerChoice === "SCISSORS" || computerChoice === "LIZZARD"){
//         verb = "crushes"
//     } else if (userChoice === "PAPER" || computerChoice === "SPOCK") {
//         verb = "disproves"
//     } else if (userChoice === "PAPER" $$ computerChoice === "ROCK") {
//         verb = "covers"
//     } else if (userChoice === "SCISSORS" $$ computerChoice === "PAPER") {
//         verb = "cuts"
//     } else if (userChoice === "SCISSORS" $$ computerChoice === "LIZZARD") {
//         verb = "decapitets"
//     }

// }

function getResult() {
  if (computerChoice === userChoice) {
    explanation = "A stalemate...";
    result = "Its a Draw";
  } 
  else if (computerChoice === "ROCK" && userChoice === "PAPER") {
    explanation = "Paper covers Rock";
    result = "Player Wins!";
  } else if (computerChoice === "ROCK" && userChoice === "SPOCK") {
    explanation = "Spock vaporizes Rock";
    result = "Player Wins!";
  } else if (computerChoice === "PAPER" && userChoice === "SCISSORS") {
    explanation = "Scissors cuts Paper";
    result = "Player Wins!";
  } else if (computerChoice === "PAPER" && userChoice === "LIZZARD") {
    explanation = "Lizzard eats Paper";
    result = "Player Wins!";
  } else if (computerChoice === "SCISSORS" && userChoice === "ROCK") {
    explanation = "Rock crushes Scissors";
    result = "Player Wins!";
  } else if (computerChoice === "SCISSORS" && userChoice === "SPOCK") {
    explanation = "Spock smashes Scissors";
    result = "Player Wins!";
  } else if (computerChoice === "SPOCK" && userChoice === "PAPER") {
    explanation = "Paper disproves Spock";
    result = "Player Wins!";
  } else if (computerChoice === "SPOCK" && userChoice === "LIZZARD") {
    explanation = "Lizzard poisons Spock";
    result = "Player Wins!";
  } else if (computerChoice === "LIZZARD" && userChoice === "ROCK") {
    explanation = "Rock crushes Lizzard";
    result = "Player Wins!";
  } else if (computerChoice === "LIZZARD" && userChoice === "SCISSORS") {
    explanation = "Scissors decapitates Lizzard";
    result = "Player Wins!";
  } 
  
    else if (computerChoice === "ROCK" && userChoice === "LIZZARD") {
    explanation = "Rock crushes Lizzard";
    result = "You Loose!";
  } else if (computerChoice === "ROCK" && userChoice === "SCISSORS") {
    explanation = "Rock crushes Scissors";
    result = "You Loose!";
  } else if (computerChoice === "PAPER" && userChoice === "ROCK") {
    explanation = "Paper covers Rock";
    result = "You Loose!";
  } else if (computerChoice === "PAPER" && userChoice === "SPOCK") {
    explanation = "Paper disproves Spock";
    result = "You Loose!";
  } else if (computerChoice === "SCISSORS" && userChoice === "PAPER") {
    explanation = "Scissors cuts Paper";
    result = "You Loose!";
  } else if (computerChoice === "SCISSORS" && userChoice === "LIZZARD") {
    explanation = "Scissors decapitates Lizzard";
    result = "You Loose!";
  } else if (computerChoice === "SPOCK" && userChoice === "ROCK") {
    explanation = "Spock vaporizes Rock";
    result = "You Loose!";
  } else if (computerChoice === "SPOCK" && userChoice === "SCISSORS") {
    explanation = "Spock smashes Scissors";
    result = "You Loose!";
  } else if (computerChoice === "LIZZARD" && userChoice === "PAPER") {
    explanation = "Lizzard eats Paper";
    result = "You Loose!";
  } else if (computerChoice === "LIZZARD" && userChoice === "SPOCK") {
    explanation = "Lizzard poisons Spock";
    result = "You Loose!";
  }
  explanationDisplay.innerHTML = explanation;
  resultDisplay.innerHTML = result;
}





//Game circle
document.querySelectorAll(".ciclegraph").forEach((ciclegraph) => {
  let circles = ciclegraph.querySelectorAll(".circle");
  let angle = 360 - 90,
    dangle = 360 / circles.length;
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    angle += dangle;
    circle.style.transform = `rotate(${angle}deg) translate(${
      ciclegraph.clientWidth / 2
    }px) rotate(-${angle}deg)`;
  }
});
