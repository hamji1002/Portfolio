let mouseOverX, mouseOverY;

let tileW, tileH;
let tilesX = 5;
let tilesY = 5;
let state = [];
let colors = ['#A8E6CF', '#DCEDC1', '#FFD3B6', '#FFAAA5', '#FF8B94']; // pastel color palette

function setup() {
  let canvasContainer = document.getElementById('canvas-container');
  let canvas = createCanvas(canvasContainer.offsetWidth, windowHeight);
  canvas.parent('canvas-container');



  tileW = width / tilesX;
  tileH = height / tilesY;
  
  state = [tilesX];

  for (let x = 0; x < tilesX; x++) {
    state[x] = [];
    for (let y = 0; y < tilesY; y++) {
      state[x][y] = false;
    }
  }
}

function draw() {
  background(255); // change to white background

  mouseOverX = Math.floor(map(mouseX, 0, width, 0, tilesX));
  mouseOverY = Math.floor(map(mouseY, 0, height, 0, tilesY));

  noStroke();
  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {
      // Use pastel colors
      fill(colors[(x * tilesX + y) % colors.length]);

      if (mouseOverX == x && mouseOverY == y) {
        fill("#F1F1F1"); // change mouse over color to be more contrasting
      }

      if (state[x][y] == false) {
        rect(x * tileW, y * tileH, tileW, tileH);
      } else {
        ellipse(x * tileW, y * tileH, tileW, tileH);
      }
    }
  }
}

function mouseReleased() {
  state[mouseOverX][mouseOverY] = !state[mouseOverX][mouseOverY];
}
