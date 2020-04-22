//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;

//var engine, world;
//var drop1;

function setup() {
    //var canvas = createCanvas(800,400);
   // engine = Engine.create();
   //world = engine.world;
   //drop1 = new drops(10,hieght,10,100); 
}

function draw() {
  background(150);  
  for ( i = 0; i < 400; i=i+60) {
     r = random(20,40);
    strokeWeight(4);
    stroke("cyan");
     line(50, i, 50, i+r);
  }
  for ( i = 10; i < 400; i=i+60) {
    r = random(20,40);
   //stroke(r * 5);
   line(100, i, 100, i+r);
  }
  for ( i =20; i < 400; i=i+60) {
    r = random(20,40);
   //stroke(r * 5);
   line(150, i, 150, i+r);
  }
  for ( i = 0; i < 400; i=i+60) {
    r = random(20,40);
   //stroke(r * 5);
   line(200, i, 200, i+r);
  } 
  for ( i = 30; i < 400; i=i+60) {
    r = random(20,40);
   //stroke(r * 5);
   line(250, i, 250, i+r);
  }
  for ( i = 0; i < 400; i=i+60) {
    r = random(20,40);
   //stroke(r * 5);
   line(300, i, 300, i+r);
  }
  for ( i = 10; i < 400; i=i+60) {
    r = random(20,40);
   //stroke(r * 5);
   line(350, i, 350, i+r);
  }
  
  //j.display();
}