
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObj;
var dustbinObj;
var groundObject;	
var world;




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	

	//objects
  paperObj = new Paper(200,200);	
	dustbinObj=new dustbin(1200,650);
  groundObject=new Ground(width/2,670,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  //display objects

  paperObj.display(); 
  dustbinObj.display();
  groundObject.display(); // The order of the objects will determine which object will be drawn first.
  
  

  //texts
  fill(230)
  rectMode(CENTER);
  stroke("blue")
  rect(800,100,515,150)          

  textSize(20);
  stroke(1.5);
  fill("black")
  textAlign(CENTER);
  text("PRESS UP ARROW FOR WIND TO BLOW", 800, 100)
  text("PRESS ANY KEY FOR WIND TO STOP", 800, 150) 
  

  //call keyEvents
  keyEvents();

}

function keyEvents() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x: 10, y: -11})
	}	
}

