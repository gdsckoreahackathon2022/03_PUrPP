var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dinox = 10;
var dinoy = 200;

var dino = {
  x: dinox,
  y: dinoy,
  width: 50,
  height: 50,
  state: true,
  draw() {
    ctx.fillStyle = 'red';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    if (timer % 15 === 0) {
      this.state = !this.state;
    }
    if (this.state) {
      console.log('1');
      ctx.drawImage(penguin1, this.x, this.y);
    } else {
      console.log('2');
      ctx.drawImage(penguin2, this.x, this.y);
    }
  },
};

var sea = {
  x: 0,
  y: 250,
  width: canvas.width,
  height: canvas.height - 200,
  draw() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

var penguin1 = new Image();
penguin1.src = 'penguin1.png';
var penguin2 = new Image();
penguin2.src = 'penguin2.png';

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 240;
    this.width = 160;
    this.height = 10;
  }
  draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const fps = 25;
var animation;
var a = 2;
var v0 = 0;
var timer = 0;
var jumpTimer = 0;
var isJumping = false;
var cactusArray = [];
var cactusTemp = new Cactus();
cactusTemp.x = 0;
cactusTemp.width = 700;
cactusArray.push(cactusTemp);

function draw() {
  // setTimeout(() => {
  //   animation = requestAnimationFrame(draw);
  // }, 1000 / fps);
  animation = requestAnimationFrame(draw);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 60 === 0) {
    var cactus = new Cactus();
    cactusArray.push(cactus);
  }

  if (isJumping == true) {
    jumpTimer++;
    dino.y = dinoy + v0 * jumpTimer + (a * jumpTimer * jumpTimer) / 2;
  } else {
    v0 = 0;
    jumpTimer = 0;
  }

  var isCollision2Ice = false;
  var isCollision2Sea = false;

  var deleteArray = [];
  cactusArray.forEach((element, index, array) => {
    element.x -= 7;
    element.draw();
    if (element.x < -element.width) {
      deleteArray.push(index);
    }
    if (isCollision(dino, element)) {
      // console.log('col ice');
      isCollision2Ice = true;
    }
  });
  if (isCollision(dino, sea)) {
    // console.log('col sea');
    isCollision2Sea = true;
  }

  if (!isCollision2Ice && !isCollision2Sea) {
    // console.log('1');
    isJumping = true;
  } else if (isCollision2Ice) {
    // console.log('2');
    isJumping = false;
    if (dino.y > 190) {
      dino.y = 190;
      dinoy = 190;
    }
  } else if (isCollision2Sea) {
    // console.log('3');
    isJumping = false;
    if (dino.y > 200) {
      dino.y = 200;
      dinoy = 200;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }

  deleteArray.forEach((element, index, array) => {
    cactusArray.splice(index, 1);
  });

  dino.draw();
  sea.draw();
}
draw();

document.addEventListener('keydown', (event) => {
  if (event.code == 'Space') {
    console.log('clic');
    v0 = -30;
    isJumping = true;
  }
});

function isCollision(a, b) {
  var diffx = b.x - (a.x + a.width);
  var diffy = b.y - (a.y + a.height);
  if (diffx <= 0 && diffy <= 0) return true;
  else return false;
}
