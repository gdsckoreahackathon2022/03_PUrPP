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
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
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

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 240;
    this.width = 100;
    this.height = 10;
  }
  draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const fps = 25;
var a = 10;
var v0 = 0;
var timer = 0;
var jumpTimer = 0;
var isJumping = false;
var cactusArray = [];

function draw() {
  setTimeout(() => {
    requestAnimationFrame(draw);
  }, 1000 / fps);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 50 === 0) {
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
    element.x -= 5;
    element.draw();
    if (element.x < 0) {
      deleteArray.push(index);
    }
    if (isCollision(dino, element)) {
      console.log('col ice');
      isCollision2Ice = true;
    }
  });
  if (isCollision(dino, sea)) {
    console.log('col sea');
    isCollision2Sea = true;
  }

  if (!isCollision2Ice && !isCollision2Sea) {
    console.log('1');
    isJumping = true;
  } else if (isCollision2Ice) {
    console.log('2');
    isJumping = false;
    if (dino.y > 190) {
      dino.y = 190;
      dinoy = 190;
    }
  } else if (isCollision2Sea) {
    console.log('3');
    isJumping = false;
    if (dino.y > 200) {
      dino.y = 200;
      dinoy = 200;
    }
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
    v0 = -50;
    isJumping = true;
  }
});

function isCollision(a, b) {
  var diffx = b.x - (a.x + a.width);
  var diffy = b.y - (a.y + a.height);
  if (diffx <= 0 && diffy <= 0) return true;
  else return false;
}
