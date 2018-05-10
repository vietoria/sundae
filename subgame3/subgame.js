// runs before everything
// use to load assets
var hand;
var nut;
var collect = false;
var ModalShow = false;

function preload() {
  nut = loadImage ('https://i.imgur.com/wKctoSU.png');
}

const STATE = {
  score: 0, 
}

const RESOURCES = {

};

const IMAGES = {
  //nut: 'assets/chocolate.png',
};

const GRID_ROWS = 0;
const GRID_COLS = 0;
const GRID_CELL_SIZE = 0;
const GRID_EMPTY = [205, 244, 222];


function main() {
  //showModal('WELCOME', 'test text', 'Okay');
  if (STATE.score > 3 && !ModalShow) {
    ModalShow = true;
    return showModal('WINNER', 'YAY YOU HAVE ENOUGH CHOCOLATE!',
      [ new Button('CONTINUE', function() {
        location.href = "../END/index.html"})]
        );
  }
}

// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  showModal ('CHOCOLATE', 'In order to have chocolate, you need to collect 4 cacao!', [new Button ('START', function() {})
    ]);

  trash2 = new Trash(50, 220, 1, 380, 0, 0);
  trash3 = new Trash(100, 180, 1, 375, 0, 0);
  trash4 = new Trash(150, 220, 1, 380, 0, 0);
  trash5 = new Trash(200, 180, 1, 375, 0, 0);
  trash6 = new Trash(250, 220, 1, 380, 0, 0);
  trash7 = new Trash(300, 180, 1, 375, 0, 0);
  trash8 = new Trash(350, 220, 1, 380, 0, 0);
  trash9 = new Trash(400, 180, 1, 375, 0, 0);
  trash10 = new Trash(450, 220, 1, 380, 0, 0);
  trash11 = new Trash(500, 180, 1, 375, 0, 0);
  trash12 = new Trash(550, 220, 1, 380, 0, 0);
  trash13 = new Trash(600, 180, 1, 375, 0, 0);
  trash14 = new Trash(650, 220, 1, 380, 0, 0);
  trash15 = new Trash(700, 180, 1, 375, 0, 0);
  trash16 = new Trash(750, 220, 1, 380, 0, 0);
  trash17 = new Trash(800, 180, 1, 375, 0, 0);
  trash18= new Trash(850, 220, 1, 380, 0, 0);
  trash19 = new Trash(900, 180, 1, 375, 0, 0);
  trash20 = new Trash(950, 220, 1, 380, 0, 0);
  trash21 = new Trash(1000, 180, 1, 375, 0, 0);
  trash22 = new Trash(1050, 220, 1, 380, 0, 0);
  trash23 = new Trash(1100, 180, 1, 375, 0, 0);
  trash24 = new Trash(1150, 220, 1, 380, 0, 0);
  trash25 = new Trash(1200, 180, 1, 375, 0, 0);
  trash26 = new Trash(1250, 220, 1, 380, 0, 0);
  trash27 = new Trash(1300, 180, 1, 375, 0, 0);
  trash28 = new Trash(1350, 220, 1, 380, 0, 0);
  trash30 = new Trash(1450, 220, 1, 380, 0, 0);
  trash31 = new Trash(350, 410, 600, 1, 0, 0);
  trash32 = new Trash(1050, 410, 600, 1, 0, 0);

  trash42 = new Trash(50, 570, 1, 240, 0, 0);
  trash43 = new Trash(100, 640, 1, 275, 0, 0);
  trash44 = new Trash(150, 570, 1, 240, 0, 0);
  trash45 = new Trash(200, 680, 1, 375, 0, 0);
  trash46 = new Trash(250, 570, 1, 240, 0, 0);
  trash47 = new Trash(300, 680, 1, 375, 0, 0);
  trash48 = new Trash(350, 570, 1, 240, 0, 0);
  trash49 = new Trash(400, 680, 1, 375, 0, 0);
  trash50 = new Trash(450, 570, 1, 240, 0, 0);
  trash51 = new Trash(500, 680, 1, 375, 0, 0);
  trash52 = new Trash(550, 570, 1, 240, 0, 0);
  trash53 = new Trash(600, 680, 1, 375, 0, 0);
  trash54 = new Trash(650, 570, 1, 240, 0, 0);
  trash55 = new Trash(700, 680, 1, 375, 0, 0);
  trash56 = new Trash(750, 570, 1, 240, 0, 0);
  trash57 = new Trash(800, 680, 1, 375, 0, 0);
  trash58 = new Trash(850, 570, 1, 240, 0, 0);
  trash59 = new Trash(900, 680, 1, 375, 0, 0);
  trash60 = new Trash(950, 570, 1, 240, 0, 0);
  trash61 = new Trash(1000, 680, 1, 375, 0, 0);
  trash62 = new Trash(1050, 570, 1, 240, 0, 0);
  trash63 = new Trash(1100, 680, 1, 375, 0, 0);
  trash64 = new Trash(1150, 570, 1, 240, 0, 0);
  trash65 = new Trash(1200, 680, 1, 375, 0, 0);
  trash66 = new Trash(1250, 570, 1, 240, 0, 0);
  trash67 = new Trash(1300, 680, 1, 375, 0, 0);
  trash68 = new Trash(1350, 570, 1, 240, 0, 0);
  trash70 = new Trash(1450, 570, 1, 240, 0, 0);
  trash71 = new Trash(350, 450, 600, 1, 0, 0);
  trash72 = new Trash(1050, 450, 600, 1, 0, 0);

  hand = new Hand(900, 700, 30, 30, 0, 0);

  nut1 = new Nut(175, 200, 20, 20, 0, 0);
  nut2 = new Nut(275, 500, 20, 20, 0, 0);
  nut3 = new Nut(375, 300, 20, 20, 0, 0);
  nut4 = new Nut(475, 100, 20, 20, 0, 0);
  nut5 = new Nut(575, 600, 20, 20, 0, 0);
  nut6 = new Nut(975, 700, 20, 20, 0, 0);
  nut7 = new Nut(1275, 600, 20, 20, 0, 0);
  nut8 = new Nut(875, 300, 20, 20, 0, 0);
  nut9 = new Nut(975, 350, 20, 20, 0, 0);
  nut10 = new Nut(1075, 200, 20, 20, 0, 0);
 

  //clicked = false;

}


// runs every frame
function draw() {
  background(146, 173, 135);

  hand.x = mouseX;
  hand.y = mouseY;
  imageMode(CENTER);

  hand.draw();

  nut1.draw();
  nut2.draw();
  nut3.draw();
  nut4.draw();
  nut5.draw();
  nut6.draw();
  nut7.draw();
  nut8.draw();
  nut9.draw();
  nut10.draw();


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
  trash23.draw();
  trash24.draw();
  trash25.draw();
  trash26.draw();
  trash27.draw();
  trash28.draw();
  trash30.draw();
  trash31.draw();
  trash32.draw();

  trash42.draw();
  trash43.draw();
  trash44.draw();
  trash45.draw();
  trash46.draw();
  trash47.draw();
  trash48.draw();
  trash49.draw();
  trash50.draw();
  trash51.draw();
  trash52.draw();
  trash53.draw();
  trash54.draw();
  trash55.draw();
  trash56.draw();
  trash57.draw();
  trash58.draw();
  trash59.draw();
  trash60.draw();
  trash61.draw();
  trash62.draw();
  trash63.draw();
  trash64.draw();
  trash65.draw();
  trash66.draw();
  trash67.draw();
  trash68.draw();
  trash70.draw();
  trash71.draw();
  trash72.draw();

  
// SCORE ! ! !
  textSize(14);
  fill(255,255,255);
  text(`${STATE.score} 🍫 COLLECTED`, 650, 435);


  if (hand.collided(trash2)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash3)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash4)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash5)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash6)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash7)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash8)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash9)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash10)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash11)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash12)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash13)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash14)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash15)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash16)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash17)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash18)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash19)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash20)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash21)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash22)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash23)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash24)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash25)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash26)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash27)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash28)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash30)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash31)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('CONTINUE', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash32)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash42)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash43)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('CONTINUE', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash2)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash44)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash45)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash46)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash47)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash48)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash49)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash50)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash51)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash52)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash53)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash54)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash55)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash56)) {
    return showModal ('YOU LOSE', 'Do better', [new Button ('TRY AGAIN', function() {
        location.href= "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash57)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash58)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash59)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash60)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash61)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash62)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash63)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash64)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash65)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash66)) {
    return showModal ('YOU LOSE', 'Do better',  [new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash67)) {
    return showModal ('YOU LOSE', 'Do better',  [new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash68)) {
    return showModal ('YOU LOSE', 'Do better',  [new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash70)) {
    return showModal ('YOU LOSE', 'Do better',  [new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash71)) {
    return showModal ('YOU LOSE', 'Do better',  [new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }

  if (hand.collided(trash72)) {
    return showModal ('YOU LOSE', 'Do better', [ new Button('TRY AGAIN', function() {
        location.href = "index.html"})], [ new Button('GIVE UP', function() {
        location.href = "../END/index.html"})]);
  }



///////////


  if (hand.collided(nut1) && !nut1.deleted) {
    STATE.score += 1;
    nut1.deleted = true;
  }

  if (hand.collided(nut2) && !nut2.deleted) {
    STATE.score += 1;
    nut2.deleted = true;
  }

  if (hand.collided(nut3) && !nut3.deleted) {
    STATE.score += 1;
    nut3.deleted = true;
  }

  if (hand.collided(nut4) && !nut4.deleted) {
    STATE.score += 1;
    nut4.deleted = true;
  }

  if (hand.collided(nut5) && !nut5.deleted) {
    STATE.score += 1;
    nut5.deleted = true;
  }

  if (hand.collided(nut6) && !nut6.deleted) {
    STATE.score += 1;
    nut6.deleted = true;
  }

  if (hand.collided(nut7) && !nut7.deleted) {
    STATE.score += 1;
    nut7.deleted = true;
  }

  if (hand.collided(nut8) && !nut8.deleted) {
    STATE.score += 1;
    nut8.deleted = true;
  }

  if (hand.collided(nut9) && !nut9.deleted) {
    STATE.score += 1;
    nut9.deleted = true;
  }

  if (hand.collided(nut10) && !nut10.deleted) {
    STATE.score += 1;
    nut10.deleted = true;
  }

  if (STATE.score > 3 && !ModalShow) {
    ModalShow = true;
    return showModal('WINNER', 'YAY YOU HAVE ENOUGH CHOCOLATE!',
      [ new Button('CONTINUE', function() {
        location.href = "../subgame1/index.html"})]
        );
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

class Nut {
  constructor(x, y, w, h, velocity_x, velocity_y) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.velocity_x = velocity_x;
    this.velocity_y = velocity_y;
    this.collect = false;
  }

  // get image() {
  //   return 'gO8JE5C.png'
  // }

  draw() {
    // important that rectMode is CENTER!
    if (this.collect) {
    STATE.score += 1;
    }

    if (!this.deleted) {
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
    // image ('wKctoSU.png', this.x, this.y, 100, 100);
    }
  }
}

function init() {
  
}

