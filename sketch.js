
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world;
var ground;
var box1, box2;


function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  
  box1=new Box(500,100,50,50);

  box2=new Box(520,50,50,100);

  ground=new Ground(600,390,1200,10)
  //console.log(ball);

 
 
}

function draw() {
  background("gold");
  Engine.update(engine);

  
  box1.display();
  box2.display();
  ground.display();
  
}