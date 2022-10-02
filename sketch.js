let x;
let y;
let speed = 2;
let a = speed;
let d = 20;
let b = 0;
let u = 2;
let t = 2;
let v = 2;
let o = 2;
let g = 2;
let imgSize = 100;
let img;
let img2;
let img3;

// Her har vi skrevet alle variabler vi skal bruge til projektet

function preload() {
  img = loadImage("jerry-vector-logo4.PNG");
  img2 = loadImage("felix-the-cat.PNG");
  img3 = loadImage("felix-the-cat.PNG");
}
// Denne funktion gør at vi kan indsætte billeder

function setup() {
  createCanvas(400, 400);
  x = random(0, width);
  y = random(0, height);
  x2 = random(0, width);
  y2 = random(0, height);
  x3 = random(0, width);
  y3 = random(0, height);
}

function draw() {
  background(220);
  image(img, x, y, 50, 50); //circle(x,y,d)
  x += speed * a;
  y += u * b;
  image(img2, x2, y2, 50, 50); //circle(x,y,d)
  x2 += t * a;
  y2 += v * b;
  image(img3, x3, y3, 50, 50); //circle(x,y,d)
  x3 += o * a;
  y3 += g * b;
}
// Her var indført nogle cirkler, og erstattet cirklerne med billeder

// musen:
if (x > width - d / 2 || x < d / 2) {
  speed *= -1;
}
if (y > height - d / 2 || y < d / 2) {
  u *= -1;
}
// Første kat:
if (x2 > width - d / 2 || x2 < d / 2) {
  t *= -1;
}
if (y2 > height - d / 2 || y2 < d / 2) {
  v *= -1;
}
// Anden kat
if (x3 > width - d / 2 || x3 < d / 2) {
  o *= -1;
}
if (y3 > height - d / 2 || y3 < d / 2) {
  g *= -1;
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speeed;
  }
}
