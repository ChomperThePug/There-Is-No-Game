var SCENE1 = 0 ;
var SCENE2 = 0 ;
var SCENE3 = 0 ;
var SCENE4 = 0 ;
var SCENE5 = 0 ;
var SCENE6 = 0 ;
var SCENE7 = 0 ;
var SCENE10 = 0 ;
var SCENE11 = 0 ;
var SCENE12 = 0 ;
var SCENE13 = 0 ;
var SCENE14 = 0 ;
var SCENE15 = 0 ;
var gameState = SCENE1;
function preload() {
  trophyI = loadImage("../Assets/trophy.png");
}

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(0, 255, 255);
  drawSprites();
}