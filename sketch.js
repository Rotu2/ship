var boat, boat_moving;
var sea, ocean;


function preload(){
  boat_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  sea = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");
  
    
  ocean = createSprite(400, 200);
  ocean.addImage(sea);
  ocean.scale = 0.3;
  ocean.velocityX = -5; 
  
  boat = createSprite(130,200,30,30);
   boat.addAnimation("moving", boat_moving);
  boat.scale = 0.25;

}

function draw() {
  background(0);
  fill("black");
  textSize(20);
  text("Happy Fathers Day", 5, 150);
  ocean.velocityX = -3; 
  
  if (ocean.x < 0){
    ocean.x = ocean.width /8;
}
    drawSprites();
   
   // console.log("true");
  

}