var score = 0;
var gameState = "HOME";
var found1 = false;
var found2 = false;
var found3 = false;
var img;
var img2;
var img3;
var img4;
var img5;

function preload() {
  img = loadImage('https://omnidesign8.github.io/gameinteraction/homescreen.png');
  // Level 1
  img2 = loadImage('https://omnidesign8.github.io/gameinteraction/wwshopping.png');
  // Level 2
  img3 = loadImage('https://omnidesign8.github.io/gameinteraction/wwsnow.png');
  // Level 3
  img4 = loadImage('https://omnidesign8.github.io/gameinteraction/wwrobot.png');
  // End Screen
  img5 = loadImage('https://omnidesign8.github.io/gameinteraction/playagain.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(220);

  if (gameState == "HOME") {
    homeScreen();
  }
  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }
  if (gameState == "END") {
    endScreen();
  }

  // Hide Score
  if (gameState != "HOME") {
    fill(0);
    textSize(20);
    text("score: " + score, width/2, 40);
  }
}

// HOME SCREEN
function homeScreen() {
  image(img, 0, 0, 600, 600);
}

// CLICK
function mousePressed() {
  // Start button
  if (gameState == "HOME") {
    if (mouseX >= 161 && mouseX <= 455 && mouseY >= 516 && mouseY <= 567){
      gameState = "L1";
    }
  }

  // Play Again 
  if (gameState == "END") {
    if (mouseX >= 161 && mouseX <= 455 && mouseY >= 516 && mouseY <= 567){
      score = 0;
      found1 = false;
      found2 = false;
      found3 = false;
      gameState = "HOME";
    }
  }
}

// FIND CHARACTER
function mouseMoved() {
  // LEVEL 1
  if (gameState == "L1" && found1 == false) {
    if (mouseX >= 561 && mouseX <= 579 && mouseY >= 0 && mouseY <= 58){
      found1 = true;
      score = score + 1;
      gameState = "L2";
    }
  }
  // LEVEL 2
  if (gameState == "L2" && found2 == false) {
    if (mouseX >= 273 && mouseX <= 294 && mouseY >= 350 && mouseY <= 437){
      found2 = true;
      score = score + 1;
      gameState = "L3";
    }
  }
  // LEVEL 3
  if (gameState == "L3" && found3 == false) {
    if (mouseX >= 177 && mouseX <= 188 && mouseY >= 220 && mouseY <= 244){
      found3 = true;
      score = score + 1;
      gameState = "END";
    }
  }
}
// LEVEL 1
function levelOne() {
  image(img2, 0, 0, 600, 600);
  fill(0);
  textSize(20);
  text("level 1", width/2, height-20);
}
// LEVEL 2
function levelTwo() {
  image(img3, 0, 0, 600, 600);
  fill(0);
  textSize(20);
  text("level 2", width/2, height-20);
}
// LEVEL 3
function levelThree() {
  image(img4, 0, 0, 600, 600);
  fill(0);
  textSize(20);
  text("level 3", width/2, height-20);
}
// END SCREEN
function endScreen() {
  image(img5, 0, 0, 600, 600);
}
