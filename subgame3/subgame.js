// runs before everything
// use to load assets
var hand;
var trash2;
var pause = false;
//var clicked;

function preload() {
  duck = loadImage('assets/duck.png');
  meme = loadImage('http://78.media.tumblr.com/abc33130bc6f89e95576798505e998a5/tumblr_ovea2qiDJ71vkgyt6o1_540.jpg');

}

// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  

  trash2 = new Trash(0, 350, 40, 40, 7, 0);
  trash3 = new Trash(0, 400, 40, 40, 7, 0);
  trash4 = new Trash(0, 460, 40, 40, 6, 0);
  trash5 = new Trash(0, 550, 40, 40, 5, 0);
  trash6 = new Trash(0, 430, 40, 40, 4, 0);
  trash7 = new Trash(0, 490, 40, 40, 4, 0);
  trash8 = new Trash(0, 620, 40, 40, 5, 0);
  trash9 = new Trash(0, 720, 40, 40, 7, 0);
  trash10 = new Trash(0, 620, 40, 40, 3, 0);
  trash11 = new Trash(0, 720, 40, 40, 3, 0);
  trash12 = new Trash(0, 520, 40, 40, 3, 0);
  trash13 = new Trash(0, 290, 40, 40, 3, 0);
  trash14 = new Trash(0, 430, 40, 40, 3, 0);
  trash15 = new Trash(0, 760, 40, 40, 3, 0);
  trash16 = new Trash(0, 490, 40, 40, 3, 0);
  trash17 = new Trash(0, 240, 40, 40, 3, 0);
  trash18 = new Trash(0, 500, 40, 40, 4, 0);
  trash19 = new Trash(0, 600, 40, 40, 4, 0);
  trash20 = new Trash(0, 700, 40, 40, 4, 0);
  trash21 = new Trash(0, 550, 40, 40, 4, 0);
  trash22 = new Trash(0, 620, 40, 40, 4, 0);


  hand = new Hand(900, 700, 10, 10, 1, 0);
  //clicked = false;

}

// runs every frame
function draw() {
  background(62, 124, 121);

  hand.x = mouseX;
  hand.y = mouseY;
  imageMode(CENTER);

  hand.draw();
  trash2.draw();
  trash3.draw();
  trash4.draw();
  trash5.draw();
  trash6.draw();
  trash7.draw();
  trash8.draw();
  trash9.draw();
  trash10.draw();
  trash11.draw();
  trash12.draw();
  trash13.draw();
  trash14.draw();
  trash15.draw();
  trash16.draw();
  trash17.draw();
  trash18.draw();
  trash19.draw();
  trash20.draw();
  trash21.draw();
  trash22.draw();

  if (!pause) {
    trash2.move();
    trash3.move();
    trash4.move();
    trash5.move();
    trash6.move();
    trash7.move();
    trash8.move();
    trash9.move();
    trash10.move();
    trash11.move();
    trash12.move();
    trash13.move();
    trash14.move();
    trash15.move();
    trash16.move();
    trash17.move();
    trash18.move();
    trash19.move();
    trash20.move();
    trash21.move();
  }

  if (hand.collided(trash2)) {
    trash2.deleted = true;
  }

  if (hand.collided(trash3)) {
    trash3.deleted = true;
  }
 
  if (hand.collided(trash4)) {
    trash4.deleted = true;
  }

  if (hand.collided(trash5)) {
    trash5.deleted = true;
  }

  if (hand.collided(trash6)) {
    trash6.deleted = true;
  }

  if (hand.collided(trash7)) {
    trash7.deleted = true;
  }

  if (hand.collided(trash8)) {
    trash8.deleted = true;
  }

  if (hand.collided(trash9)) {
    trash9.deleted = true;
  }

  if (hand.collided(trash10)) {
    trash10.deleted = true;
  }

  if (hand.collided(trash11)) {
    trash11.deleted = true;
  }

  if (hand.collided(trash12)) {
    trash12.deleted = true;
  }

  if (hand.collided(trash13)) {
    trash13.deleted = true;
  }

  if (hand.collided(trash14)) {
    trash14.deleted = true;
  }

  if (hand.collided(trash15)) {
    trash15.deleted = true;
  }

  if (hand.collided(trash16)) {
    trash16.deleted = true;
  }

  if (hand.collided(trash17)) {
    trash17.deleted = true;
  }

  if (hand.collided(trash18)) {
    trash18.deleted = true;
  }

  if (hand.collided(trash19)) {
    trash19.deleted = true;
  }

  if (hand.collided(trash20)) {
    trash20.deleted = true;
  }

  if (hand.collided(trash21)) {
    trash21.deleted = true;
  }

  if (hand.collided(trash22)) {
    trash22.deleted = true;
  }
}

// collisions are slightly different for rectangles
class Trash {
  constructor(x, y, w, h, velocity_x, velocity_y) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.velocity_x = velocity_x;
    this.velocity_y = velocity_y;
    this.deleted = false;
  }

  draw() {
    // important that rectMode is CENTER!
    if (!this.deleted) {
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
    }
  }

  move() {
    this.x += this.velocity_x;
    this.y += this.velocity_y;
  }

  // collided(otherTrash) {
  //   var d_x = Math.abs(this.x - otherTrash.x);
  //   var d_y = Math.abs(this.y - otherTrash.y);
  //   return d_x <= (this.w/2 + otherTrash.w/2) && d_y <= (this.h/2 + otherTrash.h/2);
  // }

}

class Hand {

constructor(x, y, w, h, velocity_x, velocity_y) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.velocity_x = velocity_x;
    this.velocity_y = velocity_y;
  }

  draw() {
    // important that rectMode is CENTER!
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += this.velocity_x;
    this.y += this.velocity_y;
  }

  collided(otherTrash) {
    var d_x = Math.abs(this.x - otherTrash.x);
    var d_y = Math.abs(this.y - otherTrash.y);
    return d_x <= (this.w/2 + otherTrash.w/2) && d_y <= (this.h/2 + otherTrash.h/2);
  }

}