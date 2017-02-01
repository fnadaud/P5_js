var c1 = function(sketch) {
	var stars = [];
	var nbStars = 100;

	sketch.setup = function() {
		sketch.createCanvas(460, 250);

		for (var i = 0; i < nbStars; i++) {
			stars[i] = new Star(sketch);
		}
	}

	sketch.draw = function() {
		sketch.background(0);
		sketch.translate(sketch.width / 2, sketch.height / 2);
		for (var i = 0; i < nbStars; i++) {
			stars[i].update();
			stars[i].show();
		}
	}
};
var mc1 = new p5(c1, 'c1');

var c2 = function(sketch) {
	var drops = [];
	var nbDrops = 100;

	sketch.setup = function() {
		sketch.createCanvas(460, 250);
		for (var i = 0; i < nbDrops; i++) {
			drops[i] = new Drop(sketch);
		}
	}

	sketch.draw = function() {
		sketch.background(133, 198, 189);
		for (var i = 0; i < nbDrops; i++) {
			drops[i].fall();
			drops[i].show();
		}
	}
};
var mc2 = new p5(c2, 'c2');