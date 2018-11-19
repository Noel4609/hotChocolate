var marshX = 300;
var marshY = -150;
var marshWidth = 100;
var marshHeight = 100;
var marshRadius = 20;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background("#2E282A"); //an RGB color for the canvas' background
}

//The draw function happens over and over again
function draw() {
    fill("FDFFFC"); //white
    stroke("#FDFFFC");
    rect (marshX,marshY,marshWidth,marshHeight, marshRadius);//marshmellow

  //circle
    stroke("#82DDF0");//lightblue
    strokeWeight(20);
    fill("#2E282A");//black
    ellipse(225,325,150,200); // cup handles, 20px dia
 
    stroke("#82DDF0"); // an RGB color for the circle's border blue
    fill("#82DDF0"); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255)) lightblue
    rect (255,200,200,250);//cup
}

function mousePressed() {
  background("#2E282A"); //an RGB color for the canvas' background
    marshY = marshY + 30;

        if(marshY > 200) {
        marshY = -150;

    }

}