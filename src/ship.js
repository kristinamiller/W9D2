const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');


function Ship(params) { 
  if (!params.color) {
    params.color = "#00FF00";
  }
  if (!params.radius) {
    params.radius = 10;
  }
  params.vel = Util.randomVec(50);
  MovingObject.call(this, params);
}

Util.inherits(MovingObject, Ship);


Ship.prototype.relocate = function (pos) {
  this.pos = pos;

};

Ship.prototype.power = function (impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
}

module.exports = Ship;