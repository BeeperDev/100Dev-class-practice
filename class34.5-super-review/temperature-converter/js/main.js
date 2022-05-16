//Write your pseduo code first! 
// get value of c
// convert c to f
// return the value

document.querySelector('h1').addEventListener(click, cToF)

function cToF(){
    let temp = Number(document.querySelector('input').value)
    temp = temp * 1.8 +32
    document.querySelector('h2').innerText = text
}