// *Variables*
// Declare a variable, assign it a value, and alert the value
let vari = 10
alert(vari)

// Create a variable, divide it by 10, and console log the value
let var2 = 50
console.log(var2 / 10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThree (n1, n2, n3) {
    alert(n1*n2*n3)
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function takeInFour (n1, n2, n3, n4) {
    console.log(n1 + n2 - n3 - n4)
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. 
// If the value is greater then 25, console log "WE HAVE A WINNNA"
function takeInThree(n1, n2, n3) {
 let finish = (100 + n1 - n2) / n3
    if (finish > 25) {
        console.log(`WE HAVE A WINNA because the number is ${finish}`)
    }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". 
// Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfWeek (day) {
    let specificDay = day.toLowerCase()
    if (specificDay == 'saturday' || specificDay == 'sunday') {
        alert('weekend')
    } else if (specificDay == 'monday' || specificDay == 'tuesday' || specificDay == 'wednesday' || specificDay == 'thursday' || specificDay == 'friday') {
        alert('week day')
    } else {
        alert('Try again')
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function TakeInANum (n) {
    for (let i =1; i<=n; i+=3) {
        console.log(i)
    }
}