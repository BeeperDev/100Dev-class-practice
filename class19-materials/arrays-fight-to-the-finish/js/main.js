//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['Shrek 1', 'Shrek 2', 'Shrek 3', 'Shrek 4', 'Shrek 5']
for (let i = 0; i< movies.length; i++) {
    document.querySelector('h2').innerText += movies[i]
}

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
for (let j = 0; j <= numbers.length; j++) {
    numbers[j] = numbers[j] + 3
}

numbers.forEach((elem, inx) => { 
    numbers[inx] = elem + 3
})

//Find the average of all the numbers from question three
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8]
let sum = 0
let average
for (let y=0; numbers2.length; y++){
    sum += numbers2[y]
}
average = sum / numbers2.length