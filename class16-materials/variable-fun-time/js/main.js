//--- Easy
//create a variable and assign it a number
let aNumber = 5;

//minus 10 from that number
aNumber -= 10;

//print that number to the console
console.log(aNumber);

//--- Medium
//create a variable that holds a value from the input
let inputStuff = document.querySelector('#danceDanceRevolution').value

//add 25 to that number
inputStuff += 25

//alert that number
alert(inputStuff)

//--- Hard
//create a variable that holds the h1
let h1Holder = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

h1Holder.addEventListener('click', sum)

function sum () {
    console.log(aNumber, Number(inputStuff))
}