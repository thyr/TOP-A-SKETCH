// DOM
const divGrid = document.getElementById("etch-container"),
  divConfig = document.getElementById("etch-config"),
  btnDraw4 = document.getElementById("grid-draw-4"),
  btnDraw8 = document.getElementById("grid-draw-8"),
  btnDraw16 = document.getElementById("grid-draw-16"),
  btnDraw32 = document.getElementById("grid-draw-32");

// Grid generator
let gridTileN, gridTileX, gridTileY;

function drawGrid(gridTileN) {
  // First we delete all already created tiles
  let existingTile = divGrid.lastElementChild;
  while (existingTile) {
    divGrid.removeChild(existingTile);
    existingTile = divGrid.lastElementChild;
  }
  // OLD METHOD (Generates bulk tiles, not minding horizontal nor vertical)
  // // Now we generate the grid
  // for (let drawn = 0; drawn < gridTileN; drawn++) {
  //   gridTile = document.createElement("div");
  //   gridTile.classList.add("tile");
  //   divGrid.appendChild(gridTile);
  // }
  for (let drawnX = 0; drawnX < gridTileN; drawnX++) {
    gridTileX = document.createElement("div");
    gridTileX.classList.add("tile-x");
    divGrid.appendChild(gridTileX);
    for (let drawnY = 0; drawnY < gridTileN; drawnY++) {
      gridTileY = document.createElement("div");
      gridTileY.classList.add("tile-y");
      gridTileX.appendChild(gridTileY);
    }
  }
}

btnDraw4.onclick = () => drawGrid(4);
btnDraw8.onclick = () => drawGrid(8);
btnDraw16.onclick = () => drawGrid(16);
btnDraw32.onclick = () => drawGrid(32);

drawGrid(4);
