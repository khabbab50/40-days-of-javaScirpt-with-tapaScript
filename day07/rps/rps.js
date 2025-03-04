// Getting Started With the Rock ⛰️, Paper 🧻, Scissors ✂️ Game

function rockPaperScissorsCame() {
  console.log("Getting Started With the Rock ⛰️, Paper 🧻, Scissors ✂️ Game");

  const userChoiePrompt = prompt("Enter Rock ⛰️, Paper 🧻 or Scissors ✂️");
  const userChoice = userChoiePrompt.toLowerCase();

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    default:
      computerChoice = "scissors";
  }

  // if (randomNumber === 1) {
  //   computerChoice = "rock";
  // } else if (randomNumber === 2) {
  //   computerChoice = "paper";
  // } else {
  //   computerChoice = "scissors";
  // }

  console.log("userChoice", userChoice);
  console.log("computerChoice", computerChoice);

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("you the user win, yoy!!!");
  } else if (userChoice === computerChoice) {
    console.log("The game is a tie");
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("yo Ho...computer Win!!!");
  } else {
    console.log("please check the input, we understand it");
  }

  const palyAgainPromt = prompt("Do You Want to Paly Again? (Yes/no)");
  const payAgain = palyAgainPromt ? palyAgainPromt.toLocaleLowerCase() : "no";

  if (palyAgainPromt === "yes") {
    rockPaperScissorsCame();
  } else {
    console.log("Thanks for playing! See you Next Time");
  }
}

// Start This Game
rockPaperScissorsCame();
