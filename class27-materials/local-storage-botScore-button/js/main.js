// //Create a button that adds 1 to a botScore stored in localStorage 


// //Example fetch using pokemonapi.co
// if(!localStorage.getItem('botScore')){      // if botScore != null  //as long as it's not falsy
//     localStorage.setItem('botScore',0)      // if botScore doesn't already exist, set it to 0
// }


// document.querySelector('button').addEventListener('click', addAnotherOne)

// function addAnotherOne(){
//     let botScoreVal = Number(localStorage.getItem('botScore'))
//     botScoreVal += 1
//     localStorage.setItem('botScore', botScoreVal)
// }




// //Create a button that adds 1 to a botScore stored in localStorage 
if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)
}



document.querySelector('button').addEventListener('click', addAnotherOne)

function addAnotherOne(){
    let botScoreValue = Number(localStorage.getItem('botScore'))
    botScoreValue += 1
    localStorage.setItem('botScore', botScoreValue)
}

