const input = document.getElementById('input');
const submit = document.querySelector('.submit');
const removeButtons = document.querySelectorAll('.remove');
const clearItems = document.getElementById('clearItems');
const listContainer = document.querySelector('.listContainer');
const clearInput = document.querySelector('.clear');



submit.addEventListener('click', submitItem);
listContainer.addEventListener('click', removeItem);
clearInput.addEventListener('click', clearInputDisplay);
clearItems.addEventListener('click', clearItemsDisplay);

function submitItem(){
    let Item = input.value;
    listContainer.innerHTML += `
    <br>
    <div class="elementContainer">
      <div class="textElement">○ ${Item}</div>
        <div class="buttonsElement">
            <button class="remove buttons">Remove</button>
        </div>
    </div>
    `
}


function removeItem(event){
 if(event.target.classList.contains('remove')){
    event.target.parentElement.parentElement.remove();
 }
}

function clearInputDisplay(){
    input.value = '';
}

function clearItemsDisplay(){
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }
}