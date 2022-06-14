const btnStart = document.querySelector(".nuevo-juego");
const btnCancel = document.querySelector(".cancelar");
const divDom = document.querySelector(".main-text");
const divWrongDom = document.querySelector(".wrong-words");

let words = [
  "hola",
  "calor",
  "verdura",
  "fiesta",
  "amor",
  "relato",
  "ayer",
  "francia",
  "largo",
  "locro",
  "lechga",
  "diario",
  "mandarina",
  "bruno",
  "emma",
];
let randomWord = [];
let repeatLetter = [];

let wordPrint;
let correct = 0;
let incorrect = 0;

let screen = document.querySelector("canvas");
let brush = screen.getContext("2d");

const paint = () => {
  brush.strokeStyle = "#000000";
  brush.lineWidth = 2;
  brush.beginPath();
  brush.moveTo(30, 110);
  brush.lineTo(200, 110);
  brush.closePath();
  brush.stroke();
  // brush.fillText("Hello World", 100, 50);

  if (incorrect === 1) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath;
    brush.moveTo(45, 110);
    brush.lineTo(45, 5);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 2) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.moveTo(45, 5);
    brush.lineTo(130, 5);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 3) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.moveTo(130, 5);
    brush.lineTo(130, 20);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 4) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.arc(130, 30, 10, 0, 2 * Math.PI);
    brush.stroke();
  } else if (incorrect === 5) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.moveTo(130, 40);
    brush.lineTo(130, 80);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 6) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.moveTo(130, 80);
    brush.lineTo(120, 100);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 7) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.moveTo(130, 80);
    brush.lineTo(140, 100);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 8) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.moveTo(130, 50);
    brush.lineTo(150, 70);
    brush.closePath();
    brush.stroke();
  } else if (incorrect === 9) {
    brush.strokeStyle = "#000000";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.moveTo(130, 50);
    brush.lineTo(110, 70);
    brush.closePath();
    brush.stroke();
  }
};

// Function Start Game

function startGame() {
  btnStart.classList.add("disabled");
  btnCancel.classList.add("cancel-class");

  repeatLetter = [];
  correct = 0;
  incorrect = 0;
  divDom.innerHTML = "";

  // usedLettersElement.innerHTML = "";

  randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
  selectWord = randomWord.split("");

  for (let i = 0; i < randomWord.length; i++) {
    let div = document.createElement("div");
    wordPrint = document.createElement("p");
    wordPrint.className = "hide-word";
    wordPrint.textContent = randomWord[i];
    div.appendChild(wordPrint);
    divDom.appendChild(div);
  }
  brush.clearRect(0, 0, screen.width, screen.height);

  // Add event listener on keypress
  document.addEventListener("keypress", keyPress);
  paint();
}

const keyPress = (event) => {
  let letterPress = event.key.toUpperCase();
  if (repeatLetter.includes(letterPress)) {
    alert("Letra ya ingresada. Intentelo con otra");
  } else if (letterPress.match(/^[a-zñ]$/i) && randomWord.includes(letterPress)) {
    correctletter(letterPress);
    repeatLetter.push(letterPress);
  } else {
    wrongWord(letterPress);
    repeatLetter.push(letterPress);
  }
  if (event.keyCode == 13) {
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
    brush.clearRect(0, 0, screen.width, screen.height);
    brush.font = "bold 28px serif";
    brush.fillStyle = "#559999";
    brush.fillText("Ha ganado!", 50, 100);

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
    brush.clearRect(0, 0, screen.width, screen.height);
    brush.font = "bold 18px serif";
    brush.fillStyle = "#ff0000";
    brush.fillText(`Ha perdido. Era ${randomWord}`, 50, 50);
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

btnStart.addEventListener("click", startGame);
btnCancel.addEventListener("click", endGame);
