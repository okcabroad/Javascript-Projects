const section = document.querySelector('.section');
const textContainer = document.querySelector('.textContainer');
const button = document.querySelector('.button');

button.addEventListener('click', changeColor)

function randomRGBColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    const rgbColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

    return rgbColor;
}

function changeColor(){
    const newDiv = document.createElement('div');
    const rgbColor = randomRGBColor();
    newDiv.innerText = `Background Color:  ${randomRGBColor()}`;
    newDiv.classList.add('mainText');
    button.previousElementSibling.remove();
    button.insertAdjacentElement('beforebegin', newDiv);

    section.style.backgroundColor = rgbColor;
}

console.log(section.style)