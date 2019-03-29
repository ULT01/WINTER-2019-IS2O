//background
var Udraw = function (A) {
    
    if (A > 300) {
        background(0, 0, 0);
        fill(255, 255, 255);
        noStroke();
        ellipse(380, 93, 200, 200);
        
    } else if (A > 150 && A < 300) {
        background(255, 146, 3);
        fill(255, 196, 0);
        noStroke();
        ellipse(66, 201, 200, 200);
       
    } else { 
         background(23, 161, 161);
         fill(255, 255, 0);
         noStroke();
         ellipse(380, 93, 200, 200);
        
    }
    
};

Udraw(134);


//roof
fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

//main design
fill(255, 255, 255);
rect(60, 150, 280, 207);

//bricks
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

for (var i = 1; i < 4; i ++) {
    Wdraw(i * 90 - 9, 164);
    line(i * 90 + 20, 165, i * 90 + 20 , 221);
    for (var l = 2; l < 8; l++) {
        Wdraw(l * 182 -283, 249);
        line(l * 181 - 251, 308, l * 181 - 251, 249);
    }
}
//door
var Pdraw = function(X) {
    stroke(199, 151, 40);
    strokeWeight(3);
    fill(120, 80, 19);
    rect(177, 278, 40, 80);
    fill(0, 0, 0);
    noStroke();
    ellipse(206, 318, 15, 15);
    if (X > 200) {
        fill(255, 255, 255);
        rect(177, 278, 40, 80);
        fill(255, 255, 255);
        ellipse(207, 318, 15, 15);
    }
};
Pdraw(183); 

//grass and trees
for (var n = 1; n < 10; n += 1) {
    image(getImage("cute/GrassBlock"),  n * 48 - 53, 335, 50, 70);
    if (n === 2 || n === 3 || n === 6 || n === 7) {
        image(getImage("cute/TreeShort"),  n * 50 - 53, 310, 55, 56);
    }
    
    else if (n === 1 || n === 8) {
        fill(255, 0, 0);
        image(getImage("cute/TreeTall"),  n * 50 - 53, 234, 54, 140);
    }
}
    
