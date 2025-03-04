// rock button
let rock = document.createElement("button");
rock.textContent = "Rock";
document.body.appendChild(rock);
rock.addEventListener('click', () => playRound("Rock", getComputerChoice()));

// paper button
let paper = document.createElement("button");
paper.textContent = "Paper";
document.body.appendChild(paper);
paper.addEventListener('click', () => playRound("Paper", getComputerChoice()));

// scissors button
let scissors = document.createElement("button");
scissors.textContent = "Scissors";
document.body.appendChild(scissors);
scissors.addEventListener('click', () => playRound("Scissors", getComputerChoice()));

// button reference
let button = document.querySelectorAll('button');

// score container
let humanScore = 0;
let computerScore = 0;

// display human and computer choices
let choices = document.createElement('div');
document.body.appendChild(choices);

// display results
let results = document.createElement('div');
document.body.appendChild(results);

//display both score
let score = document.createElement('div');
document.body.appendChild(score);

// display who won the game (score of 5)
let whoWon = document.createElement('div');
document.body.appendChild(whoWon);

// play again button
let playAgain = document.createElement('button');
playAgain.textContent = 'Play Again';
playAgain.addEventListener('click', resetGame);

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 1/3) {
        return "Rock";
    }
    else if (randomNumber < 2/3) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}   

function playRound(humanChoice, computerChoice) {

    // stop the game when either player reaches a score of 5
    if (humanScore === 5 || computerScore === 5) return;

    if (humanChoice === "Rock" && computerChoice === "Rock") {
        results.textContent = "It's a draw!";
    }
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        results.textContent = "You lose! Paper beats Rock";
        computerScore++;
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        results.textContent = "You won! Rock beats Scissors";
        humanScore++;
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        results.textContent = "You won! Paper beats Rock";
        humanScore++;
    }
    else if (humanChoice === "Paper" && computerChoice === "Paper") {
        results.textContent = "It's a draw!";
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        results.textContent = "You lose! Scissors beats Rock";
        computerScore++;
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        results.textContent = "You lose! Rock beats Scissors";
        computerScore++;
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        results.textContent = "You won! Scissors beats Papers";
        humanScore++;
    }
    else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        results.textContent = "It's a draw!";
    }

    // update description
    choices.textContent = `You chose: ${humanChoice}, Computer chose: ${computerChoice}`;
    score.textContent = `Your Score: ${humanScore}, Computer's Score: ${computerScore}`;

    // check who has a score of 5
    if (humanScore === 5) {
        whoWon.textContent = "YOU WON THE GAME!";
        button.forEach(btn => btn.disabled = true);
        document.body.appendChild(playAgain);
    }
    else if (computerScore === 5) {
        whoWon.textContent = "YOU LOSE!, COMPUTER WON THE GAME!";
        button.forEach(btn => btn.disabled = true);
        document.body.appendChild(playAgain);
    }
}

function resetGame() {
    // reset score
    humanScore = 0;
    computerScore = 0;

    // remove game info
    choices.textContent = "";
    results.textContent = "";
    score.textContent = "";
    whoWon.textContent = "";

    // enable button
    button.forEach(btn => btn.disabled = false);

    // remove play again button
    playAgain.remove();
}








