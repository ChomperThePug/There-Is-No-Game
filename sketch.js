var block1, block2, block3, block4, block5;
var Pblock;
var Invisiblock1, Invisiblock2, Invisiblock3;
var border1, border2, border3, border4;
var trophy, trophyI;
var speed = 10;
var timer = 0;
var Message = "";
//Game State Values
var START = 0;
var FOOL = 1;
var REALIZE = 2;
var MOVE = 3;
var WIN = 4;
var gameState = START;
//Trophy State Values
var DEFAULT = 0;
var HELD = 1;
var trophyState = DEFAULT;

function preload() {
  trophyI = loadImage("../Assets/trophy.png");
}

function setup() {
  createCanvas(700, 700);
  //Maze Blocks
  block1 = createSprite(240, 200, 300, 30);
  block2 = createSprite(460, 358, 30, 350);
  block3 = createSprite(80, 335, 30, 300);
  block4 = createSprite(215, 480, 300, 30);
  block5 = createSprite(320, 335, 250, 30);
  //Player Block
  Pblock = createSprite(417.5, 200, 35, 35);
  Pblock.shapeColor = "red";
  //Invisiblock
  Invisiblock1 = createSprite(350, 400, 30, 150);
  Invisiblock1.visible = false;
  Invisiblock2 = createSprite(400, 170, 150, 30);
  Invisiblock2.visible = false;
  Invisiblock3 = createSprite(630, 370, 340, 30);
  Invisiblock3.visible = false;
  //Trophy
  trophy = createSprite(405, 500, 30, 30)
  trophy.addImage(trophyI);
  trophy.scale = 0.5; 
  //Borders
  border1 = createSprite(width / 2, height, width, 20);
  border2 = createSprite(width / 2, 0, width, 20);
  border3 = createSprite(0, height / 2, 20, height);
  border4 = createSprite(width, height / 2, 20, height);
  //Border Visibility
  border1.visible = false;
  border2.visible = false;
  border3.visible = false;
  border4.visible = false;
}

function draw() {
  background(0, 255, 255);
  //Controls
  if (keyDown("Up")) {
    Pblock.velocityY = -speed;
  } else if (keyDown("Down")) {
    Pblock.velocityY = speed;
  } else {
    Pblock.velocityY = 0;
  }
  if (keyDown("Right")) {
    Pblock.velocityX = speed
  } else if (keyDown("Left")) {
    Pblock.velocityX = -speed
  } else {
    Pblock.velocityX = 0;
  }
  //Collisions
  Pblock.collide(border1);
  Pblock.collide(border2);
  Pblock.collide(border3);
  Pblock.collide(border4);
  Pblock.collide(block1);
  Pblock.collide(block2);
  Pblock.collide(block3);
  Pblock.collide(block4);
  Pblock.collide(block5);
  Pblock.collide(Invisiblock1);
  trophy.collide(block1);
  trophy.collide(block2);
  trophy.collide(block3);
  trophy.collide(block4);
  trophy.collide(block5);
  trophy.collide(Invisiblock1);
  //Speech
  textSize(50);
  textAlign(CENTER);
  text(Message, 350, 100);
  //Game States
  if (gameState == START) {
    Pblock.collide(Invisiblock2);
    //Invisiblock1 Activation
    if (intersect(Pblock, Invisiblock1)) {
      gameState = FOOL
    }
  } else if (gameState == FOOL) {
	Invisiblock1.visible = true;
    if (intersect(Pblock, Invisiblock2)) {
      gameState = REALIZE
    }
  } else if (gameState == REALIZE) {
    if (intersect(Pblock, Invisiblock3)) {
      gameState = MOVE
    }
  } else if (gameState == MOVE) {
    //Winning
    if ((proximity(Pblock, trophy, -35) && trophyState == HELD)) {
      gameState = WIN ; 
      console.log("You Win!");
    }
    //Trophy State
    if (mousePressedOver(trophy)) {
      trophyState = HELD;
    } else {
      trophyState = DEFAULT
    }
    //Proximity
    if (proximity(Pblock, trophy, 50) && trophyState == DEFAULT) {
      trophy.x = Math.round(random(100,600))
      trophy.y = Math.round(random(100, 600))
    }
    //Holding The Trophy
    if (trophyState == HELD) {
      trophy.x = mouseX;
      trophy.y = mouseY;
    }
  } else if(gameState = WIN){
    Message = "You Win";
  }
  drawSprites();
}