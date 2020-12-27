var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);

  speed=random(223,321);

  weight=random(30,52);

  thickness=random(22,83);
  
  bullet=createSprite(50,200,50,20);
  bullet.velocityX=speed;
  bullet.shapeColor="blue";

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="purple";
  
}

function draw() {
  background("black");  



  if(hasCollided(bullet,wall)){
    
    bullet.velocityX=0;
   
    var damage=0.5 * weight * speed * speed /(thickness * thickness * thickness);

    if(damage>10){
     
      wall.shapeColor="red";

    }
    if(damage<10){
     
      wall.shapeColor=color(0,255,0);

    }
  }

  drawSprites();
}

