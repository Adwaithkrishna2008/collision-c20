  var fixedRect,movingRect; 
  
  
function setup() { createCanvas(1200,400); 
  movingRect= createSprite(600, 200, 80, 50); 
  movingRect.shapeColor="green"; 
  fixedRect= createSprite(400, 200, 30, 80);
   fixedRect.shapeColor="green";







}
 function draw() { background(255,255,255);
   console.log(movingRect.x-fixedRect.x)
    movingRect.x=World.mouseX;
     movingRect.y=World.mouseY; 
   if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2)  
   { movingRect.shapeColor="red";
    fixedRect.shapeColor="red"; } 
   else{ movingRect.shapeColor="green"; 
   fixedRect.shapeColor="green"; } 



  drawSprites(); }