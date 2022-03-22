const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var chao
var corda
var fruta
var linkzin
function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  chao = new Ground(200,690,690,20)
  corda = new Rope(10,{x:245,y:10})
  var fruta_options={
    density:0.001
    
  }
   fruta=Bodies.circle(300,300,15,fruta_options)
   Matter.Composite.add(corda.body,fruta)
   linkzin=new Link(corda,fruta)
   
}

function draw() 
{
  background(51);
   
  chao.show()
  corda.show()
  ellipse(fruta.position.x,fruta.position.y,15,15)
  Engine.update(engine);
  
}



