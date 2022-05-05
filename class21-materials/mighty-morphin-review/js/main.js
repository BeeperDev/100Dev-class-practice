// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'Halloween'
favHoliday = favHoliday.toUpperCase()
console.log(favHoliday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let lastThree = 'pickles'
alert(lastThree.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function take5 (n1, n2, n3, n4, n5) {
    let answer = 100 - n1 - n2 - n3 - n4 - n5
    alert(Math.abs(answer))
}

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function take3(n1, n2, n3) {
    let min = Math.min(n1, n2, n3)
    let max = Math.max(n1, n2, n3)
    console.log(`The lowest number is ${min} The highest number is ${max}`)
}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails () {
    let thingy = Math.random()
    return (thingy < .5 ? 'Heads' : 'Tails')  
}

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipadelphia(n) {
    for(let i=1; i<=n; i++){
        let result = headsOrTails()
        console.log(result)
    }
}