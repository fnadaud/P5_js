var angle = 0;
var slider;

function setup() {
	createCanvas(600, 600);
	slider = createSlider(0, TWO_PI, PI / 21, 0.01);
}

function draw() {
	background(51);
	angle = slider.value();
	stroke(255);
	push();
	translate(width/2, height);
	branch(150);
	pop();
	push();
	translate(width/2, 0);
	rotate(PI);
	branch(150);
	pop();
	translate(width, height/2);
	rotate(-PI/2);
	branch(150);
}

function branch(len) {
	line(0, 0, 0, -len);
	translate(0, -len);
	if (len > 4) {
		push();
		rotate(angle);
		branch(len * 0.67);
		pop();
		push();
		rotate(-angle);
		branch(len * 0.67);
		pop();
	}
}