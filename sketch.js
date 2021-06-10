var Button ;
var edges;
var count = 10;
var textState = 0;
var gameState = 0;
var Background;
var speechState = 0;
var speechCount = 0;

function preload() {
  Background = loadImage("Assets/Background.jfif");
}

function setup() {
  createCanvas(700, 700);
  edges = createEdgeSprites();
  Button = createSprite(350, 350, 200, 50);

}

function draw() {
  background(Background);
  Button.collide(edges);
  console.log(speechState);
  //Game State 0
  if (gameState === 0) {
    if (textState === 1) {
      let a = 0;
      a += 2 ;
      if(frameCount % count === 0){
        count = Math.round(random(20,30));
        var buttonPosX = Math.round(random(0,700));
        var buttonPosY = Math.round(random(0,700));
        Button.x = buttonPosX;
        Button.y = buttonPosY;
      }
      if (mousePressedOver(Button) && a !== 0) {
        gameState = 1;
        Button.destroy();
      }
    }
    if (mousePressedOver(Button)) {
      textState = 1
       Button.x = Math.round(random(0,700));
       Button.y = Math.round(random(0,700));
    }
  }else if //Game State 1
  (gameState === 1) {
    speech(0,"Hello There", 100)
  }
 // console.log(gameState)
  drawSprites();
  if (gameState === 0) {
    textAlign(CENTER);
    textSize(20);
    fill("White");
    text("Do Not Press To Start", Button.x,Button.y + 8);
  }
}

//Speech Function
function speech(state,message,timer) {
  let a = 0;
 
  if (speechState === state) {
    speechCount++ ;
    if (speechCount < timer + 1) {
      textAlign(CENTER);
      textSize(20);
      fill('white');
      text(message, width/2, 30);
    }
    if (speechCount === timer) {
      speechState = (state + 1) ;
    }
    console.log(speechCount);
  }
}