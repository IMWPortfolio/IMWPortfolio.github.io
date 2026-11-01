function setup() {
createCanvas(600, 600);
}

function draw() {
background(5, 0, 25)

// lasers
stroke(255, 90, 170, 140);
strokeWeight(6);
line(100, 0, 200, 600);

stroke(170, 80, 255);
strokeWeight(6);
line(200, 0, 160, 600);

stroke(170, 80, 255);
strokeWeight(6);
line(150, 0, 0, 400);

stroke(8, 228, 252);
strokeWeight(6);
line(555, 0, 480, 600);

stroke(255, 0, 200);
strokeWeight(6);
line(600, 20, 0, 480);

stroke(0, 255, 255);
strokeWeight(6);
line(480, 0, 600, 580);

noStroke();

// hair
fill(95, 60, 35);
rect(160, 140, 280, 380, 120, 120, 40, 40);

// neck
fill(235, 190, 160);
rect(250, 400, 100, 120);

// body
fill(85);
ellipse(300, 640, 460, 260);

// face
fill(235, 190, 160);
ellipse(300, 290, 220, 270);

// sideburns
fill(80, 50, 30);
rect(190, 250, 25, 90);
rect(385, 250, 25, 90);

// beard
arc(300, 320, 230, 280, 0, PI);

// stache
fill(70, 45, 25);
ellipse(275, 345, 60, 22);
ellipse(325, 345, 60, 22);

// mouth
fill(150, 60, 60);
ellipse(300, 375, 50, 18);

// nose
fill(220, 170, 140);
triangle(300, 280, 285, 325, 315, 325);

// eyes
fill(255);
ellipse(255, 265, 45, 28);
ellipse(345, 265, 45, 28);

// pupils
fill(0);
circle(255, 265, 16);
circle(345, 265, 16);

// eyebrows
fill(80, 50, 30);
rect(230, 238, 50, 9, 4);
rect(320, 238, 50, 9, 4);

// beanie top
fill(22, 150, 186);
arc(300, 200, 260, 190, PI, TWO_PI);

// beanie bottom
fill(12, 132, 166);
rect(160, 185, 280, 40, 10);
}
