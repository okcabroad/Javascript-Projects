const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');
const numbers = [1,2,3,4,5,6,7,8,9];
let calculation;
let currentNumber = [];
let previousNumber = [];
let operator = [];
let answer = null;

buttons.forEach(button => {
    button.addEventListener('click', clickButton);
});


function clickButton(event){
    let clickedbutton = event.target.textContent;
    input.value += clickedbutton;
    clearDisplay(event);
    
    if(/[0-9.]/.test(clickedbutton)){
        currentNumber += clickedbutton;
    }
    else if(/[+\-*\/]/.test(clickedbutton)){
        previousNumber = currentNumber;
        currentNumber = [];
        operator += clickedbutton;
    }
    else if(clickedbutton == '='){
        switch (operator){
            case '+':
                answer = Number(previousNumber) + Number(currentNumber);
                console.log(answer);
                currentNumber = answer;
                previousNumber = [];
                operator = [];
                break;
            case '-':
                answer = Number(previousNumber) - Number(currentNumber);
                console.log(answer);
                currentNumber = answer;
                previousNumber = [];
                operator = [];
                break;
            case '*':
                answer = Number(previousNumber) * Number(currentNumber);
                console.log(answer);
                currentNumber = answer;
                previousNumber = [];
                operator = [];
                break;
            case '/':
                answer = Number(previousNumber) / Number(currentNumber);
                console.log(answer);
                currentNumber = answer;
                previousNumber = [];
                operator = [];
                break;
            default:
                answer = 'Error';
                console.log(answer);
                currentNumber = [];
                previousNumber = [];
                operator = [];
                break;
        }   
        input.value = answer;

    }

    

}

function clearDisplay(button){
    if(button.target.textContent == 'C'){
        input.value = '';
        answer = null;
        currentNumber = [];
        previousNumber = [];
        operator = [];


    }
}

/* 
    Make calulator work with:
    - 2 > inputs 
    - Negative numbers






*/