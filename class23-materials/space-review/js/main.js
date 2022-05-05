//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
alert(numArr.reduce((sum, current) => sum + current, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(arr){
    return arr.map(item => item * item )
}

//Create a function that takes string
//Print the reverse of that string to the console
function strIn(str){
    console.log(str.split('').reverse().join(''))
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindromeCheck = str => alert( str === str.split('').reverse().join(''))