//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data)
       document.querySelector('h2').innerText = data.name
       document.querySelector('h3').innerText = data.classes[0].name
       data.subclasses.forEach(obj => {
       // create an li
        const newLiItem = document.createElement('li')
       // add text to li
        newLiItem.textContent = obj.name
       // append the li to the ul
        document.querySelector('ul').appendChild(newLiItem)
       })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

