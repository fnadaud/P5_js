function Drop(sketch) {
	this.x = sketch.random(sketch.width);
	this.y = sketch.random(-500, -50);
	this.z = sketch.random(0, 20);
	this.yspeed = sketch.map(this.z, 0, 20, 1, 8);
	this.length = sketch.map(this.z, 0, 20, 10, 20);
	this.thickness = sketch.map(this.z, 0, 20, 1, 2);

	this.fall = function() {
		this.y = this.y + this.yspeed;
		var gravity = sketch.map(this.z, 0, 20, 0, 0.1);
		this.yspeed = this.yspeed + gravity;

		if (this.y > sketch.height) {
			this.y = sketch.random(-200, -100);
			this.yspeed = sketch.map(this.z, 0, 20, 4, 10);
		}
	}

	this.show = function() {
		sketch.strokeWeight(this.thickness);
		sketch.stroke(0, 96, 189);
		sketch.line(this.x, this.y, this.x, this.y + this.length);
	}
}