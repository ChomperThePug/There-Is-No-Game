var Button ;
var edges;
var count = 10;

function preload() {
  trophyI = loadImage("../Assets/trophy.png");
}

function setup() {
  createCanvas(700, 700);
  edges = createEdgeSprites();
  Button = createSprite(350, 350, 200, 50);

}

function draw() {
  background(0, 255, 255);
  Button.collide(edges);
  let posX = Math.round(random(0,700));
  let posY = Math.round(random(0,700));
  if(frameCount % count === 0){
    count = Math.round(random(20,30));
Button.x = posX;
    Button.y = posY;
  }
  console.log(count);
  drawSprites();
}