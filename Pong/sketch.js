var ball;

function setup() {
	createCanvas(windowWidth - 20, windowHeight - 20);
	ballVelocity = createVector(10, 20);
	ball = new Ball(width / 2, height / 2);
	ball.setVelocity(10, 20);
}

function draw() {
	background(51);
	ball.update();
	ball.show();
	//ball.applyForce(1);
}

function mousePressed() {
	if (ball.glue) {
		ball.glue = false;
		ball.setVelocity(ball.vel.x, 20);
	} else {
		ball.glue = true;
	}
}