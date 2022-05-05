//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function thinger(arr) {
    let product = 1
    for(let i = 0; i < arr.length; i++) {
        product *= arr[i] 
    }
    alert(product)
}

function thung(arr) {
    let answer = 1
    arr.forEach(x => answer *= x)
    alert(answer)
}
