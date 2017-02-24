var ball;
var bar1;
var bar2;
var scoreP1 = 0;
var scoreP2 = 0;
var pause = false;

var wdth = 1000;
var hght = 500;

function setup() {
	createCanvas(windowWidth - 20, windowHeight - 20);
	ball = new Ball(width / 2, height / 2);

	bar1 = new Bar(5, height/2 - 40);
	bar2 = new Bar(width - 5 - 20, height/2 - 40);
	textSize(20);
	text("|", width/2, 20);
}

function draw() {
	background(51);
	bar2.move(ball);
	if(keyIsDown(90)){
		bar1.up();
	}
	else if(keyIsDown(83)){
		bar1.down();
	}
	bar1.update();
	bar1.show();
	bar2.update();
	bar2.show();

	ball.update();
	bar1.collision(ball);
	bar2.collision(ball);

	ball.show();

	/*if(keyIsDown(UP_ARROW)){
		bar2.up();
	}
	else if(keyIsDown(DOWN_ARROW)){
		bar2.down();
	}*/

	text(scoreP1, width/2 - 20, 20);
	text(scoreP2, width/2 + 20, 20);
}

function keyPressed() {
if (keyCode === 32) { //SPACE
    if (pause) {
      loop();
      pause = false;
    } else {
      noLoop();
      pause = true;
    }
  }
}
