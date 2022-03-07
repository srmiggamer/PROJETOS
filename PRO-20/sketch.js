
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var chao
var victor
var jefferson
var pedrao

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

var victor_opition = {
	restitution: 0.7,
	friction: 0.01,
	frictionAir: 0.1,
}

var pedrao_opition = {
	restitution: 0.6,
	friction: 0.03,
	frictionAir: 0.4,
}

var jefferson_opition = {
	restitution: 0.9,
	friction: 0.05,
	frictionAir: 0.6,
}
var chao_opition = {
isStatic: true


}
chao = Bodies . rectangle(400,690,800,20,chao_opition) 
World.add(world, chao)
victor = Bodies . rectangle(500,20,180,2,victor_opition) 
World.add(world, victor)
pedrao = Bodies . circle(300,20,200,pedrao_opition)
World.add(world, pedrao)
jefferson = Bodies . circle(200,20,130,jefferson_opition)
World.add(world, jefferson)

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

rect (victor.position.x,victor.position.y,180,2)
circle (pedrao.position.x,pedrao.position.y,200)
circle (jefferson.position.x,jefferson.position.y,130)
 fill ("yellow")
rect (chao.position.x,chao.position.y,800,20)
drawSprites();
 

}



