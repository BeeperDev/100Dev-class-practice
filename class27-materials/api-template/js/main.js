// //Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   console.log(choice)
//   const url = `https://api.nasa.gov/planetary/apod?api_key=iVsMsnYkVz6bYa4kI7NeHqLyNyqAjDz0RAn1LKy7&date=${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         if(data.media_type === 'image'){
//           document.querySelector('img').src = data.hdurl
//         }else if(data.media_type === 'video'){
//           document.querySelector('iframe').src = data.url
//         }
//         document.querySelector('h3').innerText = data.explanation
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }





//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=iVsMsnYkVz6bYa4kI7NeHqLyNyqAjDz0RAn1LKy7&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        if(data.media_type === 'image'){                    //if media is an img, show image
          document.querySelector('img').src = data.hdurl
        } else if(data.media_type === 'video'){             // if media is a video, show video
          document.querySelector('iframe').src = data.url
        }

        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}





