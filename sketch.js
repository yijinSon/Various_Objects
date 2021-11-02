let movers = [];
let canvas;

function setup() {
  createCanvas(400, 400);
  canvas = createGraphics(400,400);

  for (let i=0; i<5; i++){
    let mover = new Mover(random(width), random(height), random(5,20));
    movers.push(mover);
  }
}

function draw() {
  background(220);
  image (canvas, 0,0);
  // for (let i=0; i<movers.length; i++){
  //   let mover = movers[i];
  //   mover.update();
  //   mover.show();
  // }

  for (let mover of movers){
    mover.update();
    mover.show();
    mover.drawOn(canvas);
  }

  if (mouseIsPressed) {
    let mousePos = createVector (mouseX, mouseY);

    for (let mover of movers){
      mover.attractTo(mousePos);
    }
  }
}
