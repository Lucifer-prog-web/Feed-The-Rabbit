var garden,rabbit,apples,applesImg;
var gardenImg,rabbitImg;
var mouse;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png")
}

function createApple(){
  if(frameCount%80===0){
    apples = createSprite(random(50,350),40,10,10);
    apples.addImage(applesImg);
    apples.scale = 0.1;
    apples.velocityY = 4;
  }
  
  
}

function createLeaf(){
  if(frameCount%80===0){
    leaf = createSprite(random(50,350),40,10,10);
    leaf.scale = 3;
    leaf.velocityY = 4;
  }
  

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //moving the rabbit with teh help of mouse
  rabbit.x=mouseX;





  createApple();
  createLeaf();

  drawSprites();
}


