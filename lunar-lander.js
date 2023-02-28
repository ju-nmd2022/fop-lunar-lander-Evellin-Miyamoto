/* Lunar lander game 
Foundations of Programming - Jönköping University
Evellin Miyamoto */

function setup() {
  createCanvas(800, 650);
}

// Vertical obstacles
function verticalObstacle(x, y, height) {
  fill(200, 182, 255);
  noStroke();
  rect(x, y, 30, 100 + height, 10);
}

// stars background

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
  // rect(0, 550, 100, 30, 10);
  fill(187, 208, 255);
  ellipse(50, 20, 100, 10);
  ellipse(50, 560, 100, 10);
  verticalObstacle(100, 160, 0);
  verticalObstacle(515, 100, 80);
  verticalObstacle(460, 275, 80);
}

// Draw moving verticalObstacle
let verticalY = 100;
let verticalSpeed = -3;

function drawMoving() {
  verticalObstacle(300, verticalY, 0);

  verticalY = verticalY - verticalSpeed;
  if (verticalY > 160 || verticalY < 10) {
    verticalSpeed = verticalSpeed * -1;
  }
}

// Draw moving Horizontal obstacle
let horizontalX = 600;
let horizontalSpeed = 2;

function drawMovingHorizontal() {
  horizontalObstacle(horizontalX, 200, 0);

  horizontalX = horizontalX - horizontalSpeed;
  if (horizontalX > 710 || horizontalX < 540) {
    horizontalSpeed = horizontalSpeed * -1;
  }
}

// Draw spining whell
/* Learned from p5.js - 
https://editor.p5js.org/chjno/sketches/SJ2gSkAt-*/

let angle = 0;
function spiningObstacle() {
  push();
  translate(250, 445);
  angleMode(DEGREES);
  rotate(angle);
  rectMode(CENTER);
  rect(0, 0, 200, 30, 10);
  angle = angle + 1;
  pop();
}

// Rocket

function rocket(x, y) {
  push();
  translate(x, y);
  rotate(20);
  fill(255, 214, 255);
  ellipse(-10, 10, 10, 30);
  pop();
  push();
  translate(x, y);
  rotate(-20);
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
let rocketVelocity = 1;
let rocketAcceleration = 0.1;

function movingRocket() {
  rocket(rocketX, rocketY);
  rocketVelocity = rocketVelocity + rocketAcceleration;
  rocketY = rocketY + rocketVelocity;

  if (keyIsDown(38)) {
    rocketY = rocketY - 20;
  } else if (keyIsDown(39)) {
    rocketX = rocketX + 30;
  } else if (keyIsDown(37)) {
    rocketX = rocketX - 7;
  }
}

// Draw everything
function draw() {
  drawStatic();
  drawMoving();
  drawMovingHorizontal();
  spiningObstacle();
  movingRocket();
}

/* como fazer ele saber que bateu no que está girando
pode ser fazendo vários círculos 
ou pode ser com comparacao de cor - nao é muito efetivo
porque faz o computador rodar muito
ou movendo o background e deixando os obstaculos parados*/
