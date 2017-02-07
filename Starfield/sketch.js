var stars = [];
var nbStars = 400;
var a = true;

function setup() {
    createCanvas(600, 600);
    for (var i = 0; i < nbStars; i++) {
        stars[i] = new Star();
    }
    background(0);
}

function draw() {
    if (a) {
        background(0, 50);
    } else {
        background(0);
    }
    translate(width / 2, height / 2);
    for (var i = 0; i < nbStars; i++) {
        stars[i].update();
        stars[i].show();
    }
}

function mousePressed() {
    a = (a + 1) % 2
}
