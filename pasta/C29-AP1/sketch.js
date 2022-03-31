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
var cueiopiscando
var cueiofaminto
var cueioimg
var fruitsimg
var fundoimg
var tesoura
//cria function preload XD
function preload(){
  cueiopiscando=loadAnimation("blink_1.png","blink_2.png","blink_3.png")
  cueiofaminto=loadAnimation("eat_0.png","eat_1.png","eat_2.png","eat_3.png","eat_4.png")
  cueioimg=loadImage("Rabbit-01.png")
  fruitsimg=loadImage("melon.png")
  fundoimg=loadImage("background.png")
  //propriedade de eita reprodução 0_0
  cueiopiscando.playing=true
  cueiofaminto.playing=true
  cueiofaminto.looping=false
}
function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  ellipseMode(RADIUS);

  textSize(50)

  cueio=createSprite(230,620,100,100)
  //cueio.addImage(cueioimg)
  cueio.scale=0.3
  cueiopiscando.frameDelay=8
  cueiofaminto.frameDelay=10
  cueio.addAnimation("oquesegostapikachu",cueiopiscando)
  cueio.addAnimation("selocoocadeirantecorreu",cueiofaminto)
  cueio.changeAnimation("oquesegostapikachu")
  

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
  if (fruta!=null){
  image(fruitsimg,fruta.position.x,fruta.position.y,70,70)
  }
  Engine.update(engine);
  if(collide(fruta,cueio)==true){
    cueio.changeAnimation("selocoocadeirantecorreu")
  }
  drawSprites()
}
//função para corta a corda 
function drop(){
  corda.break()
  linkzin.detach()
  linkzin=null
}
function collide(body,sprite){
if (body!=null){
  var alcance=dist(body.position.x,body.position.y,sprite.position.x,sprite.position.
