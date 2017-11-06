Function.prototype.inherits = function inherits(parent, child) {
  const Surrogate = function(){};
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate();
  child.prototype.constructor = child;
}

Function.prototype.inherits1 = function inherits1(BaseClass) {
  function Surrogate = function(){};
  this.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}


Function.prototype.inherits2 = function inherits2(BaseClass) {
  this.prototype = Object.create(BaseClass.prototype);
  this.prototype.constructor = this;
}

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);
