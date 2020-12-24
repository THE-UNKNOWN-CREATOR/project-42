var hr, mn, sc;

function setup(){
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw(){
  background(0);
  hr = hour();
  mn = minute();
  sc = second();
  
  var hrAngle = map(hr, 0, 60, 0, 360);
  var mnAngle = map(mn, 0, 60, 0, 360);
  var scAngle = map(sc, 0, 60, 0, 360);

  translate(width/2, height/2);
  rotate(180);

  push();
  fill(255);
  stroke(255);
  strokeWeight(8);

  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  line(0, 0, 0, 120);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  line(0, 0, 0, 90);
  pop();

  push();
  rotate(scAngle);
  stroke(255, 0, 0)
  line(0, 0, 0, 60);
  pop();
  pop();

  noStroke();
  fill(255, 200)
  ellipse(0, 0, 10, 10);
  noFill();
  
  stroke(255, 0, 0);
  strokeWeight(8);
  arc(0, 0, width/1.1, height/1.1, 90, scAngle + 90);
  stroke(0, 255, 0);
  strokeWeight(8);
  arc(0, 0, width/1.2, height/1.2, 90, mnAngle + 90);
  stroke(0, 0, 255);
  strokeWeight(8);
  arc(0, 0, width/1.3, height/1.3, 90, hrAngle + 90);
}