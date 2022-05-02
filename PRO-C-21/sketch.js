
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world

var bola2
var bola
var solo
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var solo_options={
	isStatic: true 
}
var bola_options={
	restitution:0.1,
	frictionAir:0.3
}

var bola2_options={
	restitution:0.3,
	frictionAir:0.1
}

solo = Bodies.rectangle (400,690,800,20,solo_options)
World.add(world,solo)
	
bola = Bodies.circle (600,30,20,bola_options)
World.add(world,bola)
Engine.run(engine);


bola2 = Bodies.circle (470,36,100,bola2_options)
World.add(world,bola2)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rect(solo.position.x,solo.position.y,800,20)
  ellipse (bola.position.x,bola.position.y,20)
  ellipse (bola2.position.x,bola2.position.y,100)
 

  if (keycode==UP_ARROW){
	  forca()
  }

  drawSprites();
 
}


function forca(){
Body.applyForce(bola2,{x:0,y:0},{x:1,y:1})
}

