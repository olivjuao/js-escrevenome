function setup() {
    createCanvas(400, 400);
    background("black");
  }
  
  function draw() {
    
    
    stroke ("blue");
    fill("green");
    
    // console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  
    
  }
  