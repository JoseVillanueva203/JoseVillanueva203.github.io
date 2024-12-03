var ellipseX = 100;
var ellipseY = 200;


function setup() {
 // put setup code here
    createCanvas(1000,1000);
    background('black');
    
}

function draw() {
  // put drawing code here

    if(mouseIsPressed){
      let c1 = color('blue');
      fill(c1);
      stroke('white');
      strokeWeight(3);
      ellipse(mouseX,mouseY,100,100);
    }
    else {
      let c2 = color('yellow');
      fill(c2);
      stroke('white');
      strokeWeight(3);
      triangle(30+mouseX,-75+mouseY,-58+mouseX,20+mouseY,36+mouseX,58+mouseY);
    }
    if(mouseIsPressed){
      let c3 = color('green');
      fill(c3);
      stroke('white');
      strokeWeight(3);
      rect(mouseX,mouseY,150,75);
    }
}
