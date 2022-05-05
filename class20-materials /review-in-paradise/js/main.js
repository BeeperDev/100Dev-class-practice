// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = 'tacos';
alert(favFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let aStr = 'burritos';
alert(aStr.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
let takeInThree = (n1, n2, n3) => {
    alert(n1 / n2 * n3)
}
takeInThree(4, 2, 3)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
let takeInOne = n1 => {
    console.log(Math.cbrt(n1))
}
takeInOne(9)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
let aMonth = month => {
    month = month.toLowerCase()
    if (month === 'june' || month === 'july' || month === 'august') {
        alert("YAY")
    } else {
        alert("Booo")
    }
}
aMonth('January')

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
let skip5 = num => {
    for (let i = 1; i <= num; i++) {
        if (i % 5 !== 0) {
            console.log(i)
        }
    }
}
skip5(37)