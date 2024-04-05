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



// Let variables
let thisTurnNumber;
let score = 0;

//Event Listeners
startButton.addEventListener('click', startGame, );
answersContainer.addEventListener('click', checkOption);


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

function startGame(){
    thisTurnNumber = generateRandomNumber()
    question.textContent = quizQuestions[thisTurnNumber].question;

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
        console.log('correct answer');
        score += 1;
        alert('correct!');
    
    } 
    else{
        console.log('wrong answer');
    }
    
}