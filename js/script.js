let btnPlay = document.getElementById('btn-play');
let selectForm = document.getElementById('difficulty-selection');
let gridContainer = document.querySelector('.grid-container');
let arrayNumbers = [];
let arrayBombs = [];
let numbersGuessed = [];
function randomNumberFrom (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function generateBombNumbers(min, max) {
    for (let i = 0; i < 16; i++) {
        let bomb = randomNumberFrom(min, max);
        while (arrayBombs.includes(bomb)) {
            bomb = randomNumberFrom(min, max);
        }
        arrayBombs.push(bomb);
        console.log(bomb);
    }
}
function willIExplode (square, number) {
    square.addEventListener('click', function () {
        if (!(arrayBombs.includes(number))) {
            square.classList.add('clicked');
            numbersGuessed.push(number);
        } else if ((arrayBombs.includes(number))) {
            square.classList.add('explode');
            unCLickable();
            alert('Hai perso, il tuo ounteggio è: ' + numbersGuessed.length);
        }
    });
}
function generateSquaresWithNumbers (min, max) {
    for (let i = 0; i < (max-min); i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        let number = randomNumberFrom(min, max);
        while (arrayNumbers.includes(number)) {
            number = randomNumberFrom(min, max);
        }
        arrayNumbers.push(number);
        square.append(number);
        gridContainer.append(square);
        willIExplode(square, number);
    }
}
function unCLickable() {
    let divWithSquare = document.getElementsByClassName("square");
    for (let i = 0; i < divWithSquare.length; i++) {
        divWithSquare[i].style.pointerEvents = "none";
    }
  }
btnPlay.addEventListener('click', function () {
    if (selectForm.value == 0) {
        gridContainer.classList.add('size-difficulty-0');
        generateSquaresWithNumbers(1, 101);
        generateBombNumbers(1, 101);

    } else if (selectForm.value == 1) {
        gridContainer.classList.add('size-difficulty-1');
        generateSquaresWithNumbers(1, 82);
        generateBombNumbers(1, 82);
    } else if (selectForm.value == 2) {
        gridContainer.classList.add('size-difficulty-2');
        generateSquaresWithNumbers(1, 50);
        generateBombNumbers(1, 50);
    }
})