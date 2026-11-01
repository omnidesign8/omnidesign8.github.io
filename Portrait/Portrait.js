function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(235, 225, 205);


  noStroke();
  fill(75, 85, 60);
  quad(80, 440, 520, 440, 590, 600, 10, 600);


  fill(155, 95, 70);
  rect(210, 390, 180, 130);


  fill(170, 105, 78);
  ellipse(300, 300, 235, 285);


  fill(35, 30, 25);
  ellipse(300, 385, 205, 155);
  triangle(200, 385, 400, 385, 300, 475);


  noStroke();
  fill(35, 30, 25);
  ellipse(275, 345, 65, 25);
  ellipse(325, 345, 65, 25);


  stroke(100, 60, 45);
  strokeWeight(4);
  line(300, 285, 290, 325);
  line(290, 325, 310, 325);


  noStroke();
  fill(55, 60, 40);

  beginShape();
  vertex(205, 20);
  vertex(395, 20);
  vertex(470, 155);
  vertex(535, 185);
  vertex(580, 225);
  vertex(20, 225);
  vertex(65, 185);
  vertex(130, 155);
  endShape(CLOSE);


  fill(210, 165, 65, 100);
  stroke(210, 165, 65);
  strokeWeight(5);

  ellipse(245, 270, 100, 100);
  ellipse(355, 270, 100, 100);


  line(295, 270, 305, 270);
}
