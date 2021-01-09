
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;


function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roof = new Roof(450,75,450,20)

	bobObject1 = new Bob(300,400);
	bobObject2 = new Bob(350,400);
	bobObject3 = new Bob(400,400);
	bobObject4 = new Bob(450,400);
	bobObject5 = new Bob(500,400);

	rope1 = new Rope(bobObject1.body,roof.body,-100,0);
	rope2 = new Rope(bobObject2.body,roof.body,-50,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,50,0);
	rope5 = new Rope(bobObject5.body,roof.body,100,0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightpink");
  
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
  drawSprites();
}
function keyPressed(){
	if(keyCode ===LEFT_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:50,y:-50});
	}
}



