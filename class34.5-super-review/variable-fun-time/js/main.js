//--- Easy
//create a variable and assign it a number
let aNum = 2


//minus 10 from that number
aNum -= -10

//print that number to the console
console.log(aNum)

//--- Medium
//create a variable that holds a value from the input
let inputVal = Number(document.querySelector('input').value)

//add 25 to that number
inputVal += 25

//alert that number
alert(inputVal)

//--- Hard
//create a variable that holds the h1
let h1Var = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
h1Var.addEventListener(click, addTwo)

function addTwo(){
    console.log(aNum+inputVal)
}

