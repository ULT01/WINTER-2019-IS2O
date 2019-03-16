fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(0, 5));
if (answer === 0) {
    text("NOT YET", 176, 200);
    text("IMPLEMENTED!", 159, 229); 
} else if (answer === 1) {
    textSize(14);
    fill(0, 0, 0);
    text('Go to the game!', 158, 232);
} else if (answer === 2) {
    textSize(34);
    fill(60, 255, 0);
    text('Yes!', 170, 232);
} else if (answer === 3) {
    textSize(15);
    fill(255, 255, 0);
    text('Go to room 3!', 158, 232);
} else {
    textSize(34);
    fill(163, 31, 48);
    text('No!', 177, 232);
}
