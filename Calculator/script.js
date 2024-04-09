const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');
let calculation;


buttons.forEach(button => {
    button.addEventListener('click', clickButton);
});


function clickButton(event){
    let clickedbutton = event.target.textContent;
    input.value += clickedbutton;
    clearDisplay(event);
    calculate(event);

}

function clearDisplay(button){
    if(button.target.textContent == 'C'){
        input.value = '';
    }
}


function calculate(button){
    if(button.target.textContent == '='){
        for(let i = 0; i < input.value.length; i++){
            calculation += parseInt(input.value[i]);
            console.log(calculation);
        }
    }
}