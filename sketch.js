
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperobject,Ground,bin;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperobject = new paper(200,600,40);
	Ground = new ground(width/2,670,width,20);
	bin = new dustbin(1200,650);



	Engine.run(engine);
  
}


function draw() {
 
  background("lightblue");
  paperobject.display();
  Ground.display();
 bin.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperobject.body,paperobject.body.positon,{x:130,y:-500})
	}
}



