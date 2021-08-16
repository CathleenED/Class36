var database;
var form
var player
var game
var playerCount
var gameState=0


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game=new Game();
  game.getState();
  game.start();

  
}

function draw(){
  background("white");
  
   
  
}

