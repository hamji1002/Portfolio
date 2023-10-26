let font;
let pg;

let tX,tY,sp,dspx,dspy,fct;

function setup() {
  let canvas = createCanvas(1080, 1080);
  canvas.parent('sketch-container'); 
  createSliders();
  pg = createGraphics(1080, 1080);
}


function draw() {
  background(0);


  // PGraphics

  pg.background(0);
  pg.fill(255);
  // pg.textFont(font);
  pg.textSize(400);
  pg.push();
  pg.translate(width/2, height/2);
  pg.textAlign(CENTER, CENTER);
  pg.text("RAG", 0, 0);
  pg.pop();


  let tilesX = tX.value();
  let tilesY = tY.value();

  let tileW = int(width/tilesX);
  let tileH = int(height/tilesY);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {

      // WARP
      let waveX = int(sin(frameCount * sp.value() + ( x * y ) * dspx.value()) * fct.value());
      let waveY = int(sin(frameCount * sp.value() + ( x * y ) * dspy.value()) * fct.value());

      if (dspx.value() === 0){
          waveX = 0;
      }

      if (dspy.value() === 0){
          waveY = 0;
      }
      
      // image(pg,0,0)
      
      // SOURCE
      let sx = x*tileW + waveX;
      let sy = y*tileH + waveY;
      let sw = tileW;
      let sh = tileH;


      // DESTINATION
      let dx = x*tileW;
      let dy = y*tileH;
      let dw = tileW;
      let dh = tileH;



      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);

    }
  }
}

function createSliders(){
  tX = createSlider(1, 80, 16, 1);
  tX.position(150, 250); 
  createP('Tiles X').position(150, 210);
  document.getElementsByTagName("p")[0].style.color = "white";
  
  
  tY = createSlider(1, 80, 16, 1);
  tY.position(150, 350);
  createP('Tiles Y').position(150, 310);
  document.getElementsByTagName("p")[1].style.color = "white";


  sp = createSlider(0, 1, 0.005, 0.01);
  sp.position(150, 450);
  createP('Speed').position(150, 410);
  document.getElementsByTagName("p")[2].style.color = "white";

  dspx = createSlider(0, 0.1, 0.05, 0.001);
  dspx.position(1500, 500);
  createP('Displacement X').position(1500, 460);
  //color of the text = white 
  document.getElementsByTagName("p")[3].style.color = "white";


  dspy = createSlider(0, 0.2, 0, 0.01);
  dspy.position(1500, 600);
  createP('Displacement Y').position(1500, 560);
  document.getElementsByTagName("p")[4].style.color = "white";


  fct = createSlider(0, 300, 100, 1);
  fct.position(1500, 700);
  createP('Offset').position(1500, 660);
  document.getElementsByTagName("p")[5].style.color = "white";
  fct.style('background', 'white');
  fct.style('color', 'white');
}
