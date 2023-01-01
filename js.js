const button = document.querySelector("#motivate");
const point = document.querySelector('.point');

button.addEventListener("click", myFunc);

function myFunc() {
  const randomNumber = Math.floor(Math.random() * 11);

  fetch("./quotes.json")
    .then((response) => response.json())
    .then(
      (json) =>
        (document.getElementById("quote").innerHTML = json[randomNumber])
    );
}

addEventListener('DOMContentLoaded', (event) => {
 
  point.addEventListener('click', () => {
    (document.getElementById("quote").innerHTML = `<div>This is one of my oldest projects.I made it to learn about JSON files, javascript, and bootstrap. </div>`)
  })
});


