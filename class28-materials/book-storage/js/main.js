//Example fetch using pokemonapi.co

//9780980200447
//0451526538

document.querySelector('button').addEventListener('click', getFetch)


document.querySelector('h2').innerText = localStorage.getItem('books')


function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        //put title into local storage
        if(!localStorage.getItem('books')){             // for first iteration - 'if not falsy' => set local storage
          localStorage.setItem('books', data.title)
        }else{
          let booksList = localStorage.getItem('books') + ' ' + data.title
          localStorage.setItem('books', booksList)
        }
        document.querySelector('h2').innerText = localStorage.getItem('books')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

