var hr,mn,sec,hrAngle,mnAngle,secAngle





function setup() {
  createCanvas(400,400);
   angleMode(DEGREES)
}

function draw() {
  background("yellow");  
  translate (200,200);
  rotate(-90);

  hr= hour();
  mn= minute();
  sec= second();


  secAngle= map (sec,0,60,0,360);
  mnAngle= map (mn,0,60,0,360);
  hrAngle= map (hr%12,0,12,0,360);

   push()

   rotate(secAngle)
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0);

   pop()

   push()

   rotate(mnAngle)
   stroke(0,255,0);
   strokeWeight(7);
   line(0,0,70,0);

   pop()

   
   push()

   rotate(hrAngle)
   stroke(0,0,255);
   strokeWeight(7);
   line(0,0,40,0);

   pop()


  stroke(255,0,255);
  point (0,0);


strokeWeight(10);
noFill()
stroke(255,0,0);
arc(0,0,300,300,0,secAngle);


stroke(0,255,0);
arc(0,0,300,300,0,mnAngle);




stroke(0,0,255);
arc(0,0,300,300,0,hrAngle);














  drawSprites();
}