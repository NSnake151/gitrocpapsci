console.log("Hello");

function displayRPKOptions(){

    alert("Lets play RPK. Type in 'rock' 'paper' or 'scizzors'.");
}

//returns the name of the player who won, or "draw" if a draw.
function determineRPKWinner(playerAName, playerAChoice, playerBName, playerBChoice){

   let rpkwinner;

   rpkwinner = determineRPKResult(playerAChoice, playerBChoice);

   switch(rpkwinner){

    case null:
        return "draw";
    case 0:
        return playerBName;
    case 1:
        return playerAName;
   }
   
   


}

//returns null for a draw, 1 if playerAChoice wins, 0 if playerBChoice wins
function determineRPKResult(playerAChoice, playerBChoice)
{

    if(playerAChoice == playerBChoice){return null}
    if(playerAChoice == "rock" && playerBChoice == "scizzors"){return 1}
    if(playerAChoice == "paper" && playerBChoice == "rock"){return 1}
    if(playerAChoice == "scizzors" && playerBChoice == "paper"){return 1}
    else{
        return 0;
    }
    
    

}


function getComputerRPKChoice(){

    let randomChoice = Math.random() * 100;
    let computerChoice;

    if(randomChoice < 33)
    {
        computerChoice = "rock";
    }
    else if(randomChoice < 66)
    {
        computerChoice = "paper"
    }
    else{
        computerChoice = "rock"
    }

    return computerChoice;
}

function getUserRPKChoice(){

    let choiceValid = false;
    let userChoice;

    while(choiceValid == false)
    {
        userChoice = prompt();

        if(userChoice == "rock" || userChoice == "paper" || userChoice == "scizzors")
        {
            choiceValid = true;
        }
        else
        {
            alert("Invalid choice, please enter again");
        }

    }

    return userChoice;
    


}

function playRound(){

    displayRPKOptions();
    computerChoice = getComputerRPKChoice();
    
    userChoice = getUserRPKChoice();
    winner = determineRPKWinner("user", userChoice, "computer", computerChoice);

    if(winner === "user")
    {
        userScore = updateScore(userScore);
    }
    else if(winner === "computer"){

        computerScore = updateScore(computerScore);
    }
    else{

        alert("That round was a draw, the score has not changed.");
    }
    
    
    displayResults(userScore, computerScore);
}

function updateScore(score){

    return ++score;
}

function displayResults(userScore, computerScore){
    
    alert("Your score is: " + userScore + ". The computers score is: " + computerScore);

}

function getUserContinue(){

    return prompt("Enter 'y' to continue, or 'q' to quit.");


}



let userContinue = 'y';
let computerChoice;
let userChoice;
let winner;
let userScore = 0;
let computerScore = 0;

while(userContinue == 'y')
{
    
    playRound();
    userContinue = getUserContinue();

}

