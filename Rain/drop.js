function Drop() {
	this.x = random(width);
	this.y = random(-500, -50);
	this.z = random(0, 20);
	this.yspeed = map(this.z, 0, 20, 1, 8);
	this.length = map(this.z, 0, 20, 10, 20);
	this.thickness = map(this.z, 0, 20, 1, 2);

	this.fall = function() {
		this.y = this.y + this.yspeed;
		var gravity = map(this.z, 0, 20, 0, 0.1);
		this.yspeed = this.yspeed + gravity;

		if (this.y > height) {
			this.y = random(-200, -100);
			this.yspeed = map(this.z, 0, 20, 4, 10);
		}
	}

	this.show = function() {
		strokeWeight(this.thickness);
		stroke(0, 96, 189);
		line(this.x, this.y, this.x, this.y + this.length);
	}
}