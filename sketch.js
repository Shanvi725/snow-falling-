const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var snow = [];
var bgImg;

function Preload(){

  bgImg = loadImage("snow1.jpg");

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bgImg); 
  
  Engine.update(engine);

    
  if(frameCount % 60===0){
    snow.push(new Snow(random(width/2-10, width/2+10), 10))
  }

  
  for (var p = 0; p < snow.length; p++) {
    snow[p].display();
  }


}