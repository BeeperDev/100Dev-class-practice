//Write your pseduo code first! 

//0 -> 32

// need the value that is in selseeyus
document.querySelector('#calculate').addEventListener('click', calculate)

//convert from selseeyus to fairnheight
function calculate() {
    let temp = document.querySelector('#celTemp').value
    //Celsius times 1.8 plus 32
    temp = temp * 1.8 + 32
    document.querySelector('#fairinheight').innerText =  `${temp}`
}
//show it

