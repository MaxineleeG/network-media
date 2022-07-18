function setup() {
    createCanvas(1000, 1070);
    portrait= loadImage('/Users/Crabbie/Documents/Network Media Final/me.png');
    portraitSad = loadImage('/Users/Crabbie/Documents/Network Media Final/me2.png');
  
  }
  
  function draw() {
    background(220);
    if(mouseX > 300, mouseY > 300) {
      image(portraitSad, 0, 0);
    }else{
      image(portrait, 0, 0);
    }
    
  }