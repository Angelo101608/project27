const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var backgroundImg;

var log;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(1200,400);
//var canvas
    log = createSprite(200,200,10,200);

    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    // platform = new Ground(150, 305, 300, 170);
    
    

    bird = new Bird(100,100);

    chain = new Chain(bird.body,log1.body);
}

function draw(){
    background("white");
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
   
    // log1.display();

    ground.display();
    
    chain.display();

    bird.display();
    //platform.display();
    drawSprite();
    createSprite();
}
