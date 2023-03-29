var randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);
var guessCount = 0;
var guessLimit = 5;
var hintElement = document.getElementById("hint");
var resultElement = document.getElementById("result");

function checkGuess() {
    var guess = parseInt(document.getElementById("guess").value);
    if (isNaN(guess) || guess < 0 || guess > 100) {
        alert("Please enter a valid number between 0 and 100.");
        return;
    }
    guessCount++;
    var guessesLeft = guessLimit - guessCount;
    if (guess == randomNumber) {
        resultElement.innerHTML = "Congratulations! You guessed the number in " + guessCount + " attempts.";
        hintElement.innerHTML = "";
    } else if (guessesLeft == 0) {
        resultElement.innerHTML = "Sorry, you ran out of guesses. The number was " + randomNumber + ".";
        hintElement.innerHTML = "";
    } else {
        if (guess < randomNumber) {
            hintElement.innerHTML = "Hint: Try guessing higher.";
        } else if (guess > randomNumber) {
            hintElement.innerHTML = "Hint: Try guessing lower.";
        } else if (guess === randomNumber + 1 || guess === randomNumber - 1) {
            hintElement.innerHTML = "Hint: You're very close. Try guessing again.";
        } else if (guess === randomNumber + 2 || guess === randomNumber - 2) {
            hintElement.innerHTML = "Hint: You're close. Try guessing again.";
        } else {
            hintElement.innerHTML = "Hint: Keep guessing!";
        }
        resultElement.innerHTML = "Wrong guess! You have " + guessesLeft + " guess(es) left.";
    }
}



