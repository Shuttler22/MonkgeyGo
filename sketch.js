
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var gameState;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score
var bananaGroup, obstacleGroup;
var ground1, groundImage;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png", "sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 groundImage = loadImage("trexground.png");
}



function setup() {
  createCanvas(600, 600);
  ground1 = createSprite(300, 550, 600, 10);
  
  monkey = createSprite(200, 500, 10, 10)
  ground1.velocityX = -4;
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;
  monkey.collide(ground1);
  bananaGroup = new Group();
  obstacleGroup = new Group();
  ground1.addImage("moving", groundImage);
  
}


function draw() {
 if(gameState === PLAY){ background("white");
   if(monkey.isTouching(bananaGroup)){
bananaGroup.destroyEach();
    
  }
  if(obstacleGroup.isTouching(monkey)){
  gameState = END;
  }
    if(keyDown("space") && monkey.y >= 380){
monkey.velocityY = - 12 }
  monkey.velocityY = monkey.velocityY + 0.4
  monkey.collide(ground1);
 
  ground1.x = ground1.width/2;
  
  pathar();
  
  
kela();
                       }
  else if (gameState === END){
     obstacleGroup.velocityX = 0;
    bananaGroup.velocityX = 0;
    textSize(20);
    text("GameOver", 300, 300)
    bananaGroup.destroyEach();
    obstacleGroup.destroyEach();
    monkey.destroy();
    ground1.velocityX = 0;
  }
  drawSprites();
}
function kela(){
  if( frameCount%80===0){
banana = createSprite(-1, Math.round(random(120, 200)), 10, 10);
  banana.velocityX = 4
    banana.scale = 0.2
    banana.addImage(bananaImage);
    banana.lifetime = -1;
   bananaGroup.add(banana);
}
}
function pathar(){
if ( frameCount%300 === 0){
rock = createSprite(401, ground1.y - 20, 10,10);
  rock.velocityX = -4;
  rock.addImage(obstaceImage);
  console.log(rock.y)
  rock.scale = 0.2;
  obstacleGroup.add(rock);
}
}




