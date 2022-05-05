// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". 
// If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function thingy(anArray) {
    if (anArray[0] < anArray[anArray.length - 1]) {
        alert("hi")
    } else if (anArray[0] > anArray[anArray.length - 1]) {
        alert("bye")
    } else {
        alert("We close in an hour")
    }
}