var bg,bgImg;
var player;
var playerImg , playershoot , playershootImg;
var alien1,alien2,nave,alien1Img,alien2Img,naveImg;
var heart_1,heart_2,heart_3,heart_1Img,heart_2Img,heart_3Img;
var life = 3;
var gameState = "fight"


function preload(){
  bgImg = loadImage("assets/background_soloLunar.webp")
  playerImg = loadImage("assets/p5.png")
  playershootImg = loadAnimation("assets/p1.png","assets/p2.png","assets/p3.png","assets/p4.png")
  //playershootImg = loadAnimation("assets/p1.png")
  alien1Img = loadImage("assets/alien1.gif")
  alien2Img = loadImage("assets/alien2.gif")
  naveImg = loadImage("assets/nave.gif")
  heart_1Img = loadImage("assets/heart_1.png")
  heart_2Img = loadImage("assets/heart_2.png")
  heart_3Img = loadImage("assets/heart_3.png")
}



function setup() {
  createCanvas(windowWidth,windowHeight );
  //adicionar a imagem de fundo
  bg = createSprite(displayWidth/2,displayHeight/2 + 130,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
 
  heart_1 = createSprite(width-150,160,10,10)
  heart_1.addImage(heart_1Img)
  heart_1.scale = 0.2

  heart_2 = createSprite(width-90,160,10,10)
  heart_2.addImage(heart_2Img)
  heart_2.scale = 0.2

  heart_3 = createSprite(width-150,160,10,10)
  heart_3.addImage(heart_3Img)
  heart_3.scale = 0.2

  heart_1.visible = false;
  heart_2.visible = false;

  player = createSprite(displayWidth-1150,displayHeight-300,50,50)
  player.addImage(playerImg)
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle",0,0,100,100)
  player.addAnimation("shooting",playershootImg)
 


}

function draw() {
  background(0); 
  if(life === 3){
    heart_3.visible = true
    heart_2.visible = false
    heart_1.visible = false

  }
  if(life === 2){
    heart_2.visible = true
    heart_3.visible = false
    heart_1.visible = false
  }
  if(life === 1){
    heart_1.visible = true
    heart_2.visible = false
    heart_3.visible = false
  }
  if(life === 0){
    heart_3.visible = false
    heart_2.visible = false
    heart_1.visible = false
    player.destroy()
  }
  if(gameState === "fight"){
    if(keyDown("left")){
      player.x = player.x - 5
    }
    if(keyDown("right")){
      player.x = player.x + 5
    }
    if(keyDown("up")){
      player.y = player.y - 5
    }
    if(keyDown("down")){
      player.y = player.y + 5
    }
    if(keyWentDown("space")){
      player.changeAnimation("shooting")
    }


  }
  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando touches (toques)

  //libere as balas e mude a imagem do personagem para a posição de tiro quando a tecla espaço for pressionada

  drawSprites();
}
 function inimigo1(){
  if(frameCount%50===0){
    alien1 = createSprite(random(500,1000),random(100,300),15,15)

  }
 }