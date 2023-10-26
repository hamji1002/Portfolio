let d = 500;
let sqw;
let palette;
let gs = [];

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
  
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);

  sqw= sqrt(sq(width) + sq(height))*sqrt(2);
  palette = shuffle(random(colorScheme).colors.concat());
  for (let i = 0; i < palette.length; i++) {
    for (let j = i + 1; j < palette.length; j++) {
      for (let k = 0; k < 3; k++) {
        let g = createGradientGraphics(5, 5, k);
        gs.push(g);
      }
    }
  }
  ortho(-width / 2, width / 2, -height / 2, height / 2, -5000, 5000);
}

function draw() {
  background(0, 0, 5);
  rotateX(-45);
  rotateY(frameCount/5+45 + (int(random(4)) * 360) / 4);
  lights();
  ambientLight(0, 0, 100);
  directionalLight(color(0, 0, 40), 0, 0, -1);
  directionalLight(color(0, 0, 40), 1, 0, 0);
  directionalLight(color(0, 0, 40), 0, 1, 0);
  directionalLight(color(0, 0, 40), 0, 0, 1);
  directionalLight(color(0, 0, 40), -1, 0, 0);
  directionalLight(color(0, 0, 40), 0, -1, 0);
  lights();
  
  orbitControl();
  
  randomSeed(0);
  recursiveRect(-sqw/2, -sqw/2,sqw, sqw, 4);
}

function recursiveRect(x, y, w, h, depth) {
  // The rest of the code...
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
