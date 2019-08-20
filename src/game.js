const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");


const DIM_X = 800;
const DIM_Y = 600;
const NUM_ASTEROIDS = 10;

function Game(){
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship({ pos: this.randomPosition()});
  this.setup(); 
}

Game.prototype.setup = function() {
  let self = this;
  key('w', function () { 
    self.ship.pos[1] -= Math.abs(self.ship.vel[1]);
   });
  key('a', function () { 
    self.ship.pos[0] -= Math.abs(self.ship.vel[0]);
   });
  key('s', function () { 
    self.ship.pos[1] += Math.abs(self.ship.vel[1]);
   });
  key('d', function () { 
    self.ship.pos[0] += Math.abs(self.ship.vel[0]);
   });
}

Game.prototype.step = function(){};
Game.prototype.move = function () { };
Game.prototype.checkCollisions = function () { };
Game.prototype.draw = function(ctx){ 
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    for (let asteroid of this.asteroids){
      asteroid.draw(ctx);
    }
    this.ship.draw(ctx);
};
Game.prototype.addAsteroids = function() {
  for (let i = 0; i < NUM_ASTEROIDS; i++) {
    let asteroid = new Asteroid({pos: this.randomPosition()});
    this.asteroids.push(asteroid);
  }
}
Game.prototype.randomPosition = function() {
  let x = Math.ceil(Math.random()*DIM_X);
  let y = Math.ceil(Math.random()*DIM_Y);
  return [x,y];
}
Game.prototype.moveObjects = function() {
  for (let asteroid of this.asteroids) {
    asteroid.pos = this.wrap(asteroid.pos);
    asteroid.move();
  }
}
Game.prototype.wrap = function(pos) {
  let wrapped_position = pos.slice();
  if (pos[0] > DIM_X) {
    wrapped_position[0] = 0;
  } else if (pos[0] < 0) {
    wrapped_position[0] = DIM_X;
  } else if (pos[1] > DIM_Y) {
    wrapped_position[1] = 0;
  } else if (pos[1] < 0) {
    wrapped_position[1] = DIM_Y;
  } return wrapped_position;
  
};

Game.prototype.checkCollisions = function(){
  for (let i = 0; i < this.asteroids.length - 1; i++) {
    if (this.asteroids[i].isCollidedWith(this.ship)) {

      this.ship.relocate(this.randomPosition());
    }

  }




  // for (let i = 0; i < this.asteroids.length - 1; i++) {
  //   for (let j = i + 1; j < this.asteroids.length; j++) {
  //     if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
  //       console.log("COLLISION");
  //       // this.remove(this.asteroids[i]);
  //       // this.remove(this.asteroids[j]);
  //     }
  //   }
  // }
}
Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
}

Game.prototype.remove = function(asteroid) {
  let index = this.asteroids.indexOf(asteroid);
  this.asteroids.splice(index, 1);
}




module.exports = Game;