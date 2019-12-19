var diameter = 10;

function setup() {
  createCanvas (500, 500);
}

function draw() {
  background (159, 219, 245);

//Snowman's body
    fill(255);
    stroke(0);
  ellipse(250, 150, 85, 85);
  ellipse(250, 235, 100, 100);
  ellipse(250, 350, 150, 150);

//Eyes
    fill(0);
  ellipse(240, 140, diameter, diameter)
  ellipse(265, 140, diameter, diameter)

//Hat
    fill(0);
    stroke(255);
  rect(200, 105, 100, 5, 5);
  rect(225, 55, 50, 50, 5);

//Arms
    fill(77, 44, 1);
    stroke(0);
  rect(126, 225, 75, 5);
  rect(298, 225, 75, 5);

//Smile
    fill(0);
  ellipse(230, 170, 5, 5);
  ellipse(225, 165, 5, 5);
  ellipse(235, 175, 5, 5);
  ellipse(242, 176, 5, 5);
  ellipse(250, 176, 5, 5);
  ellipse(257, 176, 5, 5);
  ellipse(265, 175, 5, 5);
  ellipse(270, 170, 5, 5);
  ellipse(275, 165, 5, 5);

//Nose
  fill(252, 186, 3);
triangle(mouseX, mouseY, 250, 170, 250, 145, 310, 150);

fill(100, 0, 0);
stroke(0, 100, 0);
textSize (35)
text ('Happy Holidays!', 125, 45);

fill(0, 100, 0);
stroke(100, 0, 0);
textSize (35)
text ('Happy Holidays!', 127, 42);
}
