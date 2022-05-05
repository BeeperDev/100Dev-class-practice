//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.text
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}