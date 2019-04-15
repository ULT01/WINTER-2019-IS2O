// Scroll down to "About" for instructions on this project ↓


var Tile = function(x, y, face) {
    this.x = x;
    this.y = y;
    this.width = 70;
    this.face = face;
    this.isFaceUp = false;
    this.isMatch = false;
};

Tile.prototype.draw = function() {
    fill(214, 247, 202);
    strokeWeight(2);
    rect(this.x, this.y, this.width, this.width, 10);
    if (this.isFaceUp) {
        image(this.face, this.x, this.y, this.width, this.width);
    } else {
        image(getImage("avatars/leaf-green"), this.x, this.y, this.width, this.width);
    }
};

Tile.prototype.isUnderMouse = function(x, y) {
    return x >= this.x && x <= this.x + this.width  &&
        y >= this.y && y <= this.y + this.width;
};

// Global config
var NUM_COLS = 5;
var NUM_ROWS = 4;

// Declare an array of all possible faces
var faces = [
    getImage("avatars/leafers-seed"),
    getImage("avatars/leafers-seedling"),
    getImage("avatars/leafers-sapling"),
    getImage("avatars/leafers-tree"),
    getImage("avatars/leafers-ultimate"),
    getImage("avatars/marcimus"),
    getImage("avatars/mr-pants"),
    getImage("avatars/mr-pink"),
    getImage("avatars/old-spice-man"),
    getImage("avatars/robot_female_1")
];

// Make an array which has 2 of each, then randomize it
var possibleFaces = faces.slice(0);
var selected = [];
for (var i = 0; i < (NUM_COLS * NUM_ROWS) / 2; i++) {
    // Randomly pick one from the array of remaining faces
    var randomInd = floor(random(possibleFaces.length));
    var face = possibleFaces[randomInd];
    // Push twice onto array
    selected.push(face);
    selected.push(face);
    // Remove from array
    possibleFaces.splice(randomInd, 1);
}

// Now shuffle the elements of that array
var shuffleArray = function(array) {
    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var ind = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[ind];
        array[ind] = temp;
    }
};
shuffleArray(selected);

// Create the tiles
var tiles = [];
for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        var tileX = i * 78 + 10;
        var tileY = j * 78 + 40;
        var tileFace = selected.pop();
        tiles.push(new Tile(tileX, tileY, tileFace));
    }
}

background(255, 255, 255);

var numTries = 0;
var numMatches = 0;
var flippedTiles = [];
var delayStartFC = null;

mouseClicked = function() {
    for (var i = 0; i < tiles.length; i++) {
        var tile = tiles[i];
        if (tile.isUnderMouse(mouseX, mouseY)) {
            if (flippedTiles.length < 2 && !tile.isFaceUp) {
                tile.isFaceUp = true;
                flippedTiles.push(tile);
                if (flippedTiles.length === 2) {
                    numTries++;
                    if (flippedTiles[0].face === flippedTiles[1].face) {
                        flippedTiles[0].isMatch = true;
                        flippedTiles[1].isMatch = true;
                        flippedTiles.length = 0;
                        numMatches++;
                    }
                    delayStartFC = frameCount;
                }
            } 
            loop();
        }
    }
};

//defining variale for time
var x = 0;

//button
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.w = config.width || 80;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.color = config.color || color(207, 85, 85);
    this.onClick = config.onClick || function() {};
};
//protype of button
Button.prototype.draw = function() {
     if (this.isMouseInside() && mouseIsPressed) {
        fill(255, 255, 255);
    }
    else {
       fill(this.color); 
    }
    fill(this.color);
    rect(this.x, this.y, this.w, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(CENTER, CENTER);
    text(this.label, this.x + 35, this.y + 19);
    };

//clicking the button

//check if mouse cursor is inside the button
Button.prototype.isMouseInside = function() {
    return mouseX > this.x-this.w/2 &&
           mouseX < (this.x + this.w/2) &&
           mouseY > this.y - this.height/2 &&
           mouseY < (this.y + this.height/2);
};

//handle mouse clicks for the button
Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
        draw();
    }
};


//defiing first button
var btn1 = new Button({
    x: 12,
    y: 354,
    w: 68,
    height: 44,
    color: color(163, 20, 199),
    label: "REDO",
    onClick: function() {
      Tile.draw();
    }
    
});



draw = function() {
    background(255, 255, 255);
    if (delayStartFC && (frameCount - delayStartFC) > 30) {
        for (var i = 0; i < tiles.length; i++) {
            var tile = tiles[i];
            if (!tile.isMatch) {
                tile.isFaceUp = false;
            }
        }
        flippedTiles = [];
        delayStartFC = null;
        noLoop();
    }
    
    
    
    
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].draw();
    }
    
    
    
    //adding time feature
    
    fill(0, 0, 0);
    textSize(20);
    text(x, 35, 25);
    x+= 0.019;
    
 
    
    btn1.draw();
    
    
    stroke(0, 0, 0);
    if (numMatches === tiles.length/2) {
        
        textSize(20);
        
        //adding different win stages based on number of tries
        if (20 >= numTries && x < 60) {
            image(getImage("cute/Star"), 155, 325, 40, 80);
            image(getImage("cute/Star"), 207, 325, 40, 80);
            image(getImage("cute/Star"), 259, 325, 40, 80);
            image(getImage("cute/Star"), 311, 325, 40, 80);
            image(getImage("cute/Star"), 363, 325, 40, 80);
            fill(28, 189, 36);
        }
        
        else if (30 >= numTries && x < 60) {
            image(getImage("cute/Star"), 155, 325, 40, 80);
            image(getImage("cute/Star"), 207, 325, 40, 80);
            image(getImage("cute/Star"), 259, 325, 40, 80);
            image(getImage("cute/Star"), 311, 325, 40, 80);
            fill(28, 189, 36);
        }
        else if (x < 60) {
            image(getImage("cute/Star"), 155, 325, 40, 80);
            image(getImage("cute/Star"), 207, 325, 40, 80);
            image(getImage("cute/Star"), 259, 325, 40, 80);
            fill(28, 189, 36);
        } else if (x < 120) {
        image(getImage("cute/Star"), 155, 325, 40, 80);
        image(getImage("cute/Star"), 207, 325, 40, 80);
        fill(222, 167, 27);
        } else {
            image(getImage("cute/Star"), 155, 325, 40, 80);
            fill(222, 13, 13);
        }
        //change position of text
        text("You found them all in " + numTries + " tries!", 100, 25);
    }
};

noLoop();
