// JavaScript for Guess the Number Game

let secretNumber;
let attempts = 0;

// Function to start or reset the game
function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    attempts = 0;
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('guessInput').value = '';
}

// Function to check the user's guess
function checkGuess() {
    const userGuess = Number(document.getElementById('guessInput').value);
    attempts++;

    if (userGuess === secretNumber) {
        document.getElementById('resultMessage').textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
    } else if (userGuess > secretNumber) {
        document.getElementById('resultMessage').textContent = 'Too high! Try again.';
    } else {
        document.getElementById('resultMessage').textContent = 'Too low! Try again.';
    }
}

// Event listeners for button clicks
document.getElementById('guessButton').addEventListener('click', checkGuess);
document.getElementById('resetButton').addEventListener('click', startGame);

// Start the game when the page loads
startGame();
