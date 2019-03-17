var bookO = [
    {
        title: "The Giver",
        author: "Lois Lowry",
        stars: 2
    }, 
    {   title: "TKAM",
        author: "Harper Lee",
        stars: 3
    },
    {   title: "LOTF",
        author: "William Golding",
        stars: 4
    },
    {   title: "The Hatchet",
        author: "Gary Paulsen",
        stars: 5
    }
    
];

var bookTW = [
    {
        title: "Nobody",
        author: "Harry Ming",
        stars: 2
    }, 
    {   title: "Romeo/Juliet",
        author: "William Shakesphere",
        stars: 3
    },
    {   title: "Macbeth",
        author: "William Shakesphere",
        stars: 4
    },
    {   title: "Sherlock Holms",
        author: "Arthur Conan Doyle",
        stars: 5
    }
    
];
   
var bookTH = [
    {
        title: "MOV",
        author: "William Shakesphere",
        stars: 2
    }, 
    {   title: "Hunger Games",
        author: "Suzanne Collins",
        stars: 3
    },
    {   title: "Harry Potter",
        author: "J.K Rowling",
        stars: 4
    },
    {   title: "Jurassic Park",
        author: "Michael Crichton",
        stars: 5
    }
    
];   

var shelf = function (y) {
    
    // draw shelf
    fill(173, 117, 33);
    rect(0, y, width, 10);
};
shelf(120);
shelf(254);
shelf(393);

var W = 93;
var H = 100;

var by = "By: ";
var first = function(z) {
    for (var i = 0; i < bookO.length; i++) {  
    // draw one book
        if (i === 0) {
            fill(255, 0, 0);
        } else if (i === 1) {
            fill(26, 0, 255);
        } else if (i === 2) {
            fill(251, 0, 255);
        }
        else {fill(214, 255, 219);
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
         if (t === 0) {
            fill(255, 0, 0);
        } else if (t === 1) {
            fill(26, 0, 255);
        } else if (t === 2) {
            fill(251, 0, 255);
        }
        else {fill(214, 255, 219);
        }
        
        rect(t * 99 + 1, y, W, H);
        fill(0, 0, 0);
        text(bookTW[t].title, t * 98 + 22, y + 9, 70, 100);
        text(by + bookTW[t].author, t * 98 + 22, y + 44, 70, 100);
    }
};

secon(153);

var third = function(w) {
    for (var p = 0; p < bookTH.length; p++) {  
    // draw one book
         if (p === 0) {
            fill(255, 0, 0);
        } else if (p === 1) {
            fill(26, 0, 255);
        } else if (p === 2) {
            fill(251, 0, 255);
        }
        else {fill(214, 255, 219);
        }
        
        rect(p * 99 + 1, w, W, H);
        fill(0, 0, 0);
        text(bookTH[p].title, p * 98 + 22, w + 9, 70, 100);
        text(by + bookTH[p].author, p * 98 + 20, w + 47, 70, 100);
    }
};

third(292);

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
        image(getImage("cute/Star"), d * 20 + 298, 137 * y - 45  , 15, 30);
        
        }
    }
};

Fstar(1);
Fstar(2);
Fstar(3);
//var x = 0;
//while (x < book.length) {
    //if (x < book[0].stars) {
      //  image(getImage("cute/Star"), x * 20  + 5, 90, 20, 30);
        //x++;
    

