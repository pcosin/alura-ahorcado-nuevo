const btnStart = document.querySelector(".nuevo-juego");
const btnCancel = document.querySelector(".cancelar");
const divDom = document.querySelector(".main-text");
const divWrongDom = document.querySelector(".wrong-words");

const catchWords = async () => {
  const fetchingData = await fetch("https://palabras-aleatorias-public-api.herokuapp.com/random");
  const toJSONdata = await fetchingData.json();
  riddleWord = toJSONdata.body.Word;
  newWord(riddleWord);
  randomWord.push(riddleWord);
};

let riddleWord;
let randomWord = [];
let randomWordUpper;
let repeatLetter = [];
let selectWord;
let wordPrint;

let correct = 0;
let incorrect = 0;

const screen = document.querySelector("canvas");
const brush = screen.getContext("2d");

const paint = () => {
  brush.strokeStyle = "#000000";
  brush.lineWidth = 1;
  brush.beginPath();
  brush.moveTo(30, 110);
  brush.lineTo(200, 110);
  brush.closePath();
  brush.stroke();

  if (incorrect === 1) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 1;
    brush.beginPath;
    brush.moveTo(45, 110);
    brush.lineTo(45, 5);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 2) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 1;
    brush.beginPath();
    brush.moveTo(45, 5);
    brush.lineTo(130, 5);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 3) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 1;
    brush.beginPath();
    brush.moveTo(130, 5);
    brush.lineTo(130, 20);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 4) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 1;
    brush.beginPath();
    brush.arc(130, 30, 10, 0, 2 * Math.PI);
    brush.stroke();
  } else if (incorrect === 5) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 1;
    brush.beginPath();
    brush.moveTo(130, 40);
    brush.lineTo(130, 80);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 6) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 1;
    brush.beginPath();
    brush.moveTo(130, 80);
    brush.lineTo(120, 100);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 7) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 1;
    brush.beginPath();
    brush.moveTo(130, 80);
    brush.lineTo(140, 100);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 8) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 1;
    brush.beginPath();
    brush.moveTo(130, 50);
    brush.lineTo(150, 70);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 9) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 1;
    brush.beginPath();
    brush.moveTo(130, 50);
    brush.lineTo(110, 70);
    brush.closePath();
    brush.stroke();
  }
};

const showAlert = () => {
  Swal.fire({
    title: "<strong>¿Cómo se juega?</strong>",
    // icon: "info",
    html: `Adivina la palabra secreta. 
  Tienes 9 intentos`,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: "Thumbs down",
  });
};

// Function Start Game

function startGame() {
  catchWords();
  paint();
  btnStart.classList.add("disabled");
  btnCancel.classList.add("cancel-class");

  repeatLetter = [];
  correct = 0;
  incorrect = 0;
  divDom.innerHTML = "";

  brush.clearRect(0, 0, screen.width, screen.height);

  // Add event listener on keypress
  document.addEventListener("keypress", keyPress);
}

const newWord = (randomWord) => {
  randomWordUpper = randomWord.toUpperCase();
  selectWord = randomWordUpper.split("");
  printLetter(randomWordUpper);
};

const printLetter = (word) => {
  for (let i = 0; i < word.length; i++) {
    let div = document.createElement("div");
    wordPrint = document.createElement("p");
    wordPrint.className = "hide-word";
    wordPrint.textContent = word[i];
    div.appendChild(wordPrint);
    divDom.appendChild(div);
  }
};

const keyPress = (event) => {
  let letterPress = event.key.toUpperCase();
  if (repeatLetter.includes(letterPress)) {
    Swal.fire("Letra ya ingresada. Intentelo con otra");
  } else if (letterPress.match(/^[a-zñ]$/i) && randomWordUpper.includes(letterPress)) {
    correctletter(letterPress);
    repeatLetter.push(letterPress);
  } else {
    wrongWord(letterPress);
    repeatLetter.push(letterPress);
  }
  if (event.keyCode == 13 || event.keyCode == 2) {
    event.preventDefault();
  }
};

const correctletter = (letter) => {
  const divDomP = document.querySelectorAll(".main-text > div > p");
  for (let i = 0; i < divDomP.length; i++) {
    if (divDomP[i].innerHTML === letter) {
      divDomP[i].classList.add("show-word");
      correct++;
    }
  }
  if (correct === selectWord.length) {
    Swal.fire({
      text: `Excelente, la palabra era ${riddleWord}`,
      color: "#006666",
    });

    endGame();
  }
};

const wrongWord = (letter) => {
  let div = document.createElement("div");
  wordPrint = document.createElement("p");
  wordPrint.textContent = letter;
  div.appendChild(wordPrint);
  divWrongDom.appendChild(div);
  incorrect++;
  paint();

  if (incorrect === 9) {
    Swal.fire({
      text: `Has perdido, la palabra era ${riddleWord}`,
      color: "#ff0000",
    });

    endGame();
  }
};

const endGame = () => {
  document.removeEventListener("keypress", keyPress);
  btnStart.classList.remove("disabled");
  btnCancel.classList.remove("cancel-class");
  divDom.innerHTML = "";
  divWrongDom.innerHTML = "";
};

window.onload = showAlert();
btnStart.addEventListener("click", startGame);
btnCancel.addEventListener("click", endGame);
