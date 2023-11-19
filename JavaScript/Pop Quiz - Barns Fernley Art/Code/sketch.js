 let x = 0;
 let y = 0;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  
  background(0);
  
  let i = 0;
  for (i = 0; i < 1000; i++) {
    let r = random(1, 100);
  // print(r);
    
    if (r == 1) {

    a = 0.0;
    b = 0.0;
    c = 0.0;
    d = 0.16;
    e = 0.0;
    f = 0.0;

    xTwo = a*x + b*y + e;
    yTwo = c*x + d*y + f;

    }// first probability

    if (r > 1 && r <= 86) {

      a = 0.85;
      b = 0.04;
      c = -0.04;
      d = 0.85;
      e = 0.0;
      f = 1.6;

      xTwo = a*x + b*y + e;
      yTwo = c*x + d*y + f;
    } // second probability

    if (r > 86 && r <= 93) {
      a = 0.2;
      b = -0.26;
      c = 0.23;
      d = 0.22;
      e = 0.0;
      f = 1.6;

      xTwo = a*x + b*y + e;
      yTwo = c*x + d*y + f;
    } // third probability

    if (r > 93 && r <= 100) {
      a = -0.15;
      b = 0.28;
      c = 0.26;
      d = 0.24;
      e = 0.0;
      f = 0.44;

      xTwo = a*x + b*y + e;
      yTwo = c*x + d*y + f;
    } // fourth probability

    if (xTwo >= -2.1820 && xTwo < 2.6558){
      if (yTwo >= 0 && yTwo < 9.9983){

        x = xTwo;
        y = yTwo;

        xTwo = (xTwo + 2.1820) / (2.6558 + 2.1820) * 400;
        yTwo = yTwo / 9.9983 * 400;
        
        stroke('red')

        point(xTwo, yTwo);
        print(x, y);
      }// if (yTwo >= 0 && yTwo < 9.9983)
    
    } //  if (xTwo >= -2.1820 && xTwo < 2.6558)
    // ^ above if statements for scaling the drawing
    
  } //for loop, displaying multiple points on canvas
  
}

// program does not run infinitely as it causes the website to crash for whatever reason