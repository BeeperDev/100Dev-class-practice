document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here - class day, weekend, or boring day?
if (day === "monday" || day === "wednesday" || day === "friday") {
  document.querySelector('#placeToSee').innerHTML = "It's a boring day!";
} else if (day ==="saturday" || day === "sunday") {
  document.querySelector('#placeToSee').innerHTML = "It's a weekend!";
} else if (day === "tuesday" || day === "thursday") {
  document.querySelector('#placeToSee').innerHTML = "It's a class day!";
} else {
  document.querySelector('#placeToSee').innerHTML = "Please try again!";
}


}
 