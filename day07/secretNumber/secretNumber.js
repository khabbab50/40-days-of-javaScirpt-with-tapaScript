const minNumber = 1;
const maxNumber = 10;

function startSecretNumberGame() {
  const secretNumber = Math.floor(Math.random() * maxNumber) + 1;
  let attempts = 0;
  let userGuess = null;

  console.log("Welcome to the Number Guessing Game!");
  console.log("Try to Guess any number (1 to 10).");

  while (userGuess !== secretNumber) {
    const userGuessPrompt = prompt("Enter your userGuess: ");
    userGuess = parseInt(userGuessPrompt);

    if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
      console.log(
        `Invalid input! Please enter a number between ${minNumber} and ${maxNumber}.`
      );
      continue;
    }

    attempts++;

    if (userGuess < secretNumber) {
      console.log("Too Low! Try again.");
    } else if (userGuess > secretNumber) {
      console.log("Too High! Try again.");
    } else {
      console.log(
        `🎉 Congrats! You userGuessed the number in ${attempts} attempts.`
      );
      break;
    }
  }

  const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
  console.log(playAgainPrompt);
  const playAgain = playAgainPrompt
    ? playAgainPrompt.toLocaleLowerCase()
    : "no";
  if (playAgain === "yes") {
    startSecretNumberGame();
  } else {
    console.log("Thanks for playing! See you next time.");
  }
}

startSecretNumberGame();
