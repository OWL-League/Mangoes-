const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, stone, mangomachine;
var m1, m2, m3, m4, m5, m6, m7 ,m8, m9, m10, m11, m12;
var world, boy;
var launchingForce = 100;
function preload()
{
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	stone = new wee(235, 420, 30);
	tree = new groot(1050, 580);
	ground = new Ground(650, 600, 1300, 20);
	slingshot = new mangomachine1000(stone.body, {x:235, y:420});
	
	m1 = new yummyinmytummy(1100, 100, 30);
	m2 = new yummyinmytummy(1170, 160, 30);
	m3 = new yummyinmytummy(1010, 140, 30);
	m4 = new yummyinmytummy(1000, 70, 30);
	m5 = new yummyinmytummy(1100, 70, 30);
	m6 = new yummyinmytummy(1000, 230, 30);
	m7 = new yummyinmytummy(900, 230, 40);
	m8 = new yummyinmytummy(1140, 150, 30);
	m9 = new yummyinmytummy(1100, 230, 40);
	m10 = new yummyinmytummy(1200, 200, 40);
	m11 = new yummyinmytummy(1120, 50, 30);
	m12 = new yummyinmytummy(900, 160, 40);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	image(boy, 200, 340, 200, 300);

	stone.display();
	tree.display();
	ground.display();
	slingshot.display();

  	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	m7.display();
	m8.display();
	m9.display();
	m10.display();
	m11.display();
	m12.display();



  drawSprites();
 
}

function detectCollision(mangy, rocky){
	var mangoPosition = mangy.body.position;
	var rockPosition = rocky.body.position;
	var distance = dist(rockPosition.x, rockPosition.y, mangoPosition.x, mangoPosition.y);

	if(distance <= mangy.r + rocky.r ){
		Matter.Body.setStatic(mangy.body, false);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y:mouseY})
}

function mouseReleased(){
	mangomachine.fly();
}


function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420});
		mangomachine.attach(stone.body);
	}
}