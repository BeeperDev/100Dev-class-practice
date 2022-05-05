// Write a program that shows all numbers between 1 and 100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
for (let n = 1; n <= 100; n++) {
if (n % 3 == 0) {
    if (n % 5 == 0) {
        console.log('fizzbuzz')
    }
    console.log('fizz')
} else if (n % 5 == 0) {
    console.log('buzz')
} else {
    console.log(n)
}
}