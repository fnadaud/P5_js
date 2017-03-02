var game;
var scoreP1 = 0;
var scoreP2 = 0;
var pause = false;
var menu = false;

var wdth = 800;
var hght = 600;

function setup() {
	createCanvas(windowWidth - 20, windowHeight - 20);
	game = new Game(false);
	noFill();
	strokeWeight(10);
	rect(
		windowWidth/2 - wdth/2 - 10,
		windowHeight/2 - hght/2 - 10,
		wdth,
		hght
	);
	strokeWeight(1);
}

function draw() {
	translate(windowWidth/2 - wdth/2 - 10, windowHeight/2 - hght/2 - 10);
	game.update();
}

function keyPressed() {
	if (keyCode === 32) { //SPACE
		if(game.launch){
			game.launch = false;
		}
		else if(!menu){
			if (pause) {
				loop();
				pause = false;
			} else {
				noLoop();
				pause = true;
			}
		}
  }
}
