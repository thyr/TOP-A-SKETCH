// DOM
const divGrid = document.getElementById("etch-container"),
  divConfig = document.getElementById("etch-config"),
  btnDraw32 = document.getElementById("grid-draw-32"),
  btnDraw64 = document.getElementById("grid-draw-64"),
  btnDraw128 = document.getElementById("grid-draw-128"),
  btnDraw256 = document.getElementById("grid-draw-256");

// Grid generator
let gridTileN, gridTile;

function drawGrid(gridTileN) {
  // First we delete all already created tiles
  let existingTile = divGrid.lastElementChild;

  while (existingTile) {
    divGrid.removeChild(existingTile);
    existingTile = divGrid.lastElementChild;
  }
  // Now we generate the grid
  for (let drawn = 0; drawn < gridTileN; drawn++) {
    gridTile = document.createElement("div");
    gridTile.classList.add("tile");
    divGrid.appendChild(gridTile);
  }
}

btnDraw32.onclick = () => drawGrid(32);
btnDraw64.onclick = () => drawGrid(64);
btnDraw128.onclick = () => drawGrid(128);
btnDraw256.onclick = () => drawGrid(256);

drawGrid(16);
