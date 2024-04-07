//Dom Elements
const addBook =document.querySelector('.addBook');
const bottomSection = document.querySelector('.bottomSection');
const inputSection = document.querySelector('.inputSection');

addBook.addEventListener('click', addBookFunction);


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

function removeHide(element){
    element.classList.remove('hide');
}

function submitForm(){
    title = document.querySelector('.bookTitleInput').value;
    author = document.querySelector('.bookAuthorInput').value;
    pageNumber = document.querySelector('.bookPageNumberInput').value;
    read = document.querySelector('.checkboxInput').checked;

    inputSection.innerHTML = '';
    removeHide(bottomSection);

    bottomSection.innerHTML += `
    <div class="card">
        <div class="bookContainer">
            <div class="bookText">
                <p class="bookTitle"><i>${title}</i></p>
                <p class="bookAuthor">${author}</p>
                <p class="bookPageNumber">${pageNumber}</p>
                <div class="readContainer">
                    <input type="checkbox" class="checkbox" ${read ? 'checked' : ''}>
                    <label for="checkbox">Read</label>
                    <button class="removeBook">Remove</button>
                </div>
            </div>
        </div>
    </div>

    `
    const removeButtons = document.querySelectorAll('.removeBook');
    removeButtons.forEach(removeButton => {
        removeButton.addEventListener('click', removeBookFunction);
    })
}

function removeBookFunction(event) {
    const card = event.target.closest('.card');
    card.remove();
}
