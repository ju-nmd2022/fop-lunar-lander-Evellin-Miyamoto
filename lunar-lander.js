/* Lunar lander game 
Foundations of Programming - Jönköping University
Evellin Miyamoto */

// Vertical obstacles
function verticalObstacle(x, y, height) {
  fill(200, 182, 255);
  noStroke();
  rect(x, y, 30, 100 + height, 10);
}

// stars background

// black hole

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
  ellipse(50, 200, 100, 100);
  ellipse(50, 550, 100, 100);
  verticalObstacle(100, 160, 0);
  verticalObstacle(515, 100, 80);
  verticalObstacle(460, 275, 80);
}

// Draw moving verticalObstacle
let y = 100;
let speed = -3;

function drawMoving() {
  verticalObstacle(300, y, 0);

  y = y - speed;
  if (y > 160 || y < 10) {
    speed = speed * -1;
  }
}

// Draw moving Horizontal obstacle
let x = 600;
let horizontalSpeed = 2;

function drawMovingHorizontal() {
  horizontalObstacle(x, 200, 0);

  x = x - horizontalSpeed;
  if (x > 710 || x < 540) {
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

function draw() {
  drawStatic();
  drawMoving();
  drawMovingHorizontal();
  spiningObstacle();
}

// Rocket

/* como fazer ele saber que bateu no que está girando
pode ser fazendo vários círculos 
ou pode ser com comparacao de cor - nao é muito efetivo
porque faz o computador rodar muito
ou movendo o background e deixando os obstaculos parados*/
