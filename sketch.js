var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor="gray";
  speed=random(55,90);
  weight=random(400,1500);
  deformation=0.5*weight*speed*speed/22500;
}

function draw() {
  background("black");
  if(car.x-wall.x>car.width/2+wall.width/2) {
    if(deformation<100){
      car.shapeColor="green";
    }
    if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }
    if(deformation>180){
      car.shapeColor="red";
    }
  } 
  else{
    car.shapeColor="white";
  }
  drawSprites();
}