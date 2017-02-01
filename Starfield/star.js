function Star(){
	this.x = random(-width, width);
	this.y = random(-height, height);
	this.z = random(width);

	this.update = function(){
		this.z = this.z - 10;
		if(this.z < 1){
			this.z = width;
			this.x = random(-width, width);
			this.y = random(-height, height);
		}
	}

	this.show = function(){
		fill(255);
		noStroke();

		var sx = map(this.x/this.z, 0, 1, 0, width);
		var sy = map(this.y/this.z, 0, 1, 0, height);

		var r = map(this.z, 0, width, 16, 0);
		ellipse(sx, sy, r, r);
	}
}