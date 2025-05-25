const cells = document.querySelectorAll(".cell");

const statusText = document.querySelector("#currentStatus");

const restartBtn = document.querySelector("#restartButton");
console.log(restartBtn);
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

intializeGame();
function intializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
}

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");
  if (options[cellIndex] != "" || !running) {
    return;
  }
  updateCell(this, cellIndex);
  checkWinner();
}

function updateCell(cell, index) {
  console.log(cell, index);
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  statusText.textContent = `${currentPlayer} 's turn`;
}

function checkWinner() {
  let won = false;
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cell1 = options[condition[0]];
    const cell2 = options[condition[1]];
    const cell3 = options[condition[2]];

    if (cell1 == "" || cell2 == "" || cell3 == "") {
      continue;
    }
    if (cell1 == cell2 && cell2 == cell3) {
      won = true;
      break;
    }
  }
  if (won) {
    statusText.textContent = `${currentPlayer} wins!`;
    running = false;
  } else if (!options.includes("")) {
    statusText.textContent = "Drawn!";
    running = false;
  } else {
    changePlayer();
  }
}

function restartGame() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer} 's turn`;
  cells.forEach((cell) => (cell.textContent = ""));
  running = true;
}
