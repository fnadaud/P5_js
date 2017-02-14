function Ball(x, y) {
	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);

	this.glue = false;

	this.applyForce = function(force) {
		this.acc.add(force);
	}

	this.setVelocity = function(xSpeed, ySpeed) {
		this.vel.x = xSpeed;
		this.vel.y = ySpeed;
	}

	this.update = function() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
		if (this.pos.x > width || this.pos.x < 0) {
			this.pos.sub(this.vel);
			this.vel.x = -this.vel.x;
			this.pos.add(this.vel);
		} else if (this.pos.y > height || this.pos.y < 0) {
			this.pos.sub(this.vel);
			if (this.glue) {
				this.vel.y = 0;
			} else {
				this.vel.y = -this.vel.y;
			}
			this.pos.add(this.vel);
		}
	}

	this.show = function() {
		fill(255);
		ellipse(this.pos.x, this.pos.y, 20, 20);
	}
}