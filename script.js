
const choiceArray = ["rock", "paper", "scissors"];

document.querySelectorAll('.choice').forEach(item => {
    item.addEventListener('click', playGame);
});

function playGame(event) {
    // console.log('Event triggered:', event);

    const userChoice = event.currentTarget.id;
  
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    // console.log(`User Choice: ${userChoice}, Computer Choice: ${computerChoice}, Result: ${result}`);

    document.getElementById('resultDisplay').innerHTML = `
        <h5 id="user-choice">Your Choice: ${userChoice.toUpperCase()}</h5>
        <h5 id="computer-choice">Computer's Choice: ${computerChoice.toUpperCase()}</h5>
        <h5 id="result">Result: ${result}</h5>
    `;
}


// computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choiceArray[randomIndex];
}

// result
function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "IT'S A DRAW!!!";
    }
    if ((userChoice === 'rock' && computerChoice === 'scissors') || 
        (userChoice === 'paper' && computerChoice === 'rock') || 
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        return "YOU WON!!!";
    }
    return "YOU LOSE!!!";
}
