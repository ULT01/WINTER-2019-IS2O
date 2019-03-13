background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

var Cdraw = function(x, y) {
    var k = 0;
    while (k < 129) {
        image(getImage("cute/StoneBlock"),  k * 2 + 56, y, 50, 70);
        k += 20;
    }
};

Cdraw(103, 130);
Cdraw(103, 162);
Cdraw(103, 194);
Cdraw(103, 226);
Cdraw(103, 258);
Cdraw(103, 290);

//windows
var Wdraw = function (x, y) {
    stroke(186, 91, 18);
    strokeWeight(4);
    fill(255, 255, 255);
    rect(x, y, 60, 60);
};

Wdraw(76, 184);
Wdraw(170, 184);
Wdraw(258, 184);
Wdraw(76, 277);
Wdraw(258, 277);
//door
fill(120, 80, 19);
rect(177, 278, 40, 80);
