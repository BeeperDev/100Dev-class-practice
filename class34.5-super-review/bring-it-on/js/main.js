// *Variables*
// Create a variable and console log the value
let aThing = 'thing'
console.log(aThing)
// Create a variable, add 10 to it, and alert the value
let num = 3
alert(num+10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subt(a,b,c,d){
    alert(a-b-c-d)
}

// Create a function that divides one number by another and returns the remainder

function divid(a,b){
    return a % b
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwo(a,b){
    let sum = a+b
    sum > 50 ? alert('Jumanji') : sum
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mult3(a,b,c){
    let answer = a*b*c
    if(answer % 3 === 0){
        alert(zebra)
    }
}

//*Loops*
//Create a function that takes in a word and a number. 
// Console log the word x times where x was the number passed in

function word(str, n){
    for(let i=0; i<n; i++){
        console.log(str)
    }
}