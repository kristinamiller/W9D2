const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById("game-canvas");
  let context = canvas.getContext("2d"); 
  let game = new Game();
  let gameView = new GameView(game, context);
  gameView.start();

  // let movingObject = new MovingObject({ pos: [30,30], vel: [10, 10], radius: 20, color: "#00FF00" });
  // movingObject.draw(context);
  // movingObject.move();
  // movingObject.clear(context, canvas.width, canvas.height);
  // movingObject.draw(context);
});
console.log("HI");
// let movingObject = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00" });

let thing1 = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 20, color: "#00FF00" })

let thing2 = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 20, color: "#00FF00" })
console.log(thing1.isCollidedWith(thing2));