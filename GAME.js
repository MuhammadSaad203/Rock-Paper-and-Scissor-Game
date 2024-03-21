// BUILDING GAME
let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user_score");
const compScorepara = document.querySelector("#Comp_score");
const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "GAME WAS DRAWN";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    console.log("YOU WIN");
    msg.innerText = "YOU WON ";
  } else {
    compScore++;
    compScorepara.innerText = compScore;

    console.log("YOU LOSE");
    msg.innerText = "YOU LOST.";
  }
};
const playGame = (userChoice) => {
  console.log("user choice", userChoice);
  const compChoice = genCompChoice();
  console.log("Comp Choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
