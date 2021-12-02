let btnPlay = document.getElementById('btn-play');
let selectForm = document.getElementById('difficulty-selection');
let gridContainer = document.querySelector('.grid-container');
let arrayNumbers = [];
let arrayBombs = [];
function randomNumberFrom (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
// console.log(btnPlay);
// console.log(selectForm.value);


btnPlay.addEventListener('click', function () {
    if (selectForm.value == 0) {
        // console.log(selectForm.value);
        // alert('Funziona il livello Easy');
        gridContainer.classList.add('size-difficulty-0');
        for (let i = 0; i < 100; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            let number = randomNumberFrom(1, 101);
            while (arrayNumbers.includes(number)) {
                number = randomNumberFrom(1, 101);
            }
            arrayNumbers.push(number);
            square.append(number);
            gridContainer.append(square);
            square.addEventListener('click', function () {
                if (!(arrayBombs.includes(number))) {
                    square.classList.add('clicked');
                    // console.log('Funziona');
                } else if ((arrayBombs.includes(number))) {
                    square.classList.add('explode')
                }
            });
        }
        for (let i = 0; i < 16; i++) {
            let bomb = randomNumberFrom(1, 101);
            while (arrayBombs.includes(bomb)) {
                bomb = randomNumberFrom(1, 101);
            }
            arrayBombs.push(bomb);
            console.log(bomb);
        }

    } else if (selectForm.value == 1) {
        // console.log(selectForm.value);
        // alert('Funziona il livello Medium');
        gridContainer.classList.add('size-difficulty-1');
        for (let i = 0; i < 81; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            let number = randomNumberFrom(1, 82);
            while (arrayNumbers.includes(number)) {
                number = randomNumberFrom(1, 82);
            }
            arrayNumbers.push(number);
            square.append(number);
            gridContainer.append(square);
            square.addEventListener('click', function () {
                if (!(arrayBombs.includes(number))) {
                    square.classList.add('clicked');
                    // console.log('Funziona');
                } else if ((arrayBombs.includes(number))) {
                    square.classList.add('explode')
                }
            });
        }
        for (let i = 0; i < 16; i++) {
            let bomb = randomNumberFrom(1, 82);
            while (arrayBombs.includes(bomb)) {
                bomb = randomNumberFrom(1, 82);
            }
            arrayBombs.push(bomb);
            console.log(bomb);
        }


    } else if (selectForm.value == 2) {
        // console.log(selectForm.value);
        // alert('Funziona il livello Hard');
        gridContainer.classList.add('size-difficulty-2');
        for (let i = 0; i < 49; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            let number = randomNumberFrom(1, 50);
            while (arrayNumbers.includes(number)) {
                number = randomNumberFrom(1, 50);
            }
            arrayNumbers.push(number);
            square.append(number);
            gridContainer.append(square);
            square.addEventListener('click', function () {
                if (!(arrayBombs.includes(number))) {
                    square.classList.add('clicked');
                    // console.log('Funziona');
                } else if ((arrayBombs.includes(number))) {
                    square.classList.add('explode')
                }
            });
        }
        for (let i = 0; i < 16; i++) {
            let bomb = randomNumberFrom(1, 50);
            while (arrayBombs.includes(bomb)) {
                bomb = randomNumberFrom(1, 50);
            }
            arrayBombs.push(bomb);
            console.log(bomb);
        }


    }
})