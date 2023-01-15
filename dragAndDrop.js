let phrase = "This house is beautiful!";
let dropField = document.getElementById("word");
function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData("text", event.target.innerHTML);

  //   event.target.style.opacity = "0.4";
}

function drop(event) {
  event.preventDefault();

  let data = event.dataTransfer.getData("text");
  dropField.innerHTML += data;
}
let checkButton = document.getElementById("check");
checkButton.addEventListener("click", check);

function check(event) {
  let str = dropField.innerText.trim();
  console.log(str);
  alert(str == phrase ? "Правильно!" : "Помилка");
}
