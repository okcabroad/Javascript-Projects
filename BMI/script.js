heightInput = document.querySelector('#height');
weightInput = document.querySelector('#weight');
bmiButton = document.querySelector('.bmiButton');
bmiDisplay = document.querySelector('.bmiDisplay');

bmiButton.addEventListener('click', calculateBMI);

function calculateBMI(){

    const height = parseInt(heightInput.value) / 100;
    const weight = parseInt(weightInput.value);

    const BMI = weight / (height * height);

    bmiDisplay.textContent = `BMI: ${BMI.toFixed(1)}`;

}