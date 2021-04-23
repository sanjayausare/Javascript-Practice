let userScore = 0;
let computerScore = 0;

const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');

const result = document.querySelector('.result p');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

function getComputerChoice(){
    let choices = ['rock','paper','scissors'];
    let choiceNumber = Math.floor(Math.random() * 3);
    return choices[choiceNumber];
}
function getWord(word) {
    if(word === "rock") return "Rock";
    if(word === "paper") return "Paper";
    return "Scissors";
}
function win(userChoice,computerChoice) {
    document.getElementById(userChoice).classList.add('green-glow');
    userScore++;
    userScore_span.textContent = userScore;
    result.textContent = `${getWord(userChoice)} beats ${getWord(computerChoice)}. You Win! 🔥`;
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 500);  
}
function lose(userChoice,computerChoice) {
    document.getElementById(userChoice).classList.add('red-glow');
    computerScore++;
    computerScore_span.textContent = computerScore;
    result.textContent = `${getWord(computerChoice)} beats ${getWord(userChoice)}. You Lose! 💩`;
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 500);   
}
function draw(userChoice,computerChoice) {
    document.getElementById(userChoice).classList.add('gray-glow');
    result.textContent = `${getWord(userChoice)} and ${getWord(computerChoice)} are equal. Draw! 😶`;
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 500);  
}
function game(userChoice) {
    let computerChoice = getComputerChoice();
    if (userChoice == computerChoice) {
        draw(userChoice,computerChoice);
    }
    else if((userChoice == "rock" && computerChoice == "scissors") || (userChoice == "paper" && computerChoice == "rock") || (userChoice == "scissors" && computerChoice == "paper") ) {        
        win(userChoice,computerChoice);
    }
    else{
        lose(userChoice,computerChoice);
    }
}

rock.addEventListener('click',function(){
    game('rock');
});

paper.addEventListener('click',function(){
    game('paper');
});

scissors.addEventListener('click',function(){
    game('scissors');
});