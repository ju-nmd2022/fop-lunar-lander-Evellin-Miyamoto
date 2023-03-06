/* Lunar lander game 
Foundations of Programming - Jönköping University
Evellin Miyamoto */

// different modes and screens
/*
0- start screen
1- Game mode
2- win
3- Lose */

// Variables
let screen = 3;
let rocketX = 50;
let rocketY = 50;
let rocketVelocityY = 0.1;
let rocketVelocityX = 0;
let rocketAcceleration = 0.2;

function setup() {
  createCanvas(800, 650);
}

// Vertical obstacles
function verticalObstacle(x, y, height) {
  fill(200, 182, 255);
  noStroke();
  rect(x, y, 30, 100 + height, 10);
}

// Horizontal obstacles
function horizontalObstacle(x, y, height) {
  fill(200, 182, 255);
  noStroke();
  rect(x, y, 100, 30 + height, 10);
}

// Draws static background, platform and obstacles
function drawStatic() {
  background(20, 33, 61);
  fill(200, 182, 255);
  rect(-10, 250, 555, 35, 10);
  rect(-10, 600, 810, 35, 10);
  fill(187, 208, 255);
  ellipse(50, 20, 100, 10);
  ellipse(50, 560, 100, 10);
  verticalObstacle(100, 160, 0);
  verticalObstacle(515, 100, 80);
  verticalObstacle(460, 275, 80);
  verticalObstacle(320, 430, 80);
  verticalObstacle(300, 0, 40);
  horizontalObstacle(700, 150, 1);
  horizontalObstacle(550, 300, 1);
}
// Rocket
function rocket(x, y) {
  push();
  translate(x, y);
  fill(255, 214, 255);
  ellipse(-10, 10, 10, 30);
  pop();
  push();
  translate(x, y);
  fill(255, 214, 255);
  ellipse(10, 10, 10, 30);
  pop();
  fill(247, 37, 133);
  ellipse(x, y, 20, 50);
  fill(255, 214, 255);
  ellipse(x, y - 15, 10, 10);
}

// Redefine rocket position in the begining or every screen
function rocketSetup() {
  rocketX = 50;
  rocketY = 50;
  rocketVelocityY = 0.1;
  rocketVelocityX = 0;
  rocketAcceleration = 0.2;
}

// Making the rocket move
function movingRocket() {
  rocket(rocketX, rocketY);
  //console.log(rocketVelocityY);

  rocketY = rocketY + rocketVelocityY;
  rocketVelocityY = rocketVelocityY + rocketAcceleration;
  rocketX = rocketX + rocketVelocityX;

  if (keyIsDown(32)) {
    rocketVelocityY = rocketVelocityY - 0.5;
  } else if (keyIsDown(39)) {
    rocketVelocityX = rocketVelocityX + 0.1;
  } else if (keyIsDown(37)) {
    rocketVelocityX = rocketVelocityX - 0.1;
  }

  // Collisions - lose
  if (rocketX > 0 && rocketX < 545 && rocketY > 230 && rocketY < 285) {
    screen = 3;
  } else if (rocketX > 85 && rocketX < 130 && rocketY > 160 && rocketY < 250) {
    screen = 3;
  } else if (rocketX > 290 && rocketX < 330 && rocketY > 0 && rocketY < 145) {
    screen = 3;
  } else if (rocketX > 508 && rocketX < 550 && rocketY > 90 && rocketY < 290) {
    screen = 3;
  } else if (rocketX > 700 && rocketX < 800 && rocketY > 150 && rocketY < 185) {
    screen = 3;
  } else if (rocketX > 550 && rocketX < 650 && rocketY > 300 && rocketY < 335) {
    screen = 3;
  } else if (rocketX > 460 && rocketX < 490 && rocketY > 275 && rocketY < 460) {
    screen = 3;
  } else if (rocketX > 320 && rocketX < 350 && rocketY > 430 && rocketY < 600) {
    screen = 3;
  } else if (rocketX > 0 && rocketX < 800 && rocketY > 600) {
    screen = 3;
  }

  // Walls bounce
  /* https://www.youtube.com/watch?v=Kp070rI_G48 
  wacthed this video to understand the mechanic*/
  if (rocketX < 0) {
    rocketVelocityX = -rocketVelocityX * 1;
  } else if (rocketX > 800) {
    rocketVelocityX = -rocketVelocityX * 1;
  } else if (rocketY < 0) {
    rocketVelocityY = -rocketVelocityY * 0.95;
  } else if (rocketY > 600) {
    rocketVelocityY = -rocketVelocityY * 0.95;
  }

  // Land on the portal to win
  if (rocketX > 5 && rocketX < 95 && rocketY > 530) {
    // Lost because the rocket was too fast
    if (rocketVelocityY > 3) {
      screen = 3;
    }
    // Bounce
    else if (rocketVelocityY > 0.01) {
      rocketVelocityY = -rocketVelocityY * 0.95;
    }
    // Win because of zero speed
    else {
      screen = 2;
      rocketY = 560;
    }
  }
}
// The game mode with all mechanics
function gameMode() {
  drawStatic();
  // rocketSetup();
  movingRocket();
}

// First Screen
function startScreen() {
  background(20, 33, 61);
  noStroke();
  fill(255, 214, 255, 10);
  rect(120, 50, 560, 560, 50);
  rect(110, 50, 560, 560, 50);
  rect(105, 450, 580, 130, 50);
  fill(181, 23, 158);
  textSize(60);
  text("Space adventure", 170, 200);
  push();
  fill(200, 182, 255);
  textSize(25);
  text("Use the spacebar to fight gravity", 220, 300);
  text("Use the side arrows to swindle", 230, 360);
  text("Be carefull with the landing velocity", 210, 420);
  pop();
  textSize(40);
  text("To start the game press enter", 140, 520);
}

// Screen won
function gameWon() {
  background(255, 255, 255);
  noStroke();
  fill(255, 214, 255, 80);
  rect(80, 50, 620, 560, 50);
  rect(100, 50, 620, 560, 50);
  push();
  fill(255, 214, 255, 150);
  rect(100, 340, 600, 120, 50);
  pop();
  fill(181, 23, 158);
  textSize(80);
  text("YAY! You won!! :)", 100, 300);
  push();
  fill(200, 182, 255);
  textSize(40);
  text("Play again", 280, 380);
  text("Press enter", 275, 440);
  pop();
}

// Screen lost
function gameLost() {
  background(0, 0, 0);
  noStroke();
  fill(255, 214, 255, 10);
  rect(120, 50, 560, 560, 50);
  rect(110, 50, 560, 560, 50);
  rect(120, 340, 550, 120, 50);
  fill(181, 23, 158);
  textSize(80);
  text(" Game Over!! :(", 100, 300);
  push();
  fill(200, 182, 255);
  textSize(40);
  text("Try again", 300, 380);
  text("Press enter", 285, 440);
  pop();
}

// Different screens
/* inspired by these references
 https://editor.p5js.org/aferriss/sketches/rJwwjSvib
https://www.youtube.com/watch?v=RlsRQS5qFSY */

function draw() {
  if (screen === 0) {
    startScreen();
  } else if (screen === 1) {
    gameMode();
  } else if (screen === 2) {
    gameWon();
  } else if (screen === 3) {
    gameLost();
  }
}

// When the enter key is pressed on each screen
function keyPressed() {
  if (screen === 0 && keyCode === 13) {
    screen = 1;
    gameMode();
  } else if (screen === 2 && keyCode === 13) {
    screen = 1;
    rocketSetup();
    gameMode();
  } else if (screen === 3 && keyCode === 13) {
    screen = 1;
    rocketSetup();
    gameMode();
  }
}
