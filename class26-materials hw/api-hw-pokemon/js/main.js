//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1)
        document.querySelector('img').src = data.sprites.front_default
        document.querySelector('h3').innerText = "Types"
        data.types.forEach( obj => {
          console.log(obj.type.name)
          //create an li
          const liItem = document.createElement('li')
          // add text to li
          liItem.textContent = obj.type.name
          //append the new li to the ul
          document.querySelector('ul').appendChild(liItem)
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}