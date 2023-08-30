function getComputerChoice() {
    // create array 'choices' and assign the three rock, paper, scissor choices
    const choices = ["rock","paper","scissors"];

    // use javascript math function with floor function to return an integer between 0 and 2
    // this integer will be used to select a random choice from the choices array
    let choice = Math.floor(Math.random() * 3);

    // return the random choice
    return choices[choice];
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice;
}

function playRound() {
    // rock beats scissors, paper beats rock, scissors beat paper

    // call player choice function and assign to variable as player choice
    let playerChoice = getPlayerChoice();

    // call computer choice function and assign to variable as computer choice
    let computerChoice = getComputerChoice();
    console.log("Computer picks " + computerChoice);

    // game logic
    if (playerChoice == computerChoice) {
        console.log("Tie");
    } else if (
        (playerChoice == 'rock' && computerChoice == 'scissors') ||
        (playerChoice == 'paper' && computerChoice == 'rock') ||
        (playerChoice == 'scissors' && computerChoice == 'paper')){
            console.log("You win, " + playerChoice + " beats " + computerChoice);
            playerScore++;
        } else if (
            (computerChoice == 'rock' && playerChoice == 'scissors') ||
            (computerChoice == 'paper' && playerChoice == 'rock') ||
            (computerChoice == 'scissors' && playerChoice == 'paper')) {
                console.log("Computer wins, " + computerChoice + " beats " + playerChoice);
                computerScore++;
            }

            console.log("Computer: " + computerScore + ", You: " + playerScore);
}

let computerScore = 0;
let playerScore = 0;

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (playerScore > computerScore) {
        console.log("You win the match!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins the match.");
    } else {console.log("Tie match")}
}

game();