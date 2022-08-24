let userScore = 0
let computerScore = 0

const rbtn = document.querySelector('.rock__btn')
const pbtn = document.querySelector('.paper__btn')
const sbtn = document.querySelector('.scissor__btn')
const result = document.querySelector('.game h2')
const para = document.querySelector('.game p')
const usign = document.querySelector('.player__board .sign')
const csign = document.querySelector('.computer__board .sign')
const uscore = document.querySelector('.player__score')
const cscore = document.querySelector('.computer__score')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const playbtn = document.querySelector('.play__btn')
const gamestatus = document.querySelector('.game__status')

rbtn.addEventListener('click', () => playRound('rock', getComputerChoice().toLowerCase()))
pbtn.addEventListener('click', () => playRound('paper', getComputerChoice().toLowerCase()))
sbtn.addEventListener('click', () => playRound('scissors', getComputerChoice().toLowerCase()))

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"]
    let choice = Math.floor(Math.random() * 3)
    return options[choice]
}

function playRound(userSelection, computerSelection) {

    if (userScore === 5 || computerScore === 5) {
        playAgain()
    }
    else {
        if (userSelection === 'rock' && computerSelection === 'rock') {
            result.textContent = "It's a tie"
            para.textContent = "Rock ties with Rock"
            usign.textContent = "✊"
            csign.textContent = "✊"
            uscore.textContent = `${userScore}`
            cscore.textContent = `${computerScore}`
            return "Tie"
        }
        else if (userSelection === 'rock' && computerSelection === 'paper') {
            computerScore += 1
            result.textContent = "You Lose!"
            para.textContent = "Paper beats Rock"
            usign.textContent = "✊"
            csign.textContent = "✋"
            uscore.textContent = `${userScore}`
            cscore.textContent = `${computerScore}`
            winnercheck()
            return "Lose"
        }
        else if (userSelection === 'rock' && computerSelection === 'scissors') {
            userScore += 1
            result.textContent = "You Win!"
            para.textContent = "Rock beats Scissors"
            usign.textContent = "✊"
            csign.textContent = "✌"
            uscore.textContent = `${userScore}`
            cscore.textContent = `${computerScore}`
            winnercheck()
            return "Win"
        }
        else if (userSelection === 'paper' && computerSelection === 'paper') {
            result.textContent = "It's a tie"
            para.textContent = "Paper ties with Paper"
            usign.textContent = "✋"
            csign.textContent = "✋"
            uscore.textContent = `${userScore}`
            cscore.textContent = `${computerScore}`
            return "Tie"
        }
        else if (userSelection === 'paper' && computerSelection === 'rock') {
            userScore += 1
            result.textContent = "You Win!"
            para.textContent = "Paper beats Rock"
            usign.textContent = "✋"
            csign.textContent = "✊"
            uscore.textContent = `${userScore}`
            cscore.textContent = `${computerScore}`
            winnercheck()
            return "Win"
        }
        else if (userSelection === 'paper' && computerSelection === 'scissors') {
            computerScore += 1
            result.textContent = "You Lose!"
            para.textContent = "Scissors beats Paper"
            usign.textContent = "✋"
            csign.textContent = "✌"
            uscore.textContent = `${userScore}`
            cscore.textContent = `${computerScore}`
            winnercheck()
            return "Lose"
        }
        else if (userSelection === 'scissors' && computerSelection === 'scissors') {
            result.textContent = "It's a tie"
            para.textContent = "Scissors ties with Scissors"
            usign.textContent = "✌"
            csign.textContent = "✌"
            uscore.textContent = `${userScore}`
            cscore.textContent = `${computerScore}`
            return "Tie"
        }
        else if (userSelection === 'scissors' && computerSelection === 'paper') {
            userScore += 1
            result.textContent = "You Win!"
            para.textContent = "Scissors beats Paper"
            usign.textContent = "✌"
            csign.textContent = "✋"
            uscore.textContent = `${userScore}`
            cscore.textContent = `${computerScore}`
            winnercheck()
            return "Win"
        }
        else if (userSelection === 'scissors' && computerSelection === 'rock') {
            computerScore += 1
            result.textContent = "You Lose!"
            para.textContent = "Rock beats Scissors"
            usign.textContent = "✌"
            csign.textContent = "✊"
            uscore.textContent = `${userScore}`
            cscore.textContent = `${computerScore}`
            winnercheck()
            return "Lose"
        }
    }
}

function winnercheck() {
    if (userScore === 5 || computerScore === 5) {
        playAgain()
    }
}

function playAgain() {
    modal.classList.add('active')
    overlay.classList.add('active')
    userScore === 5 ? gamestatus.textContent = 'You won!' : gamestatus.textContent = 'You lost!'
    playbtn.addEventListener('click', () => resetgame())
}

function resetgame() {
    userScore = 0
    computerScore = 0
    modal.classList.remove('active')
    overlay.classList.remove('active')
    result.textContent = "Choose your weapon"
    para.textContent = "First to score 5 points wins the game"
    usign.textContent = "❔"
    csign.textContent = "❔"
    uscore.textContent = `${userScore}`
    cscore.textContent = `${computerScore}`

}

overlay.addEventListener('click', () => {
    modal.classList.remove('active')
    overlay.classList.remove('active')
})
