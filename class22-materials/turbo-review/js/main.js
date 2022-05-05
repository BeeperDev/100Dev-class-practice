// *Variables*
// Declare a variable and assign it to your fav drink as a string. 
// Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = '  tea   '
let trimDrink = drink.trim()
console.log(trimDrink.trim())

// Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let words = 'red, orange, yellow, green, blue, purple, apple'
let result = words.includes('apple')
console.log(result)
let result2 = words.search('bears')


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    let random = Math.random()
    if(random < .3333){
        return 'rock'
    } else if(random < .6666){
        return 'scissors'
    } else {
        return 'paper'
    }
}   


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice) {
    let botChoice = rockPaperScissors()
    if((playerChoice === 'rock' && botChoice === 'scissors') || 
    (playerChoice === 'paper' && botChoice ==='rock') || 
    (playerChoice === 'scissors' && botChoice ==='paper') ){
        //player wins
        console.log('Player Wins')
    } else if(playerChoice ===botChoice){
        // tie
        console.log('Tie')
    } else {
        //bot wins
        console.log('Bot Wins')
    }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGame(arr){
    for(let i=0; i<arr.length; i++){    //lopp through array
        console.log(checkWin(arr[i]))
    }
}



function playGameMethod(arr) {
    arr.forEach(element => checkWin(element))
}

playGameMethod(['rock', 'paper', 'scissors'])