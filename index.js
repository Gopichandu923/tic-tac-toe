const cells = document.querySelectorAll(".cell");

const statusText = document.querySelector("#currentStatus");

const restartBtn = document.querySelector("#restartButton");

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [1, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

function intializeGme() {}

function cellClicked() {}

function updateCell(cell, index) {}

function changePlayer() {}

function winner() {}

function restartGame() {}
