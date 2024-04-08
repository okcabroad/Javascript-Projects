//Dom variables
const gridCell = document.querySelectorAll('.grid-item');
const container = document.querySelector('.container');

const winConditions = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Left-to-right diagonal
    [2, 4, 6]  // Right-to-left diagonal
  ];

//let
let circle = false;
let cross = true;
let circleArray = [];
let crossArray = [];
let winner = '';


//Event Listeners
gridCell.forEach(cell => {
    cell.addEventListener('click', addSymbol, {once: true});
})


function addSymbol(e) {
    // Toggle between circle and cross
    circle = !circle;

    if (circle) {
        circleArray.push(parseInt(e.target.dataset.info));
        e.target.textContent = "⭕";
    } else {
        crossArray.push(parseInt(e.target.dataset.info));
        e.target.textContent = "❌";
    }

    // Check for winner
    if (checkWin()) {
        displayWinner();
        // Disable further clicks on the grid
        gridCell.forEach(cell => {
            cell.removeEventListener('click', addSymbol);
        });
    }
}

function checkWin() {
    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        let allInCircle = true;
        let allInCross = true;

        // Check if all cells in the win condition are clicked by the player
        for (let j = 0; j < condition.length; j++) {
            if (!circleArray.includes(condition[j])) {
                allInCircle = false;
            }
            if (!crossArray.includes(condition[j])) {
                allInCross = false;
            }
        }

        if (allInCircle) {
            winner = "⭕";
            return true;
        } else if (allInCross) {
            winner = "❌";
            return true;
        }
    }
    return false; // No win condition satisfied
}


function displayWinner() {
    container.classList.remove('container');
    container.classList.add('alignCenter');
    container.innerHTML = `<div>${winner} is the winner</div>`;
}
