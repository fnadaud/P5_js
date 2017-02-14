var drops = [];
var nbDrops = 300;

function setup() {
	/*createCanvas(640, 360);*/
    createCanvas(windowWidth -20, windowHeight-20);
	for (var i = 0; i < nbDrops; i++) {
		drops[i] = new Drop();
	}
}

function draw() {
	background(133, 198, 189);
	for (var i = 0; i < nbDrops; i++) {
		drops[i].fall();
		drops[i].show();
	}
}