const form = document.getElementById('form');
const addItemButton = document.getElementById('addItemButton');
const deleteButton = document.getElementById('deleteButton');
const clearButton = document.getElementById('clearButton');

addItemButton.addEventListener('click', addItem);
deleteButton.addEventListener('click', deleteItem);
clearButton.addEventListener('click', clearCheck);

function addItem(){
    form.innerHTML += `
    <div class="inputContainer">
        <input type="checkbox" class="checkBox">
        <input type="text" class="formInput" placeholder="Enter to do here...">
    </div>
    `
}

function deleteItem(){
    const checkBoxes = document.querySelectorAll('.checkBox');
    checkBoxes.forEach(checkbox => {
        if(checkbox.checked){
            checkbox.parentElement.remove();
        }
    });
}

function clearCheck(){
    const checkBoxes = document.querySelectorAll('.checkBox');
    checkBoxes.forEach(checkbox => {
        if(checkbox.checked){
            checkbox.checked = false;
        }
    })

}