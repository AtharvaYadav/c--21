var canvas;
var music;
var b1,b2,b3,b4,ball,edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
b1 = createSprite(0,500,360,20)
b1.shapeColor = ("red")

b2= createSprite(300,500,200,20)
b2.shapeColor = ("blue")

b3 = createSprite(520,500,200,20)
b3.shapeColor = ("green")

b4 = createSprite(750,500,220,20)
b4.shapeColor = ("purple")
    //create box sprite and give velocity


    ball = createSprite(random(20,750),120,50,50)
    ball.shapeColor = (255)
    ball.velocityX= 6
    ball.velocityY= 6
}

function draw() {
    background(169);
    //create edgeSprite
    edges=createEdgeSprites();
     ball.bounceOff(edges);
      if(b1.isTouching(ball) && ball.bounceOff(b1)){
           ball.shapeColor = ("red"); 
           music.play(); } 
           if(b2.isTouching(ball)){ 
               ball.shapeColor = ("blue");
                ball.velocityX = 0;
                 ball.velocityY = 0;
                  music.stop(); }
                   if(b3.isTouching(ball) && ball.bounceOff(b3)){ 
                       ball.shapeColor = ("green"); } 
                       if(b4.isTouching(ball) && ball.bounceOff(b4)){
                            ball.shapeColor = ("purple"); }
     drawSprites();


    //add condition to check if box touching surface and make it box
}
