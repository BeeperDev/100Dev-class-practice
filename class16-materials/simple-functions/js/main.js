//---Easy
//create a function that subtracts two numbers and alerts the difference
function doesSubtraction (num1, num2) {
    let difference = num1 - num2;
    alert(difference);
}

// doesSubtraction(50, 30)
// doesSubtraction(100, 33)

//create a function that divides three numbers and console logs the quotient
function doesDivision (num1, num2, num3) {
    let quotient = num1 / num2 / num3;
    console.log(quotient);
}

// doesDivision(99, 12, 3);
// doesDivision(12, 4, 3);

//create a function that multiplys three numbers and returns the product
function takeInThree (num1, num2, num3) {
    return num1 * num2 * num3
}

// let answer = takeInThree(5, 10, 2)
// alert(answer)


//---Medium
//create a function that takes in three numbers. 
// Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addTwoAndDivide (uno, dos, tres) {
     let sum = uno + dos;
     let remainder = sum % tres
     return remainder
}
// let blahblah = addTwoAndDivide (3, 3, 2)
// console.log(blahblah)

//---Hard
// create a function that takes in 4 numbers. Multiply the first two numbers. 
// If the product is greater than 100 add the sum of the last two numbers and console log the value. 
// If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function takeFour(n1, n2, n3, n4) {
    let product = n1 * n2
    if(product > 100) {
        console.log(n3 + n4)
    } else if(product < 100) {
        console.log(n3 + n4)
    } else {
        let blob = n1 * n2 * n3 
        console.log(blob % n4)
    }
}