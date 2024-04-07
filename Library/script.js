//Dom Elements
const addBook =document.querySelector('.addBook');
const bottomSection = document.querySelector('.bottomSection');
const inputSection = document.querySelector('.inputSection');
addBook.addEventListener('click', addBookFunction)

//Book let variables
let title = '';
let author = '';
let pageNumber = '';
let read = false;



//function
function addBookFunction(){
    hide(bottomSection);
    inputSection.innerHTML = `
    <form class="inputForm">
        <label for="bookTitleInput ">Title:</label>
        <input type="text" class="bookTitleInput">

        <label for="bookAuthorInput">Author:</label>
        <input type="text" class="bookAuthorInput">

        <label for="bookPageNumberInput">Page Number:</label>
        <input type="text" class="bookPageNumberInput">

        <label for="checkboxInput">Read:</label>
        <input type="checkbox" class="checkboxInput">

        <button type="button" class="submitBook">Submit</button>
    </form>
    `
    const submitBook = document.querySelector('.submitBook');
    submitBook.addEventListener('click', submitForm);
}

function hide(element){
    element.classList.add('hide');
}

function submitForm(){
    console.log('submit Book');
}