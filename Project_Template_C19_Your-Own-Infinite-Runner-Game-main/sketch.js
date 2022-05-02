var bkimg;
var bk
var chao
var obstaculo1,obstaculo2,obstaculo3
var coelho, coelho_img

function preload(){
bkimg=loadImage("fundo.png")
obstaculo1=loadImage("cactus.png")
obstaculo2=loadImage("arbusto.png")
obstaculo1=loadImage("pedra.png")
coelho_img=loadAnimation("slide1.PNG","slide2.PNG","slide3.PNG","slide4.PNG","slide5.PNG","slide6.PNG",)
}

function setup() {
 createCanvas (600,450)
bk=createSprite (300,225,662,497)
bk.addImage(bkimg)

chao=createSprite (50,430,width*2,20)
coelho=createSprite (200,200)
coelho.addAnimation("run",coelho_img)
chao.visible=false
}

function draw() {
 background(51)
//comando para o coelho pular
 if (keyDown("space")) {
  coelho.velocityY=-10   
 }
//gravidade do coelho
coelho.velocityY=coelho.velocityY+0.5
coelho.collide(chao)
 drawSprites()
}