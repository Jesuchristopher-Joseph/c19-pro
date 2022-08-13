var bg,bgImg;
var rocket,rocketImg;
var obs,obsImg1,obsImg2;
var obsGroup;
var gameOver, gameOverImg;
var gameState = "play";

function preload(){
    bgImg = loadImage("Bgspace.jpg");
    rocketImg = loadImage("Rocke2t.png");
    obsImg1 = loadImage("metoer.png");
    obsImg2 = loadImage("rock.png");
    gameOverImg = loadImage("Gameover.png");


}

function setup() {
 
    createCanvas(600,800);
    bg = createSprite(200,300);
    bg.addImage(bgImg);
    bg.scale = 1.2;
    bg.velocityY = 1;

    rocket = createSprite(300,700);
    rocket.addImage(rocketImg);
    rocket.scale = 0.1;

    obsGroup = new Group();
}

function draw() {
    if(gameState === "play"){
        background(0);
        if(bg.y > 400){
            bg.y = 300
        }
    
        rocket.x = mouseX;
        
        if(obsGroup.isTouching(rocket)){
            gameState = "end";
            gameOver = createSprite(300,400);
    
            gameOver.addImage(gameOverImg);
            obsGroup.setVelocityEach(0);
            obsGroup.destroyEach();
        }
        spawnObs();
    drawSprites();
    }
}

function spawnObs(){
    if(frameCount % 60 == 0){
        obs = createSprite(400,0);
        obs.x = random(50,550)
        obs.velocityY = 5;
        var rand = Math.round(random(1,2));
        switch(rand){
            case 1 : obs.addImage(obsImg1); break;
            case 2 : obs.addImage(obsImg2); break;
            default : break;
        }
        obs.scale = 0.1;

    obsGroup.add(obs);
    }
}