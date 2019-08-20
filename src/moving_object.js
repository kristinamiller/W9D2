function MovingObject(params) {
  this.pos = params.pos;

  this.vel = params.vel;
  this.radius = params.radius;
  this.color = params.color;

}

MovingObject.prototype.move = function() {

  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];

};

MovingObject.prototype.isCollidedWith = function(otherObject) {

  let thisCenter = [this.pos[0] + this.radius, this.pos[1] + this.radius]; 
  let otherCenter = [otherObject.pos[0] + otherObject.radius, otherObject.pos[1] + otherObject.radius] ;
  let distance = Math.sqrt(
    Math.pow(otherCenter[0] - thisCenter[0], 2) + 
    Math.pow(otherCenter[1] - thisCenter[1], 2)
    );
    let sumRadii = this.radius + otherObject.radius;
    
  return distance < sumRadii;
  
};





MovingObject.prototype.draw = function(ctx) {
  

  ctx.fillStyle = this.color;
  ctx.beginPath();


  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};



module.exports = MovingObject;