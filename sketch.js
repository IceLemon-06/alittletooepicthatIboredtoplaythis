const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bg = "./snow1.jpg";
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var snow = [];

function preload() {
   backgroundImg = loadImage(bg);
}



function setup() {
  createCanvas(800,400);
  //snow.push(new Snow(75,75));
  var snow = loadImage("./snow4.webp")
  for (let i = 1; i < 10; i++) {
    star = createSprite(Math.round(random(5,800)),30);
	  star.addImage(snow);
	  star.scale = 0.1;


	  starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	  World.add(world, starBody);
  }
	
 

} 

function draw() {
  background(backgroundImg);  
  drawSprites();

  
}

function keyPressed() {
  if (keyDown("DOWN_ARROW") || keydown("S")) {
    Matter.body.setStatic(starBody, false)
  }
}