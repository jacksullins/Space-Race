let spaceship = {};
spaceship.x = 200;
spaceship.y = 350;
spaceship.width = 25;
spaceship.height = 50;
spaceship.active = true;
spaceship.vx = 0;
spaceship.vy = 0;
spaceship.src =
  "https://raw.githubusercontent.com/nvcompsci/SpaceInvaders-Intro2021/main/player.png";

let laser = [];
laser.x = 1;
laser.y = 50;
laser.width = 40;
laser.height = 10;
laser.vx = 2;
laser.vy = 0;
laser.src =
  "https://raw.githubusercontent.com/nvcompsci/SpaceInvaders-Intro2021/main/laser.png";

let laser2 = [];
laser2.x = 370;
laser2.y = 100;
laser2.width = 40;
laser2.height = 10;
laser2.vx = 2;
laser2.vy = 0;
laser2.src =
  "https://raw.githubusercontent.com/nvcompsci/SpaceInvaders-Intro2021/main/laser.png";

let laser3 = [];
laser3.x = 150;
laser3.y = 150;
laser3.width = 40;
laser3.height = 10;
laser3.vx = 2;
laser3.vy = 0;
laser3.src =
  "https://raw.githubusercontent.com/nvcompsci/SpaceInvaders-Intro2021/main/laser.png";

let laser4 = [];
laser4.x = 300;
laser4.y = 220;
laser4.width = 40;
laser4.height = 10;
laser4.vx = 2;
laser4.vy = 0;
laser4.src =
  "https://raw.githubusercontent.com/nvcompsci/SpaceInvaders-Intro2021/main/laser.png";

let laser5 = [];
laser5.x = 250;
laser5.y = 300;
laser5.width = 40;
laser5.height = 10;
laser5.vx = 2;
laser5.vy = 0;
laser5.src =
  "https://raw.githubusercontent.com/nvcompsci/SpaceInvaders-Intro2021/main/laser.png";

let laser6 = [];
laser6.x = 30;
laser6.y = 300;
laser6.width = 40;
laser6.height = 10;
laser6.vx = 2;
laser6.vy = 0;
laser6.src =
  "https://raw.githubusercontent.com/nvcompsci/SpaceInvaders-Intro2021/main/laser.png";

let laser7 = [];
laser7.x = 130;
laser7.y = 270;
laser7.width = 40;
laser7.height = 10;
laser7.vx = 2;
laser7.vy = 0;
laser7.src =
  "https://raw.githubusercontent.com/nvcompsci/SpaceInvaders-Intro2021/main/laser.png";

let world = {};
world.top = 0;
world.bottom = 400;
world.left = 0;
world.right = 380;

let score = 0;

function preload() {
  spaceship.img = loadImage(spaceship.src);
  laser.img = loadImage(laser.src);
  laser2.img = loadImage(laser2.src);
  laser3.img = loadImage(laser3.src);
  laser4.img = loadImage(laser4.src);
  laser5.img = loadImage(laser5.src);
  laser6.img = loadImage(laser6.src);
  laser7.img = loadImage(laser7.src);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  moveSpaceshipUpDown();
  moveSpaceshipSide();
  updateAndDraw(spaceship);
  updateAndDraw(laser);
  updateAndDraw(laser2);
  updateAndDraw(laser3);
  updateAndDraw(laser4);
  updateAndDraw(laser5);
  updateAndDraw(laser6);
  updateAndDraw(laser7);
  spaceshipVsLaser(spaceship, laser);
  spaceshipVsWorld();
  spaceshipVsLaser3(spaceship, laser3);
  spaceshipVsLaser2(spaceship, laser2);
  spaceshipVsLaser4(spaceship, laser4);
  spaceshipVsLaser5(spaceship, laser5);
  spaceshipVsLaser6(spaceship, laser6);
  spaceshipVsLaser7(spaceship, laser7);
  drawStars();
  fill("White");
  text("Score: " + score, 5, 20);
}

function drawStars() {
  stroke("white");
  for (let i = 0; i < 20; i++) {
    point(random(width), random(height));
  }
}

function moveSpaceshipUpDown() {
  if (keyIsDown(87) == true) {
    spaceship.y -= 3;
  } else if (keyIsDown(83) == true) {
    spaceship.y += 3;
  }
}

function moveSpaceshipSide() {
  if (keyIsDown(65) == true) spaceship.x -= 3;
  else if (keyIsDown(68) == true) spaceship.x += 3;
}

function updateAndDraw(sprite) {
  image(sprite.img, sprite.x, sprite.y, sprite.width, sprite.height); //increase y by vy
  sprite.y += sprite.vy;
  sprite.x += sprite.vx;
  collideWorldBounds(sprite);
  collideWorldBound2(sprite);
}

function collideWorldBounds(sprite) {
  if (sprite.x < world.left || sprite.x > world.right) {
    sprite.vx = -sprite.vx;
  }
}

function collideWorldBound2(sprite) {
  if (sprite.y > world.bottom || sprite.y <= world.top) {
    sprite.y = 350;
    return sprite;
  }
}

function spaceshipVsLaser(spaceship, laser) {
  if (
    dist(spaceship.x, spaceship.y, laser.x, laser.y) <
    spaceship.width / 2 + laser.width / 2
  ) {
    console.log("hit");
    spaceship.active = false;
    spaceship.y = 350;
    spaceship.x = 200;
    fill("red");
    text("You Lose", 180, 200);
  }
}
function spaceshipVsLaser3(spaceship, laser3) {
  if (
    dist(spaceship.x, spaceship.y, laser3.x, laser3.y) <
    spaceship.width / 2 + laser3.width / 2
  ) {
    console.log("hit");
    spaceship.active = false;
    spaceship.y = 350;
    spaceship.x = 200;
    fill("red");
    text("You Lose", 180, 200);
  }
}

function spaceshipVsLaser2(spaceship, laser2) {
  if (
    dist(spaceship.x, spaceship.y, laser2.x, laser2.y) <
    spaceship.width / 2 + laser2.width / 2
  ) {
    console.log("hit");
    spaceship.active = false;
    spaceship.y = 350;
    spaceship.x = 200;
    fill("red");
    text("You Lose", 180, 200);
  }
}

function spaceshipVsLaser4(spaceship, laser4) {
  if (
    dist(spaceship.x, spaceship.y, laser4.x, laser4.y) <
    spaceship.width / 2 + laser4.width / 2
  ) {
    console.log("hit");
    spaceship.active = false;
    spaceship.y = 350;
    spaceship.x = 200;
    fill("red");
    text("You Lose", 180, 200);
  }
}

function spaceshipVsLaser5(spaceship, laser5) {
  if (
    dist(spaceship.x, spaceship.y, laser5.x, laser5.y) <
    spaceship.width / 2 + laser5.width / 2
  ) {
    console.log("hit");
    spaceship.active = false;
    spaceship.y = 350;
    spaceship.x = 200;
    fill("red");
    text("You Lose", 180, 200);
  }
}

function spaceshipVsLaser6(spaceship, laser6) {
  if (
    dist(spaceship.x, spaceship.y, laser6.x, laser6.y) <
    spaceship.width / 2 + laser6.width / 2
  ) {
    console.log("hit");
    spaceship.active = false;
    spaceship.y = 350;
    spaceship.x = 200;
    fill("red");
    text("You Lose", 180, 200);
  }
}

function spaceshipVsLaser7(spaceship, laser7) {
  if (
    dist(spaceship.x, spaceship.y, laser7.x, laser7.y) <
    spaceship.width / 2 + laser7.width / 2
  ) {
    console.log("hit");
    spaceship.active = false;
    spaceship.y = 350;
    spaceship.x = 200;
    fill("red");
    text("You Lose", 180, 200);
  }
}

function spaceshipVsWorld() {
  if (spaceship.y < world.top) {
    return spaceship;
  } else if (spaceship.y < 2.5) {
    score += 1;
  }
}
