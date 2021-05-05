
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,stone,tree,boy;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1350, 630);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	ground = new Ground(600,615,1500,20);
	tree = new Tree( 1095, 320,500, 630);
mango1 = new Fruit(1090,150,60);
mango2 = new Fruit(1150,100,60);
mango3 = new Fruit(1030,250,60);
mango4 = new Fruit(1180,230,60);
mango5 = new Fruit(940,220,60);
mango6 = new Fruit(1030,100,60);
mango7 = new Fruit(1280,230,60);
mango8 = new Fruit(1230,170,60);
rock1 = new Rock(70,260,100);
elastic = new Elastic(rock1.body,{x:180, y:430})
	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(255);
  ground.display();
 tree.display();
  mango1.display();
  mango2.display();
 mango3.display();
  mango4.display();
  mango5.display();
   mango6.display();
    mango7.display();
	 mango8.display();
   rock1.display();
   elastic.display();
   detectcollision(rock1,mango1);
   detectcollision(rock1,mango2);
   detectcollision(rock1,mango3);
   detectcollision(rock1,mango4);
   detectcollision(rock1,mango5);
   detectcollision(rock1,mango6);
   detectcollision(rock1,mango7);
   detectcollision(rock1,mango8);
   

  image(boy,130,340,300,350);
  drawSprites();
 
}
function detectcollision(s,m){
  mbp = m.body.position
  sbp = s.body.position
  var distance = dist(sbp.x, sbp.y, mbp.x, mbp.y)
  if (distance <= m.radius+s.radius){
    Matter.Body.setStatic(m.body,false)
  }
}
function mouseDragged(){
  Matter.Body.setPosition(rock1.body,{x:mouseX, y:mouseY})

}
function mouseReleased(){
  elastic.fly();
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(rock1.body,{x:260,y:100})
    elastic.attach(rock1.body);
  }
}



