var retMovendo;
var retFixo;

function setup() {
  createCanvas(800,400);
  retMovendo = createSprite(200,200,50,70);
  retMovendo.shapeColor="yellow";
  retMovendo.debug = true

  retFixo = createSprite(200,250,80,90);
  retFixo.shapeColor="blue";
  retFixo.debug = true

  
}

function draw() {
  background("black"); 
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY; 

  if(retMovendo.x - retFixo.x < retFixo.width/2 + retMovendo.width/2 && 
    retFixo.x - retMovendo.x < retFixo.width/2 + retMovendo.width/2 &&
    retMovendo.y - retFixo.y < retFixo.height/2 + retMovendo.height/2 &&
    retFixo.y - retMovendo.y < retFixo.height/2 + retMovendo.height/2){
    retFixo.shapeColor="red";
    retMovendo.shapeColor="purple";
  }else{
    retMovendo.shapeColor="yellow";
    retFixo.shapeColor="blue";
  }

  drawSprites();
}