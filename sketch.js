
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var tree,stoneObj;
var boy,boy_img;


function preload()
{
   boy_img = loadImage("boy.png");
}



function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(700,530,5,200);

	mango1 = new Mango(650,300,40);
	mango2 = new Mango(420,390,40);
	mango3 = new Mango(570,330,40);
	mango4 = new Mango(640,470,40);
	mango5 = new Mango(730,380,40);
	mango6 = new Mango(460,480,40);
	mango7 = new Mango(780,290,40);
	mango8 = new Mango(530,420,40);
	mango9 = new Mango(710,240,40);
	mango10 = new Mango(310,460,40);
	
	stoneObj = new Stone(40,620,40);
	
	launcherObj=new Launcher(stoneObj.body,{x:60,y:620});


	// ground = new Ground (400,600,200,5);
	boy = createSprite(90,660,10,5);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  boy.addImage(boy_img);
  boy.scale = 0.07;
  
  drawSprites();

//   ground.display();
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stoneObj.display();
  launcherObj.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  



 
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcherObj.fly();
}

function detectCollision(lstone,lmango){

	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance<=lmango.r+lstone.r){

			Matter.Body.setStatic(lmango.body,false);
	}

}

function keyPressed(){

		if(keyCode===32){

			Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
			launcherObj.attach(stoneObj.body);
		}
}
