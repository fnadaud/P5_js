function Star(sketch){
	this.x = sketch.random(-sketch.width, sketch.width);
	this.y = sketch.random(-sketch.height, sketch.height);
	this.z = sketch.random(sketch.width);

	this.update = function(){
		this.z = this.z - 10;
		if(this.z < 1){
			this.z = sketch.width;
			this.x = sketch.random(-sketch.width, sketch.width);
			this.y = sketch.random(-sketch.height, sketch.height);
		}
	}

	this.show = function(){
		sketch.fill(255);
		sketch.noStroke();

		var sx = sketch.map(this.x/this.z, 0, 1, 0, sketch.width);
		var sy = sketch.map(this.y/this.z, 0, 1, 0, sketch.height);

		var r = sketch.map(this.z, 0, sketch.width, 16, 0);
		sketch.ellipse(sx, sy, r, r);
	}
}