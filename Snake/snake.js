function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      if (fr < 30)
        fr = fr + 0.5;
      if (pos.gold) {
        this.total++;
        currentSc += 25;
      } else {
        currentSc += 10;
      }
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) {
      this.xspeed = x;
      this.yspeed = y;
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.tail = [];
        fr = 15;
        lastSc = currentSc;
        if (lastSc > bestSc) {
          bestSc = lastSc;
        }
        currentSc = 0;
      }
    }
  }

  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    if (this.total > this.tail.length+1) {
      this.tail[this.total - 2] = createVector(this.x, this.y);
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    if (this.x >= wdth) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = wdth;
    } else if (this.y >= height) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = height;
    }

    this.x = constrain(this.x, 0, wdth - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() {
    fill(22,184,78);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }
}