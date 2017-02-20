function Ball(x, y) {
	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.width = 20;
	this.length = 20;

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
		if (this.pos.x > width){
			this.pos = createVector(width/2 - 20, height/2 - 20);
			this.vel = createVector(5, 0);
			scoreP1++;
		}
		else if(this.pos.x < 0) {
			this.pos = createVector(width/2 - 20, height/2 - 20);
			this.vel = createVector(-5, 0);
			scoreP2++;
		}
		else if (this.pos.y + this.length > height || this.pos.y < 0) {
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
		rect(this.pos.x, this.pos.y, this.width, this.length, 100)
		//ellipse(this.pos.x, this.pos.y, this.width, this.length);
	}

	/*this.collision = function(bar){
		if (this.pos.x < bar.pos.x + bar.width &&
   this.pos.x + this.width > bar.pos.x &&
   this.pos.y < bar.pos.y + bar.length &&
   this.length + this.pos.y > bar.pos.y) {
    	return true;
		}
		else{
			return false;
		}
	}*/
}
