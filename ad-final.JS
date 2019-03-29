//background

background(136, 67, 204);

fill(109, 10, 171);
noStroke();
rect(248, 304, 165, 272);

fill(255, 255, 255);
textSize(30);
text("Dairy Milk!", 254, 339);

textSize(23);
text("Melt with Joy!", 261, 387);
// ice creams

var ICdraw = function (x, y, z, Z) {
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(219, 117, 21);
    triangle(x, Z, y, Z, z, 284);
    var hw = "Help ";
    textSize(22);
    
    if (x < 100) {
        fill(255, 0, 77);
        stroke(128, 44, 70);
        strokeWeight(2);
        text( hw + "Stimulates the Brain!", 7, 319);
    } else if (x > 100 && x < 200) {
        fill(30, 224, 16);
        strokeWeight(2);
        stroke(31, 252, 90);
        text( hw + "You Smile!", 11, 352);
    }
    
    else {
        fill(247, 247, 247);
        strokeWeight(2);
        stroke(242, 239, 239);
        text( hw + "Gain Nutrients!", 11, 385);
    }
    arc(z, Z + 1, 106, -150, 1, 180);
    
};

//arc(150, 278, 122, -150, 1, 180);
var x = 0;
draw = function() {
    noStroke();
    fill(136, 67, 204);
    rect(0, 0, 400, 113);
    fill(255, 255, 255);
    textSize(30);
    text("Ice Cream!", 141, 30);
    
    
    if (x > 100) {
        ICdraw(20, 120, 70, 187);
        
    } 
    if (x > 200) {
        ICdraw(140, 240, 190, 187);
    
    }
    
    if (x > 300) {
        ICdraw(260, 360, 310, 187);
    }
    
    if (x > 410) {
        fill(232, 152, 60);
        textSize(30);
        text("BUY NOW!!", 120, 92);
    }
    image(getImage("avatars/mr-pink-green"), x, 40, 80, 68);
    x += 1;
};



