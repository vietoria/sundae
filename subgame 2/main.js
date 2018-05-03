// - click on specific objects
// - classes and objects
// - arrays
// - mouse positions


// to keep track of clickable objects

var bug, grass;
function preload() {
  // // load an image
  bug = loadImage ('assets/bug.png');
  grass = loadImage ('assets/grass.jpg')


}

const STATE = {
  time: 0,
  lose: false,
  timer: null,
  zits: 10,
  losetimer: null

}


const clickable = [];

// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  showModal ('Red food dye is derived from Cochineal insects 🐛', 'Catch the bugs to get dye for your cherries and sprinkles!', [new Button ('Start',
    function (){
STATE.timer = setInterval(function() {
    STATE.time++;
  }, 1000)

  STATE.losetimer= setTimeout(function() {
    STATE.lose = true;

    // stop the interval timer
    clearTimeout(STATE.timer);
  }, 15000);
    })]
)



  // create some clickable objects
  var circle = new Circle(200,200, 75,75);
  clickable.push(circle);

  circle = new Circle (1150, 500, 75, 75);
  clickable.push(circle);

  circle = new Circle (864, 120, 75, 75);
  clickable.push(circle);

  circle = new Circle (655, 589, 75, 75);
  clickable.push(circle);

  circle = new Circle (450, 410, 75, 75);
  clickable.push(circle);

  circle = new Circle (735, 14, 75, 75);
  clickable.push(circle);

  circle = new Circle (34, 650, 75, 75);
  clickable.push(circle);

  circle = new Circle (900, 367, 75, 75);
  clickable.push(circle);

  circle = new Circle (585, 300, 75, 75);
  clickable.push(circle);

  circle = new Circle (100, 100, 75, 75);
  clickable.push(circle);


  for (var i=0; i<10; i++) {

  }
}

// runs every frame
function draw() {
  background(grass);

  textSize(32);
  fill(252,220,83);
  text('catch the bugs!', 600, 35);



  fill(252,220,83);
  textSize(20);
  text(`${STATE.time} labor hours`, 650, 60);

STATE.win = STATE.zits==0

    if (STATE.lose && !STATE.showedModal) {
    clearTimeout (STATE.losetimer)
    clearTimeout (STATE.timer)
    STATE.showedModal= true;
    return showModal ('Whoops 😵', 'No dye for your sundae');

  }

  if (STATE.win && !STATE.showedModal) {
    clearTimeout (STATE.losetimer)
    clearTimeout (STATE.timer)
    STATE.showedModal = true;
    return showModal ('✨Congratulations✨', 'You succesfully collected the dye you need for your delicious sundae! 🍦',
    [ new Button ('CONTUNUE', function() {
      location.href = "../subgame3/index.html"})]
    );
  }

  // draw the clickable objects
  clickable.forEach(function(obj) {
    obj.draw();
  });
}

// resize canvas when the browser window resizes
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// handles mouse clicks for the entire page
function mouseClicked() {
  // check if any clickable objects were clicked on
  clickable.forEach(function(obj) {
    if (obj.inside(mouseX, mouseY)) {
      obj.onClick();
    }
  });
}

// define a Rect class
class Rect {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    // colors
    this.r = 255;
    this.g = 0;
    this.b = 0;
  }

  draw() {
    // draw the rectangle
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.w, this.h);
  }

  inside(x, y) {
    // check if the given (x,y) position
    // is inside the rectangle.
    // assumes no rotation!
    let in_x = x > this.x && x < this.x + this.w;
    let in_y = y > this.y && y < this.y + this.h;
    return in_x && in_y;
  }

  onClick() {
    this.r = 238;
    this.g = 153;
    this.b = 122;
  }
}

// define a Circle class
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.deleted=false 

    // colors
    this.r = 255;
    this.g = 0;
    this.b = 0;
  }

  draw() {
    if (!this.deleted){
 this.x+=(Math.random()-0.5)*15
    this.y+=(Math.random ()-0.5)*15
    // draw the circle
    fill(this.r, this.g, this.b);
    image (bug, this.x, this.y, 100, 100);
    }
  }

  inside(x, y) {
    // check if the given (x,y) position
    // is inside the circle.
    return dist(x, y, this.x, this.y) < this.radius;
  }

  onClick() {
    this.deleted=true

STATE.zits --
  }
}