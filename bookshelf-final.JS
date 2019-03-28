var bookO = [
    {
        title: "The Giver",
        author: "Lois Lowry",
        colors: color(255, 0, 0),
        stars: 2
    }, 
    {   title: "TKAM",
        author: "Harper Lee",
        colors: color(18, 18, 230),
        stars: 3
    },
    {   title: "LOTF",
        author: "William Golding",
        colors: color(255, 0, 225),
        stars: 4
    },
    {   title: "The Hatchet",
        author: "Gary Paulsen",
        colors: color(214, 255, 219),
        stars: 5
    }
    
];

var bookTW = [
    {
        title: "Nobody",
        author: "Harry Ming",
        colors: color(255, 0, 0),
        stars: 2
    }, 
    {   title: "Romeo/Juliet",
        author: "William Shakesphere",
        colors: color(18, 18, 230),
        stars: 3
    },
    {   title: "Macbeth",
        author: "William Shakesphere",
        colors: color(255, 0, 225),
        stars: 4
    },
    {   title: "Sherlock Holms",
        author: "Arthur Conan Doyle",
        colors: color(214, 255, 219),
        stars: 5
    }
    
];
   
var bookTH = [
    {
        title: "MOV",
        author: "William Shakesphere",
        colors: color(255, 0, 0),
        stars: 2
    }, 
    {   title: "Hunger Games",
        author: "Suzanne Collins",
        colors:  color(18, 18, 230),
        stars: 3
    },
    {   title: "Harry Potter",
        author: "J.K Rowling",
        colors: color(255, 0, 225),
        stars: 4
    },
    {   title: "Jurassic Park",
        author: "Michael Crichton",
        colors: color(214, 255, 219),
        stars: 5
    }
    
];   

var shelf = function () {
    var l = 120;
    while (l < 400) {
        fill(173, 117, 33);
        rect(0, l, width, 10);
        l += 135;
    }
};
shelf();
shelf();
shelf();

var W = 93;
var H = 100;

var rec = 3;

var by = "By: ";
var first = function(z) {
    for (var i = 0; i < bookO.length; i++) {  
    // draw one book
        fill(bookO[i].colors);
        if (i===rec) {
            strokeWeight(2);
            stroke(219, 137, 13);
        } else {
            strokeWeight(2);
            stroke(0, 0, 0);
        }
        rect(i * 99 + 1, z, W, H);
        fill(0, 0, 0);
        text(bookO[i].title, i * 98 + 22, z + 9, 70, 100);
        text(by + bookO[i].author, i * 98 + 22, z + 38, 70, 100);
    }
};

first(20);

var secon = function(y) {
    for (var t = 0; t < bookTW.length; t++) {  
    // draw one book
        fill(bookTW[t].colors);
        if (t===rec) {
            strokeWeight(3);
            stroke(219, 137, 13);
        } else {
            strokeWeight(2);
            stroke(0, 0, 0);
        }
        rect(t * 99 + 1, y, W, H);
        fill(0, 0, 0);
        text(bookTW[t].title, t * 98 + 22, y + 9, 70, 100);
        text(by + bookTW[t].author, t * 98 + 22, y + 44, 70, 100);
    }
};

secon(156);

var third = function(w) {
    for (var p = 0; p < bookTH.length; p++) {  
    // draw one book
        fill(bookTH[p].colors);
        if (p===rec) {
            strokeWeight(3);
            stroke(219, 137, 13);
        } else {
            strokeWeight(2);
            stroke(0, 0, 0);
        }
        rect(p * 99 + 1, w, W, H);
        fill(0, 0, 0);
        text(bookTH[p].title, p * 98 + 22, w + 9, 70, 100);
        text(by + bookTH[p].author, p * 98 + 20, w + 47, 70, 100);
    }
};

third(291);

var ostar = function (y) {
    for (var x = 0; x < 4; x++) {  
    if (x < bookO[0].stars) {
        image(getImage("cute/Star"), x * 20 + 24, 137 * y - 45  , 15, 30);
        
        }
    }
};

ostar(1);
ostar(2);
ostar(3);

var TWstar = function (y) {
    for (var b = 0; b < 4; b++) {  
    if (b < bookO[1].stars) {
        image(getImage("cute/Star"), b * 20 + 114, 137 * y - 45  , 15, 30);
        
        }
    }
};

TWstar(1);
TWstar(2);
TWstar(3);


var THstar = function (y) {
    for (var a = 0; a < 4; a++) {  
    if (a < bookTH[2].stars) {
        image(getImage("cute/Star"), a * 20 + 204, 137 * y - 45  , 15, 30);
        
        }
    }
};

THstar(1);
THstar(2);
THstar(3);

var Fstar = function (y) {
    for (var d = 0; d < 5; d++) {  
    if (d < bookTH[3].stars) {
        image(getImage("cute/Star"), d * 20 + 298, 137 * y - 46  , 15, 30);
        
        }
    }
};

Fstar(1);
Fstar(2);
Fstar(3);

    
