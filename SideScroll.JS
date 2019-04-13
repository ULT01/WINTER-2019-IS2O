var Beaver = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/aqualine-tree");
    this.sticks = 0;
    
    
};

Beaver.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-50);
    image(this.img, this.x, this.y, 40, 40);
};

Beaver.prototype.hop = function() {
    this.img = getImage("avatars/aqualine-tree");
    this.y -=5  ;
    // if (keyIsPressed && keyCode === 1) {
    //     this.y -=15 ;
    // }
};

Beaver.prototype.fall = function() {
    this.img = getImage("avatars/aqualine-tree");
    this.y += 5;
};

Beaver.prototype.checkForStickGrab = function(stick) {
    if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
        (stick.y >= this.y && stick.y <= (this.y + 40))) {
        stick.y -= 400;
        this.sticks += 10;
    }
};

Beaver.prototype.checkForLazerGrab = function(lazer) {
    if ((lazer.x >= this.x && lazer.x <= (this.x + 40)) &&
        (lazer.y >= this.y && lazer.y <= (this.y + 40))) {
        
        lazer.y = -400; 
        this.sticks -= 5;
        
        // this.lazers++ ;
    }
};

Beaver.prototype.checkForobstacleGrab = function(obstacle) {
    if ((obstacle.x >= this.x && obstacle.x <= (this.x + 40)) &&
        (obstacle.y >= this.y && obstacle.y <= (this.y + 40))) {
        
        obstacle.x-= 3; 
        this.sticks -= 1;
        
        // this.lazers++ ;
    }
};

var Lazer = function(x, y) {
    this.x = x;
    this.y = y;
};

var Stick = function(x, y) {
    this.x = x;
    this.y = y;
};

var obstacle = function(x, y) {
    this.x = x;
    this.y = y;
};

obstacle.prototype.draw = function() {
     image(getImage("avatars/duskpin-ultimate"), this.x, this.y, 40, 40);
};

Stick.prototype.draw = function() {
    fill(89, 71, 0);
    rectMode(CENTER);
    rect(this.x, this.y, 5, 40);
};

Lazer.prototype.draw = function() {
    fill(255, 0, 0);
    rectMode(CENTER);
    rect(this.x, this.y, 5, 40);
};

var beaver = new Beaver(200, 400);

var sticks = [];
for (var i = 0; i < 63; i+= 5) {  
    sticks.push(new Stick(i * 40 + 300, random(20, 260)));
}

var lazers = [];
for (var p = 0; p < 63; p++) {  
    lazers.push(new Lazer(p * 40 + 300, random(20, 400)));
}

var obstacles = [];
for (var t = 0; t < 63; t++) {  
    obstacles.push(new obstacle(t * 40 + 300, random(20, 400)));
}
var grassXs = [];
for (var i = 0; i < 63; i++) { 
    grassXs.push(i*20);
}



var a = 10;
var b = 20;
var c = 30;


    // a += 10;
    // b += 10;
    // c += 10;

    mouseClicked = function () {
        
            if (mouseX > 0 && mouseX < 119 && mouseY > 350 && mouseY < 400) {
                // while (a < 30) {
                a += 5;
                b += 5;
                c += 5;
            //  } 
        }
    };

// var score = beaver.sticks - beaver.lazers;  
draw = function() {
    
    
    // static
    background(227, 254, 255);
    fill(130, 79, 43);
    rectMode(CORNER);
    rect(0, height*0.90, width, height*0.10);
    //bytton
    var X = 0;
    var Y = 352;
    fill(255, 0, 0);
    rect(X, Y, 119, 134);
    fill(0, 0, 0);
    text("Increase Speed", X + 4, Y + 30);
    for (var i = 0; i < grassXs.length; i++) {
        image(getImage("cute/GrassBlock"), grassXs[i], height*0.85, 20, 20);
        grassXs[i] -= 1;
        if (grassXs[i] <= -20) {
            grassXs[i] = width;
        }
    }
    
    for (var i = 0; i < sticks.length; i++) {
        sticks[i].draw();
        beaver.checkForStickGrab(sticks[i]);
        sticks[i].x -= 1;
    }
    
   for (var i = 0; i < obstacles.length; i++) {
        obstacles[i].draw();
        beaver.checkForobstacleGrab(obstacles[i]);
        obstacles[i].x -= 1;
    }
    
    for (var i = 0; i < lazers.length; i++) {
        lazers[i].draw();
        beaver.checkForLazerGrab(lazers[i]);
        lazers[i].x -= 1;
        
        fill(255, 234, 0);
        text("Three Stars", 182, 30);
        //Three Stars
        // if (beaver.sticks/sticks.length >= 0.80) {
        //     image(getImage("cute/Star"), 271, -17, 40, 76);
        // } else if (beaver.sticks/sticks.length >= 0.95) {
        //     image(getImage("cute/Star"), 271, -17, 40, 76);
        //     image(getImage("cute/Star"), 318, -17, 40, 76);
        // } else if(beaver.sticks/sticks.length >= 1) {
        //     image(getImage("cute/Star"), 271, -17, 40, 76);
        //     image(getImage("cute/Star"), 318, -17, 40, 76);
        //     image(getImage("cute/Star"), 365, -17, 40, 76);
        // }
        
        // var a = 10;
        // var b = 20;
        // var c = 30;
        
        // mouseClicked = function () {
        //     a += 10;
        //     b += 10;
        //     c += 10;
        // };
        
        if (beaver.sticks >= a && beaver.sticks < b) {
            image(getImage("cute/Star"), 271, -17, 40, 76);
            
        } else if (beaver.sticks  >= b && beaver.sticks < c) {
            image(getImage("cute/Star"), 271, -17, 40, 76);
            image(getImage("cute/Star"), 318, -17, 40, 76);
        } else if(beaver.sticks >=  c) {
            image(getImage("cute/Star"), 271, -17, 40, 76);
            image(getImage("cute/Star"), 318, -17, 40, 76);
            image(getImage("cute/Star"), 365, -17, 40, 76);
        }
           
    }
    
    textSize(18);
    fill(0, 0, 0);
    text("Score: " + beaver.sticks , 20, 30);
    
    beaver.draw(); 
      
    keyPressed = function() {
     if (keyPressed && keyCode === UP) {
        beaver.hop();
    } else {
        beaver.fall();
    }
    
    
    if (keyCode === 'h') {
        background(255, 0, 0);
    }
};

};
