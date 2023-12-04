let a = 0;
let b = 1;
let c = 0;
let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;
let angle5 = 0;
let angle6 = 0;
let angle7 = 0;
let angle8 = 0;
let angle9 = 0;
let angle10 = 0;
let v;
let spaceBG;

function preload() {
  v = createVector(a, b, c);

  img2 = loadImage("sunPhoto2.jpg");
  mercSurf = loadImage("mercurySurface.jpeg");
  venSurf = loadImage("venusSurface.jpg");
  earthSurf = loadImage("earthSurface.jpg");
  marsSurf = loadImage("marsSurface.jpg");
  jupiSurf = loadImage("jupiterSurface.jpg");
  satuSurf = loadImage("saturnSurface.jpg");
  uranSurf = loadImage("uranusSurface.jpg");
  neptSurf = loadImage("neptuneSurface.jpg");
  moonSurf = loadImage("moonSurface.jpg");
} // preload

function setup()
  {
  createCanvas(750, 600, WEBGL);
  spaceBG = loadImage("spacePhoto.jpeg");

} // setup

function draw() {
  background("black");

  angle1 += 0.06; // mercury
  angle2 += 0.035; // venus
  angle3 += 0.05; // sun
  angle4 += 0.033; // earth
  angle10 += 0.033; // earth moon
  angle5 += 0.0168; // mars
  angle6 += 0.003; // jupiter
  angle7 += 0.0016; // saturn
  angle8 += 0.000533333333333333; // uranus
  angle9 += 0.000266666666666666; // neptune
 
  //draw y axis
  line(0, -500, 0, 0, 500, 0);
  stroke("white");

  push();
  noStroke();
  texture(img2);
  rotate(angle3, v);
  sphere(50);
  pop(); // sun

  push();
  noStroke();
  texture(mercSurf);
  rotate(angle1, v);
  translate(60, 0, 0);
  sphere(3);
  pop(); // mercury

  push();
  noStroke();
  texture(venSurf);
  rotate(angle2, v);
  translate(75, 0, 0);
  sphere(9);
  pop(); // venus
  
  push();
  noStroke();
  rotate(angle4, v);
  translate(115, 0, 0);
  texture(earthSurf);
  sphere(15);
  pop(); // earth

  push();
  noStroke();
  rotate(angle10, v);
  translate(140, -20, 0);
  texture(moonSurf);
  sphere(4);
  pop(); // earth moon

  push();
  noStroke();
  rotate(angle5, v);
  translate(145, 0, 0);
  texture(marsSurf);
  sphere(7.5);
  pop(); // mars

  push();
  noStroke();
  rotate(angle6, v);
  translate(188, 0, 0);
  texture(jupiSurf);
  sphere(30);
  pop(); // jupiter

  push();
  noStroke();
  rotate(angle7, v);
  translate(250, 0, 0);
  texture(satuSurf);
  sphere(27);
  pop(); // saturn

  push();
  noStroke();
  rotate(angle8, v);
  translate(300, 0, 0);
  texture(uranSurf);
  sphere(12.5);
  pop(); // uranus

  push();
  noStroke();
  rotate(angle9, v);
  translate(340, 0, 0);
  texture(neptSurf);
  sphere(12.4);
  pop(); // neptune

  camera(100, 0, 600, 0, 0, 0);
} // draw  