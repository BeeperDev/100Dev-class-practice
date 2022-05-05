//Arrays

//Create an array of numbers. Sum all of the numbers. Alert the sum.
let numArr = [1, 2, 3, 4, 5, 6, 7, 8,]

let sum = 0
for(let i=0; i<numArr.length; i++) {
    sum += numArr[i]
}
alert(sum)


//or
let sum2 = numArr.reduce( (acc, c) => acc + c, 0 )
alert(sum2)


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared


//Create a function that takes string
//Print the reverse of that string to the console


//Create a function that takes in a string
//Alert if the string is a palindrome or not
