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
    {
        questionNumber: 7,
        question: "What was the name of the crime boss who was head of the feared Chicago Outfit?",
        correctAnswer: ['Al Capone'],
        wrongAnswer: ['John Gotti', 'Pablo Escobar', 'Vito Genovese']
    },
    {
        questionNumber: 8,
        question: "What year was the United Nations established?",
        correctAnswer: ['1945'],
        wrongAnswer: ['1919', '1939', '1955']
    },
    {
        questionNumber: 9,
        question: "Who has won the most total Academy Awards?",
        correctAnswer: ['Walt Disney'],
        wrongAnswer: ['Steven Spielberg', 'Martin Scorsese', 'Alfred Hitchcock']
    },
    {
        questionNumber: 10,
        question: "What artist has the most streams on Spotify?",
        correctAnswer: ['Drake'],
        wrongAnswer: ['Ed Sheeran', 'Ariana Grande', 'Justin Bieber']
    },
    {
        questionNumber: 11,
        question: "How many minutes are in a full week?",
        correctAnswer: ['10,080'],
        wrongAnswer: ['8,640', '11,760', '12,960']
    },
    {
        questionNumber: 12,
        question: "What car manufacturer had the highest revenue in 2020?",
        correctAnswer: ['Volkswagen'],
        wrongAnswer: ['Toyota', 'General Motors', 'Ford']
    },
    {
        questionNumber: 13,
        question: "What company was originally called 'Cadabra'?",
        correctAnswer: ['Amazon'],
        wrongAnswer: ['eBay', 'Alibaba', 'Google']
    },
    {
        questionNumber: 14,
        question: "How many faces does a Dodecahedron have?",
        correctAnswer: ['12'],
        wrongAnswer: ['8', '10', '14']
    },
    {
        questionNumber: 15,
        question: "Queen guitarist Brian May is also an expert in what scientific field?",
        correctAnswer: ['Astrophysics'],
        wrongAnswer: ['Biology', 'Chemistry', 'Geology']
    },
    {
        questionNumber: 16,
        question: "Aureolin is a shade of what color?",
        correctAnswer: ['Yellow'],
        wrongAnswer: ['Blue', 'Green', 'Red']
    },
    {
        questionNumber: 17,
        question: "How many ghosts chase Pac-Man at the start of each game?",
        correctAnswer: ['4'],
        wrongAnswer: ['3', '5', '6']
    },
    {
        questionNumber: 18,
        question: "What Renaissance artist is buried in Rome's Pantheon?",
        correctAnswer: ['Raphael'],
        wrongAnswer: ['Leonardo da Vinci', 'Michelangelo', 'Donatello']
    },
    {
        questionNumber: 19,
        question: "What shoe brand makes the 'Mexico 66'?",
        correctAnswer: ['Onitsuka Tiger'],
        wrongAnswer: ['Nike', 'Adidas', 'Puma']
    },
    {
        questionNumber: 20,
        question: "What game studio makes the Red Dead Redemption series?",
        correctAnswer: ['Rockstar Games'],
        wrongAnswer: ['Ubisoft', 'Electronic Arts', 'Activision']
    },
    {
        questionNumber: 21,
        question: "Who was the last Tsar of Russia?",
        correctAnswer: ['Nicholas II'],
        wrongAnswer: ['Peter the Great', 'Ivan the Terrible', 'Catherine the Great']
    },
    {
        questionNumber: 22,
        question: "What character have both Robert Downey Jr. and Benedict Cumberbatch played?",
        correctAnswer: ['Sherlock Holmes'],
        wrongAnswer: ['James Bond', 'Batman', 'Harry Potter']
    },
    {
        questionNumber: 23,
        question: "What country drinks the most coffee per capita?",
        correctAnswer: ['Finland'],
        wrongAnswer: ['Italy', 'Brazil', 'United States']
    },
    {
        questionNumber: 24,
        question: "Which planet in the Milky Way is the hottest?",
        correctAnswer: ['Venus'],
        wrongAnswer: ['Mercury', 'Jupiter', 'Mars']
    },
    {
        questionNumber: 25,
        question: "What is the 4th letter of the Greek alphabet?",
        correctAnswer: ['Delta'],
        wrongAnswer: ['Alpha', 'Beta', 'Gamma']
    },
    {
        questionNumber: 26,
        question: "What sports car company manufactures the 911?",
        correctAnswer: ['Porsche'],
        wrongAnswer: ['Ferrari', 'Lamborghini', 'Bugatti']
    },
    {
        questionNumber: 27,
        question: "What city is known as 'The Eternal City'?",
        correctAnswer: ['Rome'],
        wrongAnswer: ['Athens', 'Jerusalem', 'Paris']
    },
    {
        questionNumber: 28,
        question: "Roald Amundsen was the first man to reach the South Pole, but where was he from?",
        correctAnswer: ['Norway'],
        wrongAnswer: ['Sweden', 'Denmark', 'Finland']
    },
        {
            questionNumber: 29,
            question: "What is the highest-rated film on IMDb as of January 1st, 2022?",
            correctAnswer: ['The Shawshank Redemption'],
            wrongAnswer: ['The Godfather', 'Pulp Fiction', 'The Dark Knight']
        },
        {
            questionNumber: 30,
            question: "Who discovered that the Earth revolves around the sun?",
            correctAnswer: ['Nicolaus Copernicus'],
            wrongAnswer: ['Galileo Galilei', 'Isaac Newton', 'Johannes Kepler']
        },
        {
            questionNumber: 31,
            question: "What company was initially known as 'Blue Ribbon Sports'?",
            correctAnswer: ['Nike'],
            wrongAnswer: ['Adidas', 'Puma', 'Under Armour']
        },
        {
            questionNumber: 32,
            question: "What art form is described as 'decorative handwriting or handwritten lettering'?",
            correctAnswer: ['Calligraphy'],
            wrongAnswer: ['Graffiti', 'Typography', 'Sculpture']
        },
        {
            questionNumber: 33,
            question: "What country has won the most World Cups?",
            correctAnswer: ['Brazil'],
            wrongAnswer: ['Germany', 'Italy', 'Argentina']
        },
        {
            questionNumber: 34,
            question: "Complete the following lyrics - 'I should have changed that stupid lock.....'",
            correctAnswer: ['I should have made you leave your key'],
            wrongAnswer: ['I should have kicked you out that day', 'I should have called the cops', 'I should have changed the code']
        },
        {
            questionNumber: 35,
            question: "What is a group of pandas known as?",
            correctAnswer: ['An embarrassment'],
            wrongAnswer: ['A pack', 'A flock', 'A herd']
        },
        {
            questionNumber: 36,
            question: "What European country experienced the highest rate of population decline from 2015 - 2020?",
            correctAnswer: ['Lithuania'],
            wrongAnswer: ['Germany', 'Italy', 'Greece']
        },
        {
            questionNumber: 37,
            question: "How many bones do we have in an ear?",
            correctAnswer: ['3'],
            wrongAnswer: ['2', '4', '5']
        },
        {
            questionNumber: 38,
            question: "Who famously crossed the Alps with elephants on the way to war with the Romans?",
            correctAnswer: ['Hannibal'],
            wrongAnswer: ['Julius Caesar', 'Alexander the Great', 'Attila the Hun']
        },
        {
            questionNumber: 39,
            question: "True or False: Halloween originated as an ancient Irish festival.",
            correctAnswer: ['True'],
            wrongAnswer: ['False']
        },
        {
            questionNumber: 40,
            question: "What Netflix show had the most streaming views in 2021?",
            correctAnswer: ['Squid Game'],
            wrongAnswer: ['The Crown', 'Stranger Things', 'Money Heist']
        },
        {
            questionNumber: 41,
            question: "Which Grammy-nominated New York rapper died in April of 2021?",
            correctAnswer: ['DMX'],
            wrongAnswer: ['Nipsey Hussle', 'Juice WRLD', 'Mac Miller']
        },
        {
            questionNumber: 42,
            question: "What software company is headquartered in Redmond, Washington?",
            correctAnswer: ['Microsoft'],
            wrongAnswer: ['Apple', 'Google', 'Facebook']
        }
];


//DOM variables
const container = document.querySelector('.container');
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

    if(score >= 3){
        const img = document.createElement('img');
        img.src = 'smile.jpg';
        img.classList.add('img');
        optionsContainer.appendChild(img);
    }
    else {
        const img = document.createElement('img');
        img.src = 'sad.jpg';
        img.classList.add('img');
        optionsContainer.appendChild(img);
    }

    nextQuestion.classList.add('hide');
    reset.classList.add('hide');

    // container.classList.remove('container');
    optionsContainer.classList.remove('optionsContainer');

    generatePlayAgain();
}

function generatePlayAgain(){
    score = 0;
    turns = 0;
    optionsContainer.classList.add('optionsContainer');
    const playAgain = document.createElement('button');
    playAgain.textContent = 'Play Again?';
    playAgain.classList.add('playAgain');
    playAgain.classList.add('button');
    answersContainer.appendChild(playAgain);
    const playAgainButton = document.querySelector('.playAgain');
    playAgainButton.addEventListener('click', startGame);
}