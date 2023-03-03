/* Lunar lander game 
Foundations of Programming - Jönköping University
Evellin Miyamoto */
isGameActive = false;

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
  rect(-10, 600, 800, 35, 10);
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

// Draw moving verticalObstacle
// let verticalY = 100;
// let verticalSpeed = -3;

// function drawMoving() {
//   verticalObstacle(300, verticalY, 0);

//   verticalY = verticalY - verticalSpeed;
//   if (verticalY > 160 || verticalY < 10) {
//     verticalSpeed = verticalSpeed * -1;
//   }
// }

// // Draw moving Horizontal obstacle
// let horizontalX = 600;
// let horizontalSpeed = 2;

// function drawMovingHorizontal() {
//   horizontalObstacle(horizontalX, 200, 0);

//   horizontalX = horizontalX - horizontalSpeed;
//   if (horizontalX > 710 || horizontalX < 540) {
//     horizontalSpeed = horizontalSpeed * -1;
//   }
// }

// Draw spining whell
/* Learned from p5.js - 
https://editor.p5js.org/chjno/sketches/SJ2gSkAt-*/

// let angle = 0;
// function spiningObstacle() {
//   push();
//   translate(250, 445);
//   angleMode(DEGREES);
//   rotate(angle);
//   rectMode(CENTER);
//   rect(0, 0, 200, 30, 10);
//   angle = angle + 1;
//   pop();
// }

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

// Making the rocket move
let rocketX = 50;
let rocketY = 50;
let rocketVelocity = 0.3;
let rocketAcceleration = 0.01;
function movingRocket() {
  rocket(rocketX, rocketY);
  rocketVelocity = rocketVelocity + rocketAcceleration;
  rocketY = rocketY + rocketVelocity;

  if (keyIsDown(38)) {
    rocketY = rocketY - 10;
  } else if (keyIsDown(39)) {
    rocketX = rocketX + 10;
  } else if (keyIsDown(37)) {
    rocketX = rocketX - 10;
  }
}

function startScreen() {
  background(255, 255, 255);
  fill(0, 0, 0);
  textSize(60);
  text("Land the Rocket!", 150, 200);
  push();
  textSize(25);
  text("Use arrow up to control the velocity", 180, 300);
  text("Move the rocket with arrow right", 190, 360);
  pop();
  push();
  textSize(40);
  text("To start the game press spacebar", 80, 500);
}

function gameWon() {
  background(255, 255, 255);
  fill(0, 0, 0);
  textSize(80);
  text("You won!!", 220, 300);
  push();
  textSize(40);
  text("Start again", 300, 380);
  text("Press space bar", 260, 420);
  pop();
}

function gameLost() {
  background(0, 0, 0);
  fill(255, 255, 255);
  textSize(80);
  text("Game Over", 200, 300);
  push();
  textSize(40);
  text("Try again", 320, 380);
  text("Press space bar", 260, 420);
  pop();
}

//collision part

// Draw everything
function draw() {
  drawStatic();
  // drawMoving();
  // drawMovingHorizontal();
  // spiningObstacle();
  movingRocket();
  startScreen();
  gameWon();
}
