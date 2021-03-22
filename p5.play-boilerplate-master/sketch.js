const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,obj,ball;


function setup() {

  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var obj_options={
    isStatic:true
  }
  // JSoN=javascript object notation  
  obj=Bodies.rectangle(200,390,500,20,obj_options);
  World.add(world,obj);
  console.log(obj);

  var ball_options={
    restitution:5
  }
  // JSoN=javascript object notation  
  ball=Bodies.circle(200,200,30,ball_options);
  World.add(world,ball);

}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER); 
  rect(obj.position.x,obj.position.y,500,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);

  
  

  
}