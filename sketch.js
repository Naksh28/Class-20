var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(200,200,40,70);
  movingRect.shapeColor = "blue";
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x-fixedRect.x<(movingRect.width+fixedRect.width)/2
  && fixedRect.x-movingRect.x<(movingRect.width+fixedRect.width)/2
  && movingRect.y-fixedRect.y<(movingRect.height+fixedRect.height)/2
  && fixedRect.y-movingRect.y<(movingRect.height+fixedRect.height)/2){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  else {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "blue";
  }

  drawSprites();
}