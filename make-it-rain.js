var xPositions = [50, 100, 150, 200, 250, 300, 350, 50, 52, 53, 60, 30, 20, 310,312, 320, 390, 380, 222, 230, 134, 45, 90, 67, 87];
var yPositions = [0, 50, 148, 50, 100, 0, 28, 11, 13, 15, 17, 19, 2, 3, 4 , 90, 48, 30, 20, 25, 43, 56, 78, 23, 45];
var colors = [color(168, 9, 9), color(171, 101, 101), color(54, 90, 156), color(198, 201, 24), color(166, 11, 209), color(116, 16, 166), color(19, 189, 175), color(168, 9, 9), color(171, 101, 101), color(54, 90, 156), color(198, 201, 24), color(166, 11, 209), color(116, 16, 166), color(19, 189, 175), color(168, 9, 9), color(171, 101, 101), color(54, 90, 156), color(198, 201, 24), color(166, 11, 209), color(116, 16, 166), color(19, 189, 175), color(168, 9, 9), color(171, 101, 101), color(54, 90, 156), color(198, 201, 24)];


var rand= floor(random(0, 7));

var draw = function() {
    background(204, 247, 255);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(colors[i]);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        rect(xPositions[i] + 20, yPositions[rand], 10, 10);
        yPositions[i] += 4;
        
        if (yPositions[i] === 400) {
            yPositions[i] -= 400;
        }
        
       
       
    }
    
};


mouseClicked = function() {
    
    if (mouseX > 200) {
        colors.push(color(255, 255, 255));
        
    }	else {
            colors.push(color(0, 0, 0));
         }
    
    xPositions.push(mouseX);
    yPositions.push(mouseY);
    
    
};

    
