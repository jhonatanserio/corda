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
var cueio
//variaveis de imagem XD
var cueioimg
var fruitsimg
var fundoimg
var tesoura
//cria function preload XD
function preload(){
  cueioimg=loadImage("Rabbit-01.png")
  fruitsimg=loadImage("melon.png")
  fundoimg=loadImage("background.png")
}
function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  ellipseMode(RADIUS);

  textSize(50)

  cueio=createSprite(400,590,15,15)
  cueio.addImage(cueioimg)
  cueio.scale=0.3

  tesoura=createImg("cut_btn (1).png")
  tesoura.position(270,10)
  tesoura.size(50,50)
  tesoura.mouseClicked(drop)
  
  chao = new Ground(200,690,690,20)

  corda = new Rope(6,{x:300,y:10})

  var fruta_options={
    density:0.001
    
  }

   fruta=Bodies.circle(300,300,1,fruta_options)
   Matter.Composite.add(corda.body,fruta)
   linkzin=new Link(corda,fruta)
   
}

function draw() 
{
  background(fundoimg);
   
  chao.show()
  corda.show()
  //ellipse(fruta.position.x,fruta.position.y,15,15)
  image(fruitsimg,fruta.position.x,fruta.position.y,60,60)
  Engine.update(engine);
  drawSprites()
}
//função para corta a corda 
function drop(){
  corda.break()
  linkzin.detach()
  linkzin=null
}

