const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground1;
var pig1, log1;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    pig1 = new Pig(800,300);
    log1 = new Log(800,250,270,PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(900,240,70,70);
    pig2 = new Pig(800,240);
    log2 = new Log(800,200,270,PI/2);

    box5 = new Box(800,190,70,70);
    log3 = new Log(750,150,150,PI/4);
    log4 = new Log(830,150,150,-PI/7);

    ground1 = new ground(600,390,1200,20); 

    bird1 = new Bird(100,100);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird1.display();
}