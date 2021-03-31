var wall, bullet;
var weight;
var speed;
var thikness;

function setup() {
  createCanvas(800,400);
  weight= Math.round(random(30, 52));
  speed= Math.round(random(223, 321));
  thikness=Math.round(random(23, 68));
  bullet = createSprite(400, 200, 50, 50);
  wall = createSprite(750, 200, thikness, 200);
  wall.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  
    bullet.velocityX=speed/10;
  
  if(bullet.x-wall.x<wall.width/2+bullet.width/2 && wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0;
    text("Damage is "+damage(weight, speed, thikness) , 400, 300);
    text("Damage Rating is "+rating(damage(weight, speed, thikness)), 400, 320);
    if(rating(damage(weight, speed, thikness))==="lethal"){
      wall.shapeColor="red";
    }
    else{
      wall.shapeColor="green";
    }
  }
  
  
}
var w, s;
function damage(w, s, t){
  return Math.round((w*s*s)/(t*t*t));
}
var d;
function rating(d){
  if(d>=10){
    return "lethal";
  }
  
  else{
    return "good";
  }
}