const counter = document.querySelector('.counter');
const number = document.querySelector('.number');
const decreaseButton = document.querySelector('#decreaseButton');
const resetButton = document.querySelector('#resetButton');
const increaseButton = document.querySelector('#increaseButton');

let displayNumber = 0;

increaseButton.addEventListener('click', increaseNumber);
decreaseButton.addEventListener('click', decreaseNumber);
resetButton.addEventListener('click', resetNumber);



function increaseNumber(){
    number.textContent = '';
    number.textContent += `${displayNumber += 1}`;
}

function decreaseNumber(){
    number.textContent = '';
    number.textContent += `${displayNumber -= 1}`;
}

function resetNumber(){
    number.textContent = '0';
}