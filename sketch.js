var gameState=0;
var playerCount;
var database,position;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4,cars

function preload(){
    track=loadImage("images/track.jpg");
    ground=loadImage("images/ground.png");
    car1IMG=loadImage("images/car1.png");
    car2IMG=loadImage("images/car2.png");
    car3IMG=loadImage("images/car3.png");
    car4IMG=loadImage("images/car4.png");
    rank1=loadImage("images/rank1.png");
    rank2=loadImage("images/rank2.png");
    rank3=loadImage("images/rank3.png");
    rank4=loadImage("images/rank4.png");
}
function setup(){
    database=firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);

   
game=new Game();
game.getState();
game.start();

}

function draw(){
   if(playerCount==4){
       game.update(1);
   }
   if(gameState==1){
       clear();
       game.play();

       
   }
   if(gameState==2){
       game.end();
   }
}

