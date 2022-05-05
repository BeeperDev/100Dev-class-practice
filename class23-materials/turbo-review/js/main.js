// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let aSentence = 'These are some words?'
alert(aSentence.endsWith('?'))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", 
//and print it to the console
let someWords = 'I am looking for jr. dev positions'
console.log(someWords.replaceAll('jr.dev', 'software engineer'))


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    let randomNum = Math.random()
    if(randomNum < .33 ){
        return 'rock'
    } else if(randomNum < .66){
        return 'paper'
    } else {
        return 'scissors'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) 
//and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice) {
    let botChoice = rockPaperScissors()
    if((playerChoice === 'rock' && botChoice === 'scissors') ||
      (playerChoice === 'scissors' && botChoice === 'paper') ||
      (playerChoice === 'paper' && botChoice === 'rock')) {
        console.log('Player is Winner!')
    } else if(playerChoice === botChoice){
        console.log('Tie!')
    } else {
        console.log('Bot Wins!')
    }
}

checkWin('paper')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of 
// choices in the array. Print the results of each game to the console.

