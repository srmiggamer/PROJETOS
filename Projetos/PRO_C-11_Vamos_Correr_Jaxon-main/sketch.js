var pista,Jefferson;
var pistaimg,Jeffersonimg;

function preload(){
  //imagens pré-carregadas
pistaimg=loadImage("path.png");
Jeffersonimg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
pista=createSprite(200,200);
pista.addImage(pistaimg);
pista.velocityY=4;

  //criando jefferson
Jefferson=createSprite(180,320,30,30)
Jefferson.addAnimation("Jeffersonimg",Jeffersonimg)
Jefferson.scale=0.05
}


function draw() {
  background(0);
Jefferson.x=mouseY




if(pista.y>400)(
  pista.y= height/2
)



  drawSprites()
}
