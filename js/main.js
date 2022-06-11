const btnStart = document.querySelector(".nuevo-juego");
const divDom = document.querySelector(".main-text");
const divWrongDom = document.querySelector(".wrong-words");

let words = ["hola", "calor", "verdura", "fiesta", "amor", "relato"];
let randomWord = [];
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

paint();

// Function Start Game

function startGame() {
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
}

const keyPress = (event) => {
  let letterPress = event.key.toUpperCase();

  if (letterPress.match(/^[a-zñ]$/i) && randomWord.includes(letterPress)) {
    correctletter(letterPress);
  } else {
    wrongWord(letterPress);
  }
};

const correctletter = (letter) => {
  const divDomP = document.querySelectorAll(".main-text > div > p");
  for (let i = 0; i < divDomP.length; i++) {
    if (divDomP[i].innerHTML === letter) {
      divDomP[i].classList.add("show-word");
      correct++;
      console.log(correct);
    }
  }
  if (correct === selectWord.length) {
    console.log("ha ganado");
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
    console.log("ha perdido");
    console.log(randomWord);
    endGame();
  }
};

const endGame = () => {
  document.removeEventListener("keypress", keyPress);
};

btnStart.addEventListener("click", startGame);

// Add event listener on keypress
document.addEventListener("keypress", keyPress);
