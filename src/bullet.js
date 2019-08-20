const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');
function Bullet(){}
Util.inherits(MovingObject, Bullet);

module.exports = Bullet;