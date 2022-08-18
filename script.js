function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"]
    let choice = Math.floor(Math.random() * 3)
    return options[choice]
}

function playRound(userSelection, computerSelection){

    if(userSelection === 'rock' && computerSelection === 'rock'){
        console.log("It's a tie")
        return "Tie"
    }
    else if(userSelection === 'rock' && computerSelection === 'paper'){
        console.log("You Lose! Paper beats Rock")
        return "Lose"
    }
    else if(userSelection === 'rock' && computerSelection === 'scissors'){
        console.log("You Win! Rock beats Scissors")
        return "Win"
    }
    else if(userSelection === 'paper' && computerSelection === 'paper'){
        console.log("It's a tie")
        return "Tie"
    }
    else if(userSelection === 'paper' && computerSelection === 'rock'){
        console.log("You Win! Paper beats Rock")
        return "Win"
    }
    else if(userSelection === 'paper' && computerSelection === 'scissors'){
        console.log("You Lose! Scissors beats Paper")
        return "Lose"
    }
    else if(userSelection === 'scissors' && computerSelection === 'scissors'){
        console.log("It's a tie")
        return "Tie"
    }
    else if(userSelection === 'scissors' && computerSelection === 'paper'){
        console.log("You Win! Scissors beats Paper")
        return "Win"
    }
    else if(userSelection === 'scissors' && computerSelection === 'rock'){
        console.log("You Lose! Rock beats Scissors")
        return "Lose"
    }
    else{
        return "oops! please try again."
    }
}


function game(){
    let userScore = 0;
    let computerScore = 0;

    for(i = 0; i < 5; i++){
        
        let computerSelection = getComputerChoice().toLowerCase()
        let userSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase()
        let result = playRound(userSelection, computerSelection)

        if (result === 'Lose'){
            computerScore += 1
        }
        else if(result === 'Win'){
            userScore += 1
        }
    }

    if (userScore > computerScore) {
        console.log(`Player win! Player score: ${userScore} and Computer score: ${computerScore}`)
        return `Player win! Player score: ${userScore} and Computer score: ${computerScore}`
    }
    else if (userScore < computerScore) {
        console.log(`Computer win! Player score: ${userScore} and Computer score: ${computerScore}`)
        return `Computer win! Player score: ${userScore} and Computer score: ${computerScore}`
    }
    else if (userScore === computerScore) {
        console.log(`Tie! Player score: ${userScore} and Computer score: ${computerScore}`)
        return `Tie! Player score: ${userScore} and Computer score: ${computerScore}`
    }
    else{
        return "Please play again!"
    }
}

game()