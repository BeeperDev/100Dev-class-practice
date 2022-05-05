let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#pear').addEventListener('click', plusOne)
document.querySelector('#strawberry').addEventListener('click', plusTwo)
document.querySelector('#pineapple').addEventListener('click', plusThree)
document.querySelector('#apple').addEventListener('click', plusFour)
document.querySelector('#avocado').addEventListener('click', plusFive)
document.querySelector('#orange').addEventListener('click', plusSix)
document.querySelector('#banana').addEventListener('click', plusSeven)
document.querySelector('#kiwi').addEventListener('click', plusEight)
document.querySelector('#mango').addEventListener('click', plusNine)


function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerHTML = total
}

function plusOne() {
  total = total + 1
  document.querySelector('#placeToPutResult').innerHTML = total
}

function plusTwo() {
  total = total + 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function plusThree() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerHTML = total
}

function plusFour() {
  total = total + 4
  document.querySelector('#placeToPutResult').innerHTML = total;
}

function plusFive() {
  total = total + 5
  document.querySelector('#placeToPutResult').innerHTML = total;
}

function plusSix() {
  total = total + 6
  document.querySelector('#placeToPutResult').innerHTML = total;
}

function plusSeven() {
  total = total + 7
  document.querySelector('#placeToPutResult').innerHTML = total;
}

function plusEight() {
  total = total + 8
  document.querySelector('#placeToPutResult').innerHTML = total;
}

function plusNine() { 
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total;
}