const button = document.querySelector("#motivate");
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
