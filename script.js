let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random()*10);
}
function compareGuesses(human, computer, guess){
    var humanClose = Math.abs(guess - human);
    var guessClose = Math.abs(guess - computer);
    if(humanClose >= guessClose){
        return true;
    }
    else{
        return false;
    }

}
function updateScore(winner){
    if (winner){
        return humanScore++;
    }
    else{
        return computerScore++;
    }
}
function advanceRound(){
    return currentRoundNumber++
}
