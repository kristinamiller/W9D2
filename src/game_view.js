const Game = require("./game.js");
const MovingObject = require("./moving_object.js");
const Ship = require("./ship.js");

// let game = new Game();

function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
  
}

GameView.prototype.start = function() {
  setInterval(this.moveObjects.bind(this), 70);
  
};

GameView.prototype.moveObjects = function(){
  this.game.draw(this.ctx);
  this.game.step();
};


// let canvas = document.getElementById('tutorial');
// let ctx = canvas.getContext('2d');

module.exports = GameView;