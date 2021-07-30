
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;
var jumpSound;
var BananaGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}

function setup() {
  //canvas(600,600)
  monkey = createSprite(80,315,30,30)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.3;
  
  ground = createSprite(400,350,900,10);
  ground.x = ground.width /2;
  ground.velocityX=-4;
  
  BananaGroup = new Group();
  obstaclesGroup = new Group();
  
  
}

function draw() {
  background("red");
  
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       // jumpSound.play();
    }
  //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  //stop trex from falling down
  monkey.collide(ground);
  
   score = score + Math.round(getFrameRate()/60);
  var survivalTime = createSprite(100,100,10,10);
  stroke("black");
  textSize(20);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+ survivalTime,100,50);
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
}
function spawnBananas(){
 if (frameCount % 60 === 0){
   var banana = createSprite(180,165,10,40);
   banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale = 0.178;
   banana.velocityX = -3;
   
   
    banana.lifetime = 200;
    
   BananaGroup.add(banana);
 }  
}
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(180,165,10,40);
   obstacle.velocityX = -(6 + score/100);
   
    obstacle.addImage("obstacle",obstacleImage);
   obstacle.scale = 0.18;
              
    
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}






