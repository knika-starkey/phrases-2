let phraseArr = [
  "This house is beautiful!",
  "Would you like some coffee?",
  "My friend and I want to go swimming in the lake.",
  "Would you mind lending me your bicycle?",
  "What do you think about watching a film?",
  "It's a nice day, isn't it",
];
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
let phrase = phraseArr[Math.floor(Math.random() * phraseArr.length)];
let wordsArr = shuffle(phrase.split(" "));
document.write(`<div class="col l12 s12 center colCustom colC" id="c3">
<div class="container">`);
for (let i = 0; i < wordsArr.length; i++) {
  document.write(
    `<div id="drag${i}" class="card" draggable="true" ondragstart="drag(event)">${wordsArr[i]}</div>`
  );
}
document.write(`</div></div>`);
let dropField = document.getElementById("word");
function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData("text", event.target.innerHTML);
  event.target.style.opacity = "0.4";

  //
}

function drop(event) {
  event.preventDefault();

  let data = event.dataTransfer.getData("text");
  dropField.innerHTML += `${data} `;
}
let checkButton = document.getElementById("check");
checkButton.addEventListener("click", check);

function check(event) {
  let str = dropField.innerText.trim();
  // console.log(str);
  alert(str == phrase ? "Правильно!" : "Помилка");
}

let cleanButton = document.getElementById("clean");
cleanButton.addEventListener("click", clean);
function clean() {
  let divWord = document.getElementsByClassName("card");
  dropField.innerText = "";
  for (let i = 0; i < divWord.length; i++) {
    divWord[i].style.opacity = "1.0";
  }
}
