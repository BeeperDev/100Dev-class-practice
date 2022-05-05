//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  fetch('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}