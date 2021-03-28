const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,box;
var ground

function setup() {
  createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
 var option={
   isStatic:false
 }
box=Bodies.rectangle(200,200,50,50,option)
World.add(world,box)
var groundoption={
  isStatic:true
}
ground=Bodies.rectangle(200,380,400,50,groundoption)
World.add(world,ground)
}


function draw() {
  background("cyan");
  Engine.update(engine)
  rectMode(CENTER)  
 rect(box.position.x,box.position.y,50,50) 
 rect(ground.position.x,ground.position.y,400,50)
}