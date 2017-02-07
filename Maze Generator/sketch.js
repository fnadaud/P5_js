var grid = [];
var sz = 40;
var cols;
var raws;
var current;

function setup() {
    createCanvas(400, 400);
		frameRate(5);
    cols = width / sz;
    raws = height / sz;
    for (var j = 0; j < raws; j++) {
        for (var i = 0; i < cols; i++) {
            grid.push(new Cell(i, j));
        }
    }
    current = grid[0];
    current.visited = true;
}

function draw() {
    background(51);
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
    var next = current.checkNeighbors();
		if(next){
			next.visited = true;
			current.active = false;
			next.active = true;
			current = next;
		}
		// stroke(255);
		// fill(255,0,0);
		// rect(0,0,8,8);
}

function index(i, j) {
    if (i < 0 || i > cols-1 || j < 0 || j > raws-1) {
        return -1;
    } else {
        return i + j * cols;
    }
}

function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;

    this.checkNeighbors = function() {
        var neighbors = [];
        var top = grid[index(i, j - 1)];
        var right = grid[index(i + 1, this.j)];
        var bottom = grid[index(this.i, this.j + 1)];
        var left = grid[index(this.i - 1, this.j)];

        if (top && !top.visited) {
            neighbors.push(top);
        }
        if (right && !right.visited) {
            neighbors.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }
        if (left && !left.visited) {
            neighbors.push(left);
        }
        var n =  neighbors[floor(random(neighbors.length))];
				if(n){
					if(n === top){
						this.walls[0] = false;
						n.walls[2] = false;
					}
					else if(n === right){
						this.walls[1] = false;
						n.walls[3] = false;
					}
					else if(n === bottom){
						this.walls[2] = false;
						n.walls[0] = false;
					}
					else if(n === left){
						this.walls[3] = false;
						n.walls[1] = false;
					}
					console.log(this.walls);
					return n;
				}
				else{
					return undefined;
				}
    }

    this.show = function() {
        var x = this.i * sz;
        var y = this.j * sz;

        if (this.visited) {
					stroke(0, 127, 127);
        	fill(0, 127, 127);
          rect(x, y, sz, sz);
        }
				if(this.active){
					stroke(255);
             fill(0, 255 , 255);
             rect(x+10, y+10, sz-20, sz-20);
				}
        stroke(255);
        if (this.walls[0]) {
            line(x, y, x + sz, y); // top
        }
        if (this.walls[1]) {
            line(x + sz, y, x + sz, y + sz); // right
        }
        if (this.walls[2]) {
            line(x, y + sz, x + sz, y + sz); // bottom
        }
        if (this.walls[3]) {
            line(x, y, x, y + sz); // left
        }
    }
}
