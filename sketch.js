// Yeeun.kim
// Draw A Fictional Character Exercise
// CS099
// Spring 2020

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(220);
  fill('White');
  quad(100, 350, 350, 350, 350, 450, 100, 450);
  fill('Peru');
  ellipse(150, 480, 40, 20);
  quad(130, 450, 170, 450, 170, 480, 130, 480);
  ellipse(300, 480, 40, 20);
  quad(280, 450, 320, 450, 320, 480, 280, 480);
  quad(100, 400, 350, 400, 350, 450, 100, 450);
  fill('black');
  quad(105, 410, 155, 410, 155, 420, 105, 420);
  quad(165, 410, 220, 410, 220, 420, 165, 420);
  quad(230, 410, 285, 410, 285, 420, 230, 420);
  quad(295, 410, 345, 410, 345, 420, 295, 420);
  fill('Red');
  quad(225, 370, 200, 420, 225, 440, 250, 420);
  circle(225, 365, 30);
  fill('White');
  triangle(170, 350, 220, 350, 180, 380);
  triangle(280, 350, 230, 350, 270, 380);
  fill('black');
  quad(120, 550, 160, 550, 160, 570, 120, 570);
  quad(285, 550, 325, 550, 325, 570, 285, 570);
  fill('White');
  rect(140, 490, 15, 65,0,0,10,10);
  rect(290, 490, 15, 65,0,0,10,10);
  fill('gold');
  quad(80, 100, 100, 350, 350, 350, 370, 100);
  fill('white');
  triangle(91, 240, 96, 290, 70, 290);
  triangle(359, 240, 355, 290, 381, 290);
  fill('gold');
  triangle(99, 340, 96, 290, 80, 290);
  triangle(351, 340, 355, 290, 371, 290);
  fill('white');
  circle(265,190,85);
  circle(180,190,85);
  fill('DodgerBlue');
  circle(260,200,40);
  circle(185,200,40);
  push();
  fill('black');
  strokeWeight(20);
  point(255,205);
  point(190,205);
  pop();
  fill('black');
  quad(140+85,130,135+85,135,150+85,160,155+85,155);
  quad(175+85,122,180+85,122,180+85,147,175+85,147);
  quad(220+85,130,225+85,135,210+85,160,205+85,155);
  quad(140,130,135,135,150,160,155,155);
  quad(175,122,180,122,180,147,175,147);
  quad(220,130,225,135,210,160,205,155);
  fill('gold')
  arc(225, 225, 30, 30, 90, HALF_PI);
  fill('DarkRed')
  arc(225, 280, 150, 60, 180, PI + QUARTER_PI, CHORD);
  fill('white')
  square(195, 250, 20);
  square(235, 250, 20);
  fill('khaki')
  ellipse(110,140,30,40)
  ellipse(110,180,20,20)
  ellipse(120,290,20,20)
  ellipse(150,330,10,10)
  ellipse(300,240,10,10)
  ellipse(330,260,30,30)
  ellipse(330,220,10,10)
  fill('MediumBlue')
  line(290,500,305,500)
  line(140,500,155,500)
  fill('red')
  triangle(225,25,150,100,300,100)
}
