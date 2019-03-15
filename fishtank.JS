background(89, 216, 255);

var rdraw = function (y) {
    for (var z = 0; z < 405; z += 40) {
        image(getImage("cute/Rock"), z - 10, y, 50, 50);
    }
};
rdraw(354);
rdraw(367);
rdraw(368);



var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);


var Fdraw = function(centerX, centerY, bodyLength, bodyHeight, bodyColor, t) {
   
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5 + t, bodyHeight/5 + t);

};

draw = function() {
    if (mouseIsPressed) {
        Fdraw(mouseX, mouseY, -81, 69, color(234, 239, 242), 9);
    }
};

Fdraw(132, 72, 156, 112, color(179, 124, 124), 15);
Fdraw(252, 252, -146, 69, color(118, 15, 191), 9);
rotate(20);
Fdraw(188, 238, 109, 65, color(147, 156, 22), 10);
rotate(-36);
Fdraw(253, 183, -109, 65, color(156, 25, 25), 5);



         
