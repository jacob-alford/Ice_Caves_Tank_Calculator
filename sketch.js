function setup(){
  createCanvas(windowWidth,400,WEBGL);
}

function draw(){
  translate(0,0,-50);
  camera();
  translate(0,0,50);
  rotateX(1.125);
  rotateZ(frameCount*.01)
  background(200);
  rotateX(0);
  ambientMaterial(118,85,43);
  translate(0,0,-42);
  plane(2500,2500);
  ambientMaterial(64,41,5);
  translate(44,0,42);
  cylinder(42, 168);
  translate(-88,0,0);
  cylinder(42, 168);
}
