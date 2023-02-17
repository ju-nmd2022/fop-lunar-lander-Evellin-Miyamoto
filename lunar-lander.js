/* Lunar lander game 
Foundations of Programming - Jönköping University
Evellin Miyamoto */

// Obstacles
function obstacle(x, y, height) {
  fill(200, 182, 255);
  noStroke();
  rect(x, y, 30, 100 + height, 10);
}

// Draws static background, platform and obstacles
function drawStatic() {
  background(20, 33, 61);
  fill(200, 182, 255);
  rect(-10, 250, 555, 35, 10);
  obstacle(100, 160, 0);
  obstacle(515, 100, 80);
}

// Draw moving obstacle
let y = 100;
let speed = -3;

function draw() {
  drawStatic();
  obstacle(300, y, 0);

  y = y - speed;
  if (y > 160 || y < 10) {
    speed = speed * -1;
  }
}

// Rocket
