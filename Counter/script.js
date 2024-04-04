//dom elements
const counter = document.querySelector('.counter');
const number = document.querySelector('.number');

const decreaseButton = document.querySelector('#decreaseButton');
const resetButton = document.querySelector('#resetButton');
const increaseButton = document.querySelector('#increaseButton');

const minus10Button = document.querySelector('#minus10Button');
const squaredButton = document.querySelector('#squaredButton');
const plus10Button = document.querySelector('#plus10Button');

let displayNumber = 0;


//button event listeners
increaseButton.addEventListener('click', increaseNumber);
decreaseButton.addEventListener('click', decreaseNumber);
resetButton.addEventListener('click', resetNumber);

minus10Button.addEventListener('click', minus10);
plus10Button.addEventListener('click', plus10);
squaredButton.addEventListener('click', squared);



//functions
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

function plus10(){
    number.textContent = '';
    number.textContent += `${displayNumber += 10}`;
}

function minus10(){
    number.textContent = '';
    number.textContent += `${displayNumber -= 10}`;
}

function squared(){
    number.textContent = '';
    number.textContent += `${displayNumber * displayNumber}`;
}
