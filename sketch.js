
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground; 
var boy;
var tree; 
var mango1, mango2, mango3, mango4, mango5; 
var stone;
var rope1; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 600, 800, 30);
	boy = new Boy(200,540);
	tree = new Tree(600, 400);
	mango1 = new Mango(650,300);
	mango2= new Mango(580, 270);
	mango3 = new Mango(510, 350);
	mango4 = new Mango(660, 350);
	mango5 = new Mango(600, 330);
	stone = new Stone(180,540);
	rope1 = new Rope(stone.body,{x:140, y: 495});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ground.display();
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  rope1.display();



  detectCollision(stone, mango1); 
  detectCollision(stone, mango2); 
  detectCollision(stone, mango3);
  detectCollision(stone, mango4); 
  detectCollision(stone, mango5);
 
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position; 
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y); 

	if(distance<=lmango.width + lstone.width){
		Matter.Body.setStatic(lmango.body, false);
	}
}



function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y: mouseY});
}

function mouseReleased(){
    rope1.fly();
}

