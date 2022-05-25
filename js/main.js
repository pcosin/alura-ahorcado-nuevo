const btnStart = document.querySelector('.nuevo-juego');
const divDom = document.querySelector('.main-text');
const divWrongDom = document.querySelector('.wrong-words');

let screen = document.querySelector('canvas');
let brush = screen.getContext('2d');

const paint = () => {
    brush.fillStyle = "black";
    brush.fillRect(0,0,600,400)
}

paint()


let words = ["hola", "calor", "verdura", "fiesta", "amor", "relato"];
let randomWord = []
let wordPrint
let correct = 0;
let incorrect = 0;

// Function Start Game

function startGame() {
    randomWord = words[Math.floor(Math.random()*words.length)].toUpperCase();
    selectWord = randomWord.split('')

    console.log(selectWord)

    for (let i = 0; i < randomWord.length; i ++) {
        let div = document.createElement('div');
        wordPrint = document.createElement('p');
        wordPrint.className = 'hide-word'
        wordPrint.textContent = randomWord[i]
        div.appendChild(wordPrint);
        divDom.appendChild(div);
    }

}

const keyPress = event => {
    let letterPress = event.key.toUpperCase();
   
    if(letterPress.match(/^[a-zñ]$/i) && randomWord.includes(letterPress)) {  
        correctletter(letterPress)
    }
    else {
        wrongWord(letterPress) 

    }
}

const correctletter = letter => {
    const divDomP = document.querySelectorAll('.main-text > div > p')
    for(let i = 0; i < divDomP.length; i++) {
        if(divDomP[i].innerHTML === letter) {
            divDomP[i].classList.add('show-word');
            correct++;
            console.log(correct)
        }

    }

    if (correct === selectWord.length) {
        console.log("ha ganado")
    }
    
    };


const wrongWord = letter => {
    let div = document.createElement('div');
        wordPrint = document.createElement('p');
        wordPrint.textContent = letter
        div.appendChild(wordPrint);
        divWrongDom.appendChild(div);
 

}



btnStart.addEventListener('click', startGame)

// Add event listener on keypress
document.addEventListener('keypress', keyPress)

    
  
