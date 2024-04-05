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
const nextContainer = document.querySelector('.nextContainer');

const startButton = document.querySelector('.startButton'); 
const nextQuestion = document.querySelector('.nextQuestion');
const reset = document.querySelector('.reset');

// Let variables
let thisTurnNumber;
let score = 0;
let turns = 0;

//Event Listeners + initialization
nextQuestion.classList.add('hide');
reset.classList.add('hide');

startButton.addEventListener('click', startGame, );
answersContainer.addEventListener('click', checkOption);
nextQuestion.addEventListener('click', generateNextQuestion);
reset.addEventListener('click', resetScore);

//Functions

function generateRandomNumber(){
    randomNumber = Math.floor(Math.random() * quizQuestions.length); //generates a number between 0 - quiz array length
    return randomNumber;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateScrambleOptions(){
    let thisTurnOptions = [];
    let HTMLOptions = ``;
    const ABCD = ['A', 'B', 'C', 'D'];
    thisTurnOptions.push(
        quizQuestions[thisTurnNumber].correctAnswer,
        quizQuestions[thisTurnNumber].wrongAnswer[0],
        quizQuestions[thisTurnNumber].wrongAnswer[1],
        quizQuestions[thisTurnNumber].wrongAnswer[2]
        );

    shuffledOptions = shuffle(thisTurnOptions)

    for(let i = 0; i < 4; i++){
        HTMLOptions += `<p class="options option${ABCD[i]}"> ${ABCD[i]}. ${shuffledOptions[i]}</p>`;
    }

    return HTMLOptions;
}

function startGame(){
    turns += 1;
    nextQuestion.classList.remove('hide');
    reset.classList.remove('hide');   

    thisTurnNumber = generateRandomNumber()
    question.textContent = quizQuestions[thisTurnNumber].question;

    options.remove();
    optionsContainer.innerHTML = generateScrambleOptions()


    startButton.remove()
    answersContainer.innerHTML = `
        <button class="button optionA"> A. </button>
        <button class="button optionB"> B. </button>
        <button class="button optionC"> C. </button>
        <button class="button optionD"> D. </button>
    `

}

function checkOption(event){
    const button = event.target;
    const buttonText = event.target.textContent
    let targetElementText;

    const childrenElements = optionsContainer.children;
    for(let i = 0; i < childrenElements.length; i++){
        if(childrenElements[i].textContent.includes(buttonText)){
            targetElementText = childrenElements[i].textContent
            targetElementText = targetElementText.replace(/[A-D]\.\s*/g, '');
            
        }
    }

    if(targetElementText.includes(quizQuestions[thisTurnNumber].correctAnswer)){
        score += 1;
        button.classList.add("correct");
    
    } 
    else{
        button.classList.add("false");
    }
    
}


function generateNextQuestion(){
    turns += 1;
    if(turns >= 5){
        displayScore();
        return;
    }
    
    //add a new question
    thisTurnNumber = generateRandomNumber()
    question.textContent = quizQuestions[thisTurnNumber].question;

    //remove current options and add new ones
    while(optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
    optionsContainer.innerHTML = generateScrambleOptions()
    
    //
    removeClassesFromChildren(answersContainer, 'correct');
    removeClassesFromChildren(answersContainer, 'false');
    
}

function removeClassesFromChildren(parentElement, className) {
    const children = parentElement.children;
    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(className);
    }
}

function resetScore(){
    score = 0;
    turns = 0;
    generateNextQuestion();
}


function displayScore(){
    console.log('final score');
    question.textContent = `Your Final Score is: ${score}/${turns}`;

    //remove options
    while(optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
    //remove buttons
    while(answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild);
    }

}