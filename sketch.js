var archerZombie, bossZombie, normalZombie, giantZombie, wizardZombie, runnerZombie;
var archerZombieImage, bossZombieImage, normalZombieImage, giantZombieImage, wizardZombieImage, runnerZombieImage;
var player;
var zombieHealth;
var zombies;
var bgImg;


function preload() {
  archerZombieImage = loadImage("images/A_Zombie.png");
  bossZombieImage = loadImage("images/B_Zombie.png");
  normalZombieImage = loadImage("images/N_Zombie.png");
  giantZombieImage = loadImage("images/G_Zombie.png");
  wizardZombieImage = loadImage("images/W_Zombie.png");
  runnerZombieImage = loadImage("images/R_Zombie.png");

  bgImg.loadImage("images/game_bg/png");
}

function setup() {
  archerZombie = createSprite(200, 200, 20, 20);
  archerZombie.addImage(archerZombieImage);
  bossZombie = createSprite(300, 200, 20, 20);
  bossZombie.addImage(bossZombieImage);
  normalZombie = createSprite(400, 200, 20, 20);
  normalZombie.addImage(normalZombieImage);
  giantZombie = createSprite(100, 200, 20, 20);
  giantZombie.addImage(giantZombieImage);
  wizardZombie = createSprite(500, 200, 20, 20);
  wizardZombie.addImage(wizardZombieImage);
  runnerZombie = createSprite(200, 450, 20, 20);
  runnerZombie.addImage(runnerZombieImage);

  bgImg = createSprite(200,200,20,20);

  archerZombie.scale = 0.14;
  bossZombie.scale = 0.42;
  normalZombie.scale = 0.05;
  giantZombie.scale = 0.75;
  wizardZombie.scale = 0.06;
  runnerZombie.scale = 0.35;
}

function draw() {
  createCanvas(850,500);
  background = (bgImg);

  archerZombie.x = 100;
  archerZombie.y = 50;
  archerZombie.velocityX = 5;

  drawSprites();
}