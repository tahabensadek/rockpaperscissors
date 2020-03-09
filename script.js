// This is my first ever Rock Paper Scissors game and I'm glad you are playing it :) Don't break anything lol.

let playerScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard")
const result_div = document.querySelector(".result > h2")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const moves = ["rock","paper","scissors"];

// this function just capitalizes the different moves so it appears better on the user's screen #aesthetics :)

function capitalize(move) {
    if (move === "rock") return "Rock";
    if (move === "paper") return "Paper";
    if (move === "scissors") return "Scissors";
}

// this function runs if the user wins the duel against the computer

function win(userChoice, computerChoice) {
    playerScore++;
    userScore_span.innerHTML = playerScore;
    result_div.innerHTML = `${capitalize(userChoice)} beats ${capitalize(computerChoice)}! You win!`;
    document.getElementById(userChoice).classList.add("green-border");
    document.getElementById(computerChoice).classList.add("red-border");
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove("green-border")
        }, 1000);
    setTimeout(function() {
        document.getElementById(computerChoice).classList.remove("red-border")
        }, 1000);
}
    


// this function runs if the user loses to the computer

function loss(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${capitalize(userChoice)} gets beaten by ${capitalize(computerChoice)}. You lose.`
    document.getElementById(userChoice).classList.add("red-border");
    document.getElementById(computerChoice).classList.add("green-border");
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove("red-border")
        }, 1000);
    setTimeout(function() {
        document.getElementById(computerChoice).classList.remove("green-border")
        }, 1000);

}

// this function runs if both parties pick the same thing

function tie(userChoice) {
    result_div.innerHTML = `You both picked ${capitalize(userChoice)} It's a draw.`
    document.getElementById(userChoice).classList.add("grey-border");
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove("grey-border")
        }, 1000);
}


// function to randomly pick a move for the computer

function getComputerChoice() {
    return moves[Math.floor(Math.random() * moves.length)]
};

// this is the function that decides the outcome of a game. It compares both picks and runs the next function accordingly

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            win(userChoice, computerChoice);
        break;

        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            loss(userChoice, computerChoice);
        break;

        case "scissorsscissors":
        case "paperpaper":
        case "rockrock":
            tie(userChoice);
        break;

        default:
            console.log("Uh... Ohhh! Something unexpected happened... try reloading the page.");
    }
}

// this is the function that tells the navigator which move the user picked and sends a parameter to the game function

function play() {
    
    paper_div.addEventListener("click", function() {
        game("paper")
    }) 

    rock_div.addEventListener("click", function() {
        game("rock")})

    scissors_div.addEventListener("click", function() {
        game("scissors")
    })
}

play()