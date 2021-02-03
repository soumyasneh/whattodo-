
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hero, grlmg, grlflymg;
var gradent;
var alien, alienimg;

 aliengroup = new Group();


function preload()
{
grlmg = loadAnimation("download (2).png", "download (3).png");
gradent = loadImage("mm.jpg");
grlflymg = loadAnimation("download (2) - Copy.png");
grlatt = loadAnimation("att.png");
alienimg = loadImage("UFO.png");	
auzar = loadImage("tool.png");
}

function setup() {
	createCanvas(1400, displayHeight*10);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	

	hero = createSprite(500, displayHeight*9.67, 20, 20);
	hero.addAnimation("grll", grlmg);
	hero.addAnimation("boy", grlflymg);
	hero.addAnimation("boyatt", grlatt);
	hero.scale=1;

	tt = createSprite(hero.x+30, hero.y-30);
	tt.addImage(auzar);
	tt.scale=0.5;
	

    //alien = createSprite();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(gradent);

  tt.visible = false;
  
  if(keyDown("up")){
	 
	hero.y=hero.y-34;  
	hero.changeAnimation("boy", grlflymg);
	hero.scale=1;
	}

  if(keyDown("down")){
	 
	hero.y=hero.y+34;  
	hero.changeAnimation("boy", grlflymg);
	hero.scale=1;
	}

 if(keyDown("left")){
	 
	hero.x=hero.x-8;  
	//hero.changeAnimation("boy", grlflymg);
	}
 if(keyDown("right")){
	 
	hero.x=hero.x+8;  
	//hero.changeAnimation("boy", grlflymg);
	}

if(keyDown("A")){
	   
	hero.changeAnimation("boyatt",grlatt);
	hero.scale=0.35;

	//tt = createSprite(hero.x+30, hero.y-30);
	//tt.addImage(auzar);
	//tt.scale=0.5;
	tt.visible = true;
	tt.velocityX=10;

	}


if (frameCount%100 === 0){
	alien = createSprite(random(600,1300), random(100,500),100,100);
	alien.addImage(alienimg);
	alien.scale=1.8;
	alien.lifetime=150;

	aliengroup.add(alien);
}

if (aliengroup.isTouching(tt))
{
	aliengroup.destroy();
}

  drawSprites();
 
}



