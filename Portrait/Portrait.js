function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(235, 225, 205);

  // Scale the drawing to fit the smaller canvas
  push();
  scale(0.5);

  // Shirt
  noStroke();
  fill(75, 85, 60);
  quad(80, 440, 420, 440, 490, 600, 10, 600);

  // Neck
  fill(155, 95, 70);
  rect(210, 390, 80, 100);

  // Face
  fill(170, 105, 78);
  ellipse(250, 300, 235, 285);

  // Beard
  fill(35, 30, 25);
  ellipse(250, 385, 205, 155);
  triangle(150, 385, 350, 385, 250, 475);

  // Mustache
  ellipse(225, 345, 65, 25);
  ellipse(275, 345, 65, 25);

  // Nose
  stroke(100, 60, 45);
  strokeWeight(4);
  line(250, 285, 240, 325);
  line(240, 325, 260, 325);

  // Glasses
  noFill();
  stroke(210, 165, 65);
  strokeWeight(5);
  ellipse(195, 270, 100, 100);
  ellipse(305, 270, 100, 100);
  line(245, 270, 255, 270);

  // Hat brim
  noStroke();
  fill(55, 60, 40);
  quad(65, 175, 395, 175, 455, 225, 35, 225);

  // Hat top
  fill(75, 80, 48);
  ellipse(235, 125, 275, 205);

  pop();
}
