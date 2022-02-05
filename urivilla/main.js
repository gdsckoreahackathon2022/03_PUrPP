var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

const base1 = 190;
const base2 = 200;

var penguin1 = new Image();
penguin1.src = 'penguin1.png';
var penguin2 = new Image();
penguin2.src = 'penguin2.png';

var ice394 = new Image();
ice394.src = 'ice394.png';
var ice900 = new Image();
ice900.src = 'ice900.png';

var fish1 = new Image();
fish1.src = 'fish1.png';
var fish2 = new Image();
fish2.src = 'fish2.png';
var fish3 = new Image();
fish3.src = 'fish3.png';
var fish4 = new Image();
fish4.src = 'fish4.png';

var gameover = new Image();
gameover.src = 'gameover.png';

var dinox = 10;
var dinoy = base2;

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
      ctx.drawImage(penguin1, this.x, this.y);
    } else {
      ctx.drawImage(penguin2, this.x, this.y);
    }
  },
};

var sea = {
  x: 0,
  y: base2 + dino.height,
  width: canvas.width,
  height: canvas.height - base2,
  draw() {
    ctx.fillStyle = `rgb(0,128,255)`;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

class Cactus394 {
  constructor() {
    this.x = canvas.width;
    this.y = 240;
    this.width = 394;
    this.height = 10;
  }
  draw() {
    // ctx.fillStyle = 'black';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(ice394, this.x, this.y);
  }
}

class Cactus900 {
  constructor() {
    this.x = 500;
    this.y = 240;
    this.width = 900;
    this.height = 10;
  }
  draw() {
    // ctx.fillStyle = 'black';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(ice900, this.x, this.y);
  }
}

class Fish1 {
  constructor() {
    this.x = 580;
    this.y = 400;
    this.width = 80;
    this.height = 80;
  }
  draw() {
    // ctx.fillStyle = 'black';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(fish1, this.x, this.y);
  }
}

class Fish2 {
  constructor() {
    this.x = 650;
    this.y = 500;
    this.width = 150;
    this.height = 150;
  }
  draw() {
    // ctx.fillStyle = 'black';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(fish2, this.x, this.y);
  }
}

class Fish3 {
  constructor() {
    this.x = 730;
    this.y = 400;
    this.width = 150;
    this.height = 150;
  }
  draw() {
    // ctx.fillStyle = 'black';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(fish3, this.x, this.y);
  }
}

class Fish4 {
  constructor() {
    this.x = 800;
    this.y = 500;
    this.width = 150;
    this.height = 150;
  }
  draw() {
    ctx.drawImage(fish4, this.x, this.y);
  }
}

var endGame = {
  x: 100,
  y: 100,
  width: 400,
  height: 100,
  state: true,
  draw() {
    ctx.drawImage(gameover, this.x, this.y);
  },
};

const fps = 25;
var animation;
var a = 2;
var v0 = 0;
var timer = 0;
var jumpTimer = 0;
var isJumping = false;
var cactusArray = [];
var fishArray = [];
var fishDeltaY1 = 1;
var fishDeltaY2 = -1;
var starting = false;

var cactusTemp1 = new Cactus900();
cactusTemp1.x = 0;
cactusArray.push(cactusTemp1);
var cactusTemp2 = new Cactus394();
cactusTemp2.x = 1000;
cactusArray.push(cactusTemp2);
var cactusTemp3 = new Cactus394();
cactusTemp3.x = 1400;
cactusArray.push(cactusTemp3);

var fishTemp1 = new Fish1();
fishArray.push(fishTemp1);
var fishTemp2 = new Fish2();
fishArray.push(fishTemp2);
var fishTemp3 = new Fish3();
fishArray.push(fishTemp3);
var fishTemp4 = new Fish4();
fishArray.push(fishTemp4);

function draw() {
  // setTimeout(() => {
  //   animation = requestAnimationFrame(draw);
  // }, 1000 / fps);
  animation = requestAnimationFrame(draw);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer < 60 * 5) {
    if (timer % 80 === 0) {
      var cactus = new Cactus394();
      cactusArray.push(cactus);
    }
  } else {
    if (timer % 95 === 0) {
      var cactus = new Cactus394();
      cactusArray.push(cactus);
    }
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
    // element.x -= 7;
    // element.draw();
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
    if (dino.y > base1) {
      dino.y = base1;
      dinoy = base1;
    }
  } else if (isCollision2Sea) {
    // console.log('3');
    isJumping = false;
    if (dino.y > base2) {
      dino.y = base2;
      dinoy = base2;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    endGame.draw();
    cancelAnimationFrame(animation);
  }

  dino.draw();
  sea.draw();

  fishArray.forEach((element, index, array) => {
    element.draw();
    if (index % 2 == 0) {
      element.y += fishDeltaY1;
    } else {
      element.y += fishDeltaY2;
    }
  });

  if (timer % 20 === 0) {
    fishDeltaY1 = -fishDeltaY1;
    fishDeltaY2 = -fishDeltaY2;
  }

  cactusArray.forEach((element, index, array) => {
    element.x -= 7;
    element.draw();
    if (element.x < -element.width) {
      deleteArray.push(index);
    }
  });
  deleteArray.forEach((element, index, array) => {
    cactusArray.splice(index, 1);
  });
}
draw();

document.addEventListener('keydown', (event) => {
  if (!starting) {
    starting = true;
  }
  if (event.code == 'Space') {
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
