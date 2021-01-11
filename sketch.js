 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Evens;
 const Bodies = Matter.Bodies;
 const Body = Matter.Bodies;
 var gameState = "start"
var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var turn = 0
var score = 0
var dh = 300

function setup() {
	createCanvas(500, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
    // line = new Ground(250,350,500,5)

    ground = new Ground(width/2,690,500,10)
    

    for (var j = 40; j <=width; j = j + 50) {
   
      plinkos.push(new Plinko(j,75))
  
    }
    for (var j = 15; j <=width-10; j = j + 50) {
   
      plinkos.push(new Plinko(j,150))
  
    }

    for (var j = 40; j <=width; j = j + 50) {
   
      plinkos.push(new Plinko(j,225))
  
    }
    
  for (var j = 15; j <=width-10; j = j + 50) {
   
    plinkos.push(new Plinko(j,300))

  }

  
  for (var k = 0; k <width; k = k + 70) {
   
    divisions.push(new Divisions(k,height-dh/2,10,dh))

  }
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Pink");
    
  for (var j = 0; j < plinkos.length; j++) {
   
   plinkos[j].display();
  }
  
  for (var k = 0; k < divisions.length; k++) {
   
    divisions[k].display();
  }
  
   ground.display();
   if(particle !== undefined){
    particle.display()
    if( particle.body.position.y > 350 ){
      if(particle.body.position.x <300 ){

        score = score + 500
        particle = null
        if(turn>=5)gameState = end
      }
  } 
   }
  
   
   text ("Turn: "+turn,100,100)
   text ("Score: "+score,150,300)







}
function mousePressed (){
  if(gameState !== "end"){
     turn++;
     particle = new Particle(mouseX,10,10,10)
     
  }
}



