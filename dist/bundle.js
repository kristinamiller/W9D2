/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nfunction Asteroid(params) {\n  if (!params.color) {\n    params.color = \"#0000FF\";\n  } \n  if (!params.radius) {\n    params.radius = 20;\n  }\n  params.vel = Util.randomVec(15);\n  MovingObject.call(this, params);\n\n}\n\nUtil.inherits(MovingObject, Asteroid);\n\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\nconst DIM_X = 800;\nconst DIM_Y = 600;\nconst NUM_ASTEROIDS = 10;\n\nfunction Game(){\n  this.asteroids = [];\n  this.addAsteroids();\n  this.ship = new Ship({ pos: this.randomPosition()});\n  this.setup(); \n}\n\nGame.prototype.setup = function() {\n  let self = this;\n  key('w', function () { \n    self.ship.pos[1] -= Math.abs(self.ship.vel[1]);\n   });\n  key('a', function () { \n    self.ship.pos[0] -= Math.abs(self.ship.vel[0]);\n   });\n  key('s', function () { \n    self.ship.pos[1] += Math.abs(self.ship.vel[1]);\n   });\n  key('d', function () { \n    self.ship.pos[0] += Math.abs(self.ship.vel[0]);\n   });\n}\n\nGame.prototype.step = function(){};\nGame.prototype.move = function () { };\nGame.prototype.checkCollisions = function () { };\nGame.prototype.draw = function(ctx){ \n    ctx.clearRect(0, 0, DIM_X, DIM_Y);\n    for (let asteroid of this.asteroids){\n      asteroid.draw(ctx);\n    }\n    this.ship.draw(ctx);\n};\nGame.prototype.addAsteroids = function() {\n  for (let i = 0; i < NUM_ASTEROIDS; i++) {\n    let asteroid = new Asteroid({pos: this.randomPosition()});\n    this.asteroids.push(asteroid);\n  }\n}\nGame.prototype.randomPosition = function() {\n  let x = Math.ceil(Math.random()*DIM_X);\n  let y = Math.ceil(Math.random()*DIM_Y);\n  return [x,y];\n}\nGame.prototype.moveObjects = function() {\n  for (let asteroid of this.asteroids) {\n    asteroid.pos = this.wrap(asteroid.pos);\n    asteroid.move();\n  }\n}\nGame.prototype.wrap = function(pos) {\n  let wrapped_position = pos.slice();\n  if (pos[0] > DIM_X) {\n    wrapped_position[0] = 0;\n  } else if (pos[0] < 0) {\n    wrapped_position[0] = DIM_X;\n  } else if (pos[1] > DIM_Y) {\n    wrapped_position[1] = 0;\n  } else if (pos[1] < 0) {\n    wrapped_position[1] = DIM_Y;\n  } return wrapped_position;\n  \n};\n\nGame.prototype.checkCollisions = function(){\n  for (let i = 0; i < this.asteroids.length - 1; i++) {\n    if (this.asteroids[i].isCollidedWith(this.ship)) {\n\n      this.ship.relocate(this.randomPosition());\n    }\n\n  }\n\n\n\n\n  // for (let i = 0; i < this.asteroids.length - 1; i++) {\n  //   for (let j = i + 1; j < this.asteroids.length; j++) {\n  //     if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {\n  //       console.log(\"COLLISION\");\n  //       // this.remove(this.asteroids[i]);\n  //       // this.remove(this.asteroids[j]);\n  //     }\n  //   }\n  // }\n}\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n}\n\nGame.prototype.remove = function(asteroid) {\n  let index = this.asteroids.indexOf(asteroid);\n  this.asteroids.splice(index, 1);\n}\n\n\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n// let game = new Game();\n\nfunction GameView(game, ctx) {\n  this.game = game;\n  this.ctx = ctx;\n  \n}\n\nGameView.prototype.start = function() {\n  setInterval(this.moveObjects.bind(this), 70);\n  \n};\n\nGameView.prototype.moveObjects = function(){\n  this.game.draw(this.ctx);\n  this.game.step();\n};\n\n\n// let canvas = document.getElementById('tutorial');\n// let ctx = canvas.getContext('2d');\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  let canvas = document.getElementById(\"game-canvas\");\n  let context = canvas.getContext(\"2d\"); \n  let game = new Game();\n  let gameView = new GameView(game, context);\n  gameView.start();\n\n  // let movingObject = new MovingObject({ pos: [30,30], vel: [10, 10], radius: 20, color: \"#00FF00\" });\n  // movingObject.draw(context);\n  // movingObject.move();\n  // movingObject.clear(context, canvas.width, canvas.height);\n  // movingObject.draw(context);\n});\nconsole.log(\"HI\");\n// let movingObject = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: \"#00FF00\" });\n\nlet thing1 = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 20, color: \"#00FF00\" })\n\nlet thing2 = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 20, color: \"#00FF00\" })\nconsole.log(thing1.isCollidedWith(thing2));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(params) {\n  this.pos = params.pos;\n\n  this.vel = params.vel;\n  this.radius = params.radius;\n  this.color = params.color;\n\n}\n\nMovingObject.prototype.move = function() {\n\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n\n  let thisCenter = [this.pos[0] + this.radius, this.pos[1] + this.radius]; \n  let otherCenter = [otherObject.pos[0] + otherObject.radius, otherObject.pos[1] + otherObject.radius] ;\n  let distance = Math.sqrt(\n    Math.pow(otherCenter[0] - thisCenter[0], 2) + \n    Math.pow(otherCenter[1] - thisCenter[1], 2)\n    );\n    let sumRadii = this.radius + otherObject.radius;\n    \n  return distance < sumRadii;\n  \n};\n\n\n\n\n\nMovingObject.prototype.draw = function(ctx) {\n  \n\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n};\n\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nfunction Ship(params) { \n  if (!params.color) {\n    params.color = \"#00FF00\";\n  }\n  if (!params.radius) {\n    params.radius = 10;\n  }\n  params.vel = Util.randomVec(50);\n  MovingObject.call(this, params);\n}\n\nUtil.inherits(MovingObject, Ship);\n\n\nShip.prototype.relocate = function (pos) {\n  this.pos = pos;\n\n};\n\nShip.prototype.power = function (impulse) {\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(Parent, Child) {\n    function Surrogate() {}\n    Surrogate.prototype = Parent.prototype;\n    Child.prototype = new Surrogate();\n    Child.prototype.constructor = Child;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n\n\n}\n\n\n\nmodule.exports = Util;\n\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });