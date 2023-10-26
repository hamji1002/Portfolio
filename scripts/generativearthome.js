// p5.js sketch to create a spirograph pattern
new p5();

let t;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    noCursor();
    noFill();
    stroke(255, 120);
    t = 0;
}

function draw() {
    background('#F2F0EB');
    translate(width / 2, height / 2);

    for(let i = 0; i < 10; i++){
        x = 100 * cos(t + i * 2 * PI / 10);
        y = 100 * sin(t + i * 2 * PI / 10);
        x2 = 100 * cos(t + 0.01 + i * 2 * PI / 10);
        y2 = 100 * sin(t + 0.01 + i * 2 * PI / 10);
        strokeWeight(map(sin(t), -1, 1, 1, 10));
        line(x, y, x2, y2);
    }
    t += 0.005;
}
