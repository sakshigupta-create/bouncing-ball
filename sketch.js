let ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3,
  diameter: 80
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("red");

  // Move the ball
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;

  // Check for collision with walls and reverse direction if needed
  if (ball.x > width - ball.diameter / 2 || ball.x < ball.diameter / 2) {
    ball.xspeed *= -1;
  }
  if (ball.y > height - ball.diameter / 2 || ball.y < ball.diameter / 2) {
    ball.yspeed *= -1;
  }

  // Display the ball
  ellipse(ball.x, ball.y, ball.diameter, ball.diameter);
}





