const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');


function Asteroid(params) {
  if (!params.color) {
    params.color = "#0000FF";
  } 
  if (!params.radius) {
    params.radius = 20;
  }
  params.vel = Util.randomVec(15);
  MovingObject.call(this, params);

}

Util.inherits(MovingObject, Asteroid);



module.exports = Asteroid;