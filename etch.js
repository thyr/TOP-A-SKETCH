// DOM
const divGrid = document.getElementById("etch-container"),
  divConfig = document.getElementById("etch-config"),
  btnDraw8 = document.getElementById("grid-draw-8"),
  btnDraw16 = document.getElementById("grid-draw-16"),
  btnDraw32 = document.getElementById("grid-draw-32"),
  btnDraw64 = document.getElementById("grid-draw-64"),
  btnErase = document.getElementById("grid-clear"),
  btnPsych = document.getElementById("mode-psych"),
  btnClassic = document.getElementById("mode-classic");

let gridTileN,
  gridTileX,
  gridTileY,
  drawMode = "psych";

// Color randomizer
function rg(m, n) {
  return Math.floor(Math.random() * (n - m + 1)) + m;
}

function hex(i) {
  return i.toString(16);
}

function randColor() {
  return (
    "#" +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15))
  );
}

// Grid generator

function drawGrid(gridTileN) {
  // First we delete all already created tiles
  let existingTile = divGrid.lastElementChild;
  while (existingTile) {
    divGrid.removeChild(existingTile);
    existingTile = divGrid.lastElementChild;
  }

  for (let drawnX = 0; drawnX < gridTileN; drawnX++) {
    gridTileX = document.createElement("div");
    gridTileX.classList.add("tile-x");
    divGrid.appendChild(gridTileX);
    for (let drawnY = 0; drawnY < gridTileN; drawnY++) {
      gridTileY = document.createElement("div");
      gridTileY.classList.add("tile-y");
      if (drawMode === "psych") {
        gridTileY.addEventListener("mouseover", function () {
          this.style.cssText = `background: ${randColor()};`;
        });
      } else {
        gridTileY.addEventListener("mouseover", function () {
          this.style.cssText = `background: #333`;
        });
      }
      gridTileX.appendChild(gridTileY);
    }
  }
}

btnDraw8.onclick = () => drawGrid(8);
btnDraw16.onclick = () => drawGrid(16);
btnDraw32.onclick = () => drawGrid(32);
btnDraw64.onclick = () => drawGrid(64);
btnErase.onclick = () => {
  const gridTiles = document.querySelectorAll(".tile-x > div");

  gridTiles.forEach((item) => {
    const gridItem = item;
    gridItem.style.backgroundColor = "#eee";
    gridItem.style.opacity = "1";
    gridItem.count = 0;
  });
};
btnClassic.onclick = () => {
  drawMode = "classic";
};
btnPsych.onclick = () => {
  drawMode = "psych";
};

drawGrid(8);
