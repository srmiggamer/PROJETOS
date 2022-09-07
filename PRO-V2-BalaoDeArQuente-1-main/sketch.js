var bg, bgImg;
var bottomGround;
var topGround;
var balloon, balloonImg;
var obs_top1, obs_top2, obsBottom1,obsBottom2,obsBottom3;
var obsBottom , obs_top;
var topGroup , bottomGroup;
var btmPlay , btmPlayImg;
var gameState = 0 ;
var gameOver , gameOverImg; 
var restart , restartImg

function preload(){
bgImg = loadImage("assets/bg.png")
obsBottom1 = loadImage("assets/obsBottom1.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")
obs_top1 = loadImage("assets/obsTop1.png")
obs_top2 = loadImage("assets/obsTop2.png")
btmPlayImg = loadImage("assets/play.png")
gameOverImg = loadImage("assets/game-over.png")
restartImg = loadImage("assets/restart.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//imagem de plano de fundo
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//criando canto superior e inferior
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//criando o balão     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

balloon.setCollider("circle", 0, 0, 150);
balloon.debug = true

//criando grupos
bottomGroup = new Group()
topGroup = new Group()

//botão de play
btmPlay=createSprite (200,200)
btmPlay.addImage(btmPlayImg)
btmPlay.scale=0.2

// fim de jogo
gameOver=createSprite (200,185)
gameOver.addImage(gameOverImg)
gameOver.scale=0.6
gameOver.visible = false

// reniciar
restart=createSprite (200,300)
restart.addImage(restartImg)
restart.scale=0.7
restart.visible = false
}

function draw() {
  
  background("black");
  
  //inicio do jogo
  if (gameState == 0){
    if (mousePressedOver(btmPlay)){
     iniciar()
    }
  }
  
  //jogar
  if (gameState == 1){
    gerarObstop()
    gerarObsBottom()
   
  
   //fazendo o balão de ar quente pular
    if(keyDown("space")) {
     balloon.velocityY = -6 ;
              
            }
  //adicionando gravidade
    balloon.velocityY = balloon.velocityY + 1;
  
  //colisão com obstaculos

  if(balloon.isTouching(topGround) 
  || balloon.isTouching(bottomGround) 
  || bottomGroup.isTouching(balloon) 
  || topGroup.isTouching(balloon)) {
gameState = 2
}
}    

//final

if (gameState == 2){
  topGroup.setVelocityXEach (0)
  topGroup.setLifetimeEach (-1)
 
  bottomGroup.setVelocityXEach (0)
  bottomGroup.setLifetimeEach (-1)

  gameOver.visible = true
  gameOver.depth = gameOver.depth + 1

  restart.visible = true
  restart.depth = restart.depth + 1

  if (mousePressedOver(restart)){
  reset()
  }
 
  balloon.y = 200
}

drawSprites();

}


 function gerarObstop (){
  if (World.frameCount%90==0){
    obs_top = createSprite(450,50,40,40)
    obs_top.scale=0.07
    obs_top.velocityX= -4
    obs_top.y= Math.round(random(40,150))
    
  var volue = Math.round(random(1,2))
  switch(volue){
    case 1: obs_top.addImage(obs_top1)
    break

    case 2: obs_top.addImage(obs_top2)
    break
    default: break
  }
  obs_top.lifeTime=400
  topGroup.add(obs_top)

  }
 }

 function gerarObsBottom (){
  if (World.frameCount%80==0){
    obsBottom = createSprite(450,320,40,40)
    obsBottom.scale=0.06
    obsBottom.velocityX= -4
   // obsBottom.y= Math.round(random(40,180))
    
  var volue = Math.round(random(1,3))
  switch(volue){
    case 1: obsBottom.addImage(obsBottom1)
    break

    case 2: obsBottom.addImage(obsBottom2)
    break
    
    case 3: obsBottom.addImage(obsBottom3)
    break
    default: break
  }
  obsBottom.lifeTime=400
  bottomGroup.add(obsBottom)

  }
}
function reset (){
  gameState = 1
  gameOver.visible = false
  restart.visible = false

  topGroup.destroyEach()
  bottomGroup.destroyEach()
}
function iniciar (){
  gameState = 1
  btmPlay.visible = false
}