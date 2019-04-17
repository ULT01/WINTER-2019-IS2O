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
        // this.onClick();
        
    }
};

//drawing button 1
var btn1 = new Button({
    x: 12,
    y: 354,
    w: 68,
    height: 44,
    color: color(163, 20, 199),
    label: "REDO",
    onClick: function() {
     
    }
    
});
    
