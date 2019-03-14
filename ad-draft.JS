//background

background(136, 67, 204);

fill(109, 10, 171);
noStroke();
rect(248, 304, 165, 272);

fill(255, 255, 255);
textSize(30);
text("MELT with JOY!", 102, 30);
textSize(30);
text("Dairy Milk!", 254, 339);

textSize(23);
text("Ice Cream!", 278, 387);

// ice creams

var ICdraw = function (x, y, z, Z) {
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(219, 117, 21);
    triangle(x, Z, y, Z, z, 252);
    var hw = "Help ";
    
    if (x < 100) {
        fill(255, 0, 77);
        stroke(128, 44, 70);
        strokeWeight(2);
        text( hw + "stimulates the brain!", 7, 319);
    } else if (x > 100 && x < 200) {
        fill(30, 224, 16);
        strokeWeight(2);
        stroke(31, 252, 90);
        text( hw + "Smile!", 11, 352);
    }
    
    else {
        fill(247, 247, 247);
        strokeWeight(2);
        stroke(242, 239, 239);
        text( hw + "gain nutrients!", 11, 385);
    }
    ellipse(z, Z - 25, 94, 92);
    
};

var Cdraw = function(x) {
    if (x > 100) {
        ICdraw(20, 120, 70, 152);
        
    } 
    if (x > 200) {
        ICdraw(140, 240, 190, 152);
    
    }
    
    if (x > 300) {
        ICdraw(260, 360, 310, 152);
    }
        
    
};

Cdraw(313);

//ICdraw(20, 120, 70, 152);
//ICdraw(140, 240, 190, 152);
//ICdraw(260, 360, 310, 152);


