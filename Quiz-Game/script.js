//Quiz questions array of objects
// console.log(quizQuestions[5].wrongAnswer[1]);
const quizQuestions = [
    {   questionNumber: 1,
        question: "What country has the highest life expectancy?",
        correctAnswer: ['Hong Kong'],
        wrongAnswer: ['Iran', 'South Korea', 'Germany']
    },
    {   questionNumber: 2,
        question: "Where would you be if you were standing on the Spanish Steps? ",
        correctAnswer: ['Rome'],
        wrongAnswer: ['Milan', 'Barcelona', 'Lyon']
    },
    {   questionNumber: 3,
        question: "What is the most common surname in the United States?",
        correctAnswer: ['Smith'],
        wrongAnswer: ['Clarke', 'Williams', 'Johnson']
    },
    {   questionNumber: 4,
        question: "How many elements are in the periodic table?",
        correctAnswer: ['118'],
        wrongAnswer: ['120', '112', '110']
    },
    {   questionNumber: 5,
        question: "Which planet has the most moons?",
        correctAnswer: ['Saturn'],
        wrongAnswer: ['Jupiter', 'Neptune', 'Uranus']
    },
    {   questionNumber: 6,
        question: "How many Stars on the Chinese Flag?",
        correctAnswer: ['5'],
        wrongAnswer: ['7', '6', '9']
    },
]


//DOM variables
const questionContainer = document.querySelector('.questionContainer');
const question = document.querySelector('.question');
const optionsContainer = document.querySelector('.optionsContainer');
const options = document.querySelector('.options')
const answersContainer = document.querySelector('.answersContainer');

const startButton = document.querySelector('.startButton'); 
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');

let questionCompleted =[];

//Event Listeners
startButton.addEventListener('click', startGame);



//Functions

function generateRandomNumber(){
    randomNumber = Math.floor(Math.random() * quizQuestions.length); //generates a number between 0 - quiz array length
    return randomNumber;
}



function startGame(){
    const thisTurnNumber = generateRandomNumber()
    question.textContent = quizQuestions[thisTurnNumber].question;

    options.remove();
    optionsContainer.innerHTML = `
        <p class="options">${quizQuestions[thisTurnNumber].correctAnswer}</p>
        <p class="options">${quizQuestions[thisTurnNumber].wrongAnswer[0]}</p>
        <p class="options">${quizQuestions[thisTurnNumber].wrongAnswer[1]}</p>
        <p class="options">${quizQuestions[thisTurnNumber].wrongAnswer[2]}</p>
    `
}


