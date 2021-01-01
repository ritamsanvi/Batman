const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops=100;
var drops=[];
var tGroup,t1,t2,t3,t4;

function preload() {
    t1 = loadImage("images/thunderbolt/1.png");
    t2 = loadImage("images/thunderbolt/2.png");
    t3 = loadImage("images/thunderbolt/3.png");
    t4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
  world = engine.world;

    umbrella= new Umbrella(200,200,10,10)

    tGroup= new Group();


    //for(var i=0; i < maxDrops; i++){
      //  drops.push(new Drop(random(0,400),random(0,400)))
    //}

}

function draw(){
    background("black");

    Engine.update(engine);

    umbrella.display();

    if (frameCount % 10 === 0) {
      drops.push(new Drop(190,random(0,40), 5, 5))
     }

    for (var j = 0; j < drops.length; j++) {
        drops[j].display();
      }

     spawnT();

 drawSprites();
}

function spawnT() {
    if(frameCount % 60 === 0) {
      var t = createSprite(200,45,10,40);
      
      //generate random obstacles
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: t.addImage(t1);
                break;
        case 2: t.addImage(t2);
                break;
        case 3: t.addImage(t3);
                break;
        case 4: t.addImage(t4);
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      t.scale = 0.5;
      t.lifetime = 30;
      //add each obstacle to the group
    tGroup.add(t);
    }
  }