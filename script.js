// Computer Choice
let computerPlay = (result) => {
    let choose = Math.floor(Math.random()*3);
    if (choose == 0) {
         return result = "rock";
    } else if (choose == 1) {
         return result = "scissors";
    } else {
         return result = "paper";
}};

let tablero = document.querySelector(".result2");
let playerChoice = document.querySelectorAll("button");



//Player Choice
let playerPlay = (e) => {
    let btn = e.currentTarget;
    let choice = btn.dataset.value;
    tablero.textContent = playRound(choice,computerPlay());
    tablero.className = "result3"; 
    theWinner();
   };

playerChoice.forEach(choice => choice.addEventListener("click", playerPlay));


function theWinner () {
    if (computerScore == 3) {
        tablero.className = "result4"
        tablero.textContent = "Ooops, you loose!"
        tablero.appendChild(reset);
        reset.textContent = "Reset";
        reset.className = "reset1"
        playerChoice.forEach(choice => choice.disabled = true);
    } else if (playerScore == 3) {
        tablero.className = "result5"
        tablero.textContent = "Great! You win!"
        tablero.appendChild(reset);
        reset.textContent = "Reset";
        reset.className = "reset1";
        playerChoice.forEach(choice => choice.disabled = true);
    }
};


//Deciding the winner

let computerScore = 0;
let comScore = document.querySelector(".computerScor");

let playerScore = 0;
let humScore = document.querySelector(".humanScor");

let playRound = (playerSelec, computerSelec) => {
    let result;
if (playerSelec == "rock" && computerSelec == "scissors") {
    playerScore++;
    humScore.textContent = playerScore;
    return result = "You win, ROCK beats SCISSORS";
} else if (playerSelec == "rock" && computerSelec == "paper") {
    computerScore++;
    comScore.textContent = computerScore;
    return result = "You loose, PAPER beat ROCK";
} else if (playerSelec == "rock" && computerSelec == "rock") {
    return result = "Tie!";
}else if (playerSelec == "scissors" && computerSelec == "paper") {
    playerScore++;
    humScore.textContent = playerScore;
    return result = "You win, SCISSORS beats PAPER"
} else if (playerSelec == "scissors" && computerSelec == "rock") {
    computerScore++;
    comScore.textContent = computerScore;
    return result = "You loose, ROCK beat SCISSORS";
} else if (playerSelec == "scissors" && computerSelec == "scissors") {
    return result = "Tie!";
} else if (playerSelec == "paper" && computerSelec == "rock") {
    playerScore++;
    humScore.textContent = playerScore;
    return result = "You win, PAPER beats ROCK";
} else if (playerSelec == "paper" && computerSelec == "scissors") {
    computerScore++;
    comScore.textContent = computerScore;
    return result = "You loose, SCISSORS beat PAPER";
} else if (playerSelec == "paper" && computerSelec == "paper") {
    return result = "Tie!";
}
};

const reset = document.createElement("button");

reset.addEventListener("click", reseting);

function reseting() {
    if (tablero.classList == "result4" || tablero.classList == "result5") {
    humScore.textContent = 0;
    comScore.textContent = 0;
    let destroyBtn = tablero.removeChild(reset);
    tablero.textContent = "Let's try again!"
    tablero.className = "result2";
    playerChoice.forEach(choice => choice.disabled = false);
    destroyBtn;
    }
};