// *Variables*
// Create a variable and console log the value
let aVariable = "This is a variable"
console.log(aVariable)

// Create a variable, add 10 to it, and alert the value
let anotherVariable = 0
anotherVariable += 10
alert(anotherVariable)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNums (num1, num2, num3, num4) {
    let difference = num1 - num2 - num3 - num4
    alert(difference)
}
subFourNums(10, 3, 2, 1)

// Create a function that divides one number by another and returns the remainder
function divideAndReturn (num1, num2) {
    return num1 % num2
}

let remainder = divideAndReturn(12, 5)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanjiTime (num1, num2) {
    let sum = num1 + num2
    if (sum > 50) {
        alert('Jumanji')
    }
}
jumanjiTime(30, 30)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNums (num1, num2, num3) {
    let product = num1 * num2 * num3
    let answer = product % 3
    if (answer === 0) {
        alert('Zebra')
    } else {
        alert(`The remainder is ${answer}`)
    }
}

multiplyThreeNums(3, 3, 3)
multiplyThreeNums(2, 2, 1)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function takeInWordAndNum (word, num) {
    for (let i = 0; i < num; i++) {
        console.log(word)
    }
}

takeInWordAndNum('pasta', 4)