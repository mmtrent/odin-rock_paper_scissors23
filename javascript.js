let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        playRound(button.id);
    })
});

const computerChoiceDiv = document.querySelector('#computerPick');

const scoreDiv = document.querySelector('#score');


function getComputerChoice() {
    // create array 'choices' and assign the three rock, paper, scissor choices
    const choices = ["rock","paper","scissors"];

    // use javascript math function with floor function to return an integer between 0 and 2
    // this integer will be used to select a random choice from the choices array
    let choice = Math.floor(Math.random() * 3);

    // return the random choice
    return choices[choice];
}


function playRound(playerChoice) {
    // rock beats scissors, paper beats rock, scissors beat paper

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
    computerChoiceDiv.textContent = "Computer picks " + computerChoice;
    scoreDiv.textContent = "Computer: " + computerScore + ", You: " + playerScore;

    if (playerScore == 5) {
        scoreDiv.textContent = "You win!";
        alert("You win!");
    };

    if (computerScore == 5) {
        scoreDiv.textContent = "Computer wins.";
        alert("Computer Wins!");
    };
}