background(29, 40, 115);
fill(224, 215, 224);
ellipse(300, 229, 150, 150);

var grass = getImage("cute/GrassBlock");
var tree = getImage("cute/TreeUgly");

var x = 0;
while (x < 400) {
    image(grass, x, 270);
    image(tree, x, 200);
    x += 100;
}

var Bdraw = function () {
    
    fill(29, 40, 115);
    noStroke();
    rect(0, 0, 400, 150);
    
    for (var k = 0; k < 304; k += 5) {
        image(getImage("space/star"), k * 10, 4, 41, 41);
    }

    for (var n = 15; n < 90; n += 30) {
         image(getImage("space/star"), 0, n * 2 +10, 41, 41);
    }
    
    for (var n = 15; n < 90; n += 30) {
         image(getImage("space/star"), 349, n * 2 +10, 41, 41);
    }    
};
var xPos = 5;
var kPos = 405;
var speed = 15;
var speed2 = 15;


var draw = function() {
    Bdraw();
    if (xPos > 400) {
        speed = -5;
    }
    if (xPos < 10) {
        speed = 5;
    }
    noStroke();
    fill(255, 255, 255);
    rect(xPos, 100, 10, 10);
    
    xPos += speed;
    
    if (kPos > 400) {
        speed2 = -5;
    }
    if (kPos < 10) {
        speed2 = 5;
    }
    noStroke();
    fill(255, 255, 255);
    ellipse(kPos, 70, 10, 10);
    
    kPos += speed2;
};


    
// fill(29, 40, 115);    rect(0, 0, 400, 200);    image(getImage("space/star"), 4, 1, 50, 50);
