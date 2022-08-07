var canvas;
var backgroundImage;

function preload(){
  backgroundImage=loadImage()
}

function setup(){
  canvas=createCanvas(windowWidht,windowHieght);
  database=firebase.database();
  game=new Game();
  game=getState();
  game.start();
}

function draw(){
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}