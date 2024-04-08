//Dom variables
const gridCell = document.querySelectorAll('.grid-item');

//let
let circle = false;
let cross = true;
let currentSymbol = 


//Event Listeners
gridCell.forEach(cell => {
    cell.addEventListener('click', addSymbol)
})


function addSymbol(e){
    circle = !circle;
    cross = !circle;

    if(circle == true){
        e.target.textContent = "⭕";
    }
    else {
        e.target.textContent = "❌";
    }
    
}

