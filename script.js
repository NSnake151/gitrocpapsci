console.log("Hello");

function displayRPKOptions(){

    alert("Lets play RPK. Type in 'rock' 'paper' or 'scizzors'.");
}

function determineRPKWinner(userChoice, computerChoice){

   
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
    winner = determineRPKWinner(userChoice, computerChoice);

    if(winner == "user")
    {
        userScore = updateScore(userScore);
    }
    else{
        computerScore = updateScore(computerScore);
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

