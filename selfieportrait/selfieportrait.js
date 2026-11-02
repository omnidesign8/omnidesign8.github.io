
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

  beginShape();

 
  vertex(185, 275);
  vertex(215, 345);
  vertex(235, 365);
  vertex(255, 355);
  vertex(280, 375);
  vertex(300, 350);
  vertex(320, 375);
  vertex(345, 355);
  vertex(365, 365);
  vertex(385, 345);
  vertex(415, 275);


  vertex(405, 410);
  vertex(370, 460);
  vertex(335, 495);
  vertex(300, 520);
  vertex(265, 495);
  vertex(230, 460);
  vertex(195, 410);

  endShape(CLOSE);


  beginShape();

  vertex(300, 325);
  vertex(275, 310);
  vertex(250, 315);
  vertex(230, 340);
  vertex(260, 355);
  vertex(285, 345);
  vertex(300, 335);
  vertex(315, 345);
  vertex(340, 355);
  vertex(370, 340);
  vertex(350, 315);
  vertex(325, 310);

  endShape(CLOSE);


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
