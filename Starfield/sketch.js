var stars = [];
var nbStars = 400;

function setup() {
	createCanvas(600, 600);
	for (var i = 0; i < nbStars; i++) {
		stars[i] = new Star();
	}
}

function draw() {
	background(0);
	translate(width/2, height/2);
	for (var i = 0; i < nbStars; i++) {
		stars[i].update();
		stars[i].show();
	}
}