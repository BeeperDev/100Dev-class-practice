//Write your pseduo code first! 

//Need cel temp
document.querySelector('#convert').addEventListener('click', convert)

//convert cel temp to fairin height
function convert() {
    let temp = document.querySelector('#celTemp').value
    temp = temp * 1.8 + 32
    //display converted temp
    console.log(temp)
    document.querySelector('#newTemp').innerText = `${temp}`
}

