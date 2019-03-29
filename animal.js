var x = 205;
var y = 125;
var faceSize = 169;

var bear = function() {
noStroke();


// ears
var earSize=faceSize*1/2;
fill(89, 52, 17);
ellipse(x-faceSize*2/5, y-faceSize*2/5, earSize, earSize);
ellipse(x+faceSize*2/5, y-faceSize*2/5, earSize, earSize);

//body
stroke(0, 0, 0);
strokeWeight(3);
fill(163, 113, 5);
ellipse(x + 0, y + 148, faceSize + 10, faceSize + 10);
// face
fill(163, 113, 5);
ellipse(x, y, faceSize, faceSize);



//eyes 
var Face = faceSize /8;
fill(0, 0, 0);
ellipse(x - faceSize / 4, 90, Face, Face);
ellipse(240, 90, Face, Face);



//nose
fill(89, 52, 20);
ellipse(x, y+faceSize/8, faceSize*4/15, faceSize/5);

//arms

// rect(x - 159, y, 129, 50);


//feet

var f1 = function() {
    stroke(255, 0, 0);
    rotate(-15);
    translate(-103, 20);
    ellipse(x - 59, y + 213, earSize - 10, earSize + 20);
};

f1();

var f2 = function() {
    stroke(255, 0, 0);
    rotate(30);
    translate(157, -149);
    ellipse(x + 59, y + 213, earSize - 10, earSize + 20);
};

f2();

};

bear();


var hands = function() {
    stroke(0, 0, 0);
    var h = 108;
    line(x - 78, y + 142, x - 216, h);
    line(x + 24, y + 113, x + 67, h - 74);
    
};

hands();
