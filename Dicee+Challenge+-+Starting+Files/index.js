var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

document
  .getElementsByTagName("img")[0]
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");
document
  .getElementsByTagName("img")[1]
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 === randomNumber2) {
  document.getElementsByTagName("h1")[0].innerHTML = "Draw !";
} else if (randomNumber1 > randomNumber2) {
  document.getElementsByTagName("h1")[0].innerHTML = "&#128681 Player 1 wins";
} else {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins &#128681";
}
