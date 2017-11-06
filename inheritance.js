Function.prototype.inherits = function(parent, child) {
  const Surrogate = function(){};
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate();
  child.prototype.constructor = child;
}

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);


  //defines a surrogate class
  //Set the prototype of the Surrogate (Surrogate.prototype = SuperClass.prototype)
  //Set Subclass.prototype = new Surrogate()
  //Set Subclass.prototype.constructor = Subclass
// function Animal(name) {
//   this.name = name;
// }
//
// Animal.prototype.eat = function() {
//   console.log("mmmm")
// };
//
// function Dog(name) {
//   Animal.call(this, name);
//   // this.name = name;
// };
//
// const inherit = function(parent, child) {
//   let Surrogate = function(){};
//   Surrogate.prototype = parent.prototype;
//   child.prototype = new Surrogate();
//   child.prototype.constructor = child;
// }
//
// Dog.prototype = new Surrogate();
// Dog.prototype.constructor = Dog;
//
// Dog.prototype.woof = function() {
//   console.log("woof")
// };
//
// let Surrogate = function(){};
// Surrogate.prototype = Animal.prototype;
