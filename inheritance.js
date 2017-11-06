Function.prototype.inherits = function() {
  class Surrogate {
    constructor(parent, child) {
      parent = this.parent;
      child = this.child;
    }
  }
  //defines a surrogate class
  //Set the prototype of the Surrogate (Surrogate.prototype = SuperClass.prototype)
  //Set Subclass.prototype = new Surrogate()
  //Set Subclass.prototype.constructor = Subclass
}

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log("mmmm")
};

function Dog(name) {
  Animal.call(this, name);
  // this.name = name;
};

Dog.prototype = new Surrogate();
Dog.prototype.constructor = Dog;

Dog.prototype.woof = function() {
  console.log("woof")
};

let Surrogate = function(){};
Surrogate.prototype = Animal.prototype;
