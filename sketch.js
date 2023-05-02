function setup() {
  createCanvas(windowWidth, windowHeight);
  
  angleMode(DEGREES);
  rectMode(CENTER);
}

let 크기 = 100;


function draw() {
  background(20, 20, 20);
  translate(width/2, height/2);
  
  noFill();
  stroke(50,0,200);
  
  for(i = 0; i < 100; i++){
    push();
      
    var R = map(40, 0, 200, 50, 1);
    var G = map(mouseX, 0, 200, 200, 1);
    var B = map(mouseY, 0, 200, 200+i*2, 1);
    
    stroke(R*i, G+i*2, B);
    
    
    rotate(sin(frameCount+i)*50)
    rect(sin(frameCount+i)*mouseX, tan(frameCount+i)*mouseY, i*10, i*30, 50+i*20);
    pop();
  }
}