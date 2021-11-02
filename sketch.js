function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill(0);
  rect(50,50,300,300);
  fill(255);
  rect(100,100,200,200);
  fill(0);
  rect(150,150,100,100);

  textSize (15);
  textAlign (CENTER);
  fill(255);
  text('Hello World',width/2, height/2);
}
