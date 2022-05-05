// *Variables*
// Create a variable and console log the value
let aVariable = "This is a variable";
console.log(aVariable);

// Create a variable, add 10 to it, and alert the value
let addTen = 5;
addTen += 10;
alert(addTen);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference


// Create a function that divides one number by another and returns the remainder
function divideIt (a, b) {
    let remainder = a % b;
    return remainder;
}


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function doAdding(x, y) {
    let sum = x + y;
    if (sum > 50) {
        alert('Jumanji');
    } else {
        return sum;
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree (a, b, c) {
    let product = a * b * c;
    let remainder;
    remainder = product % 3;
    if (remainder === 0) {
        alert('zebra');
    } 
    return `The answer is ${product} with a remainder of ${remainder}`;
}