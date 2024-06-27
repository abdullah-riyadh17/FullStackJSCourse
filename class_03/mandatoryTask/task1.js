// Global Context
console.log(this); // In a browser, this will log the Window object

// Object Method
const person = {
  name: "Abdullah",
  greet: function () {
    console.log("Hello, my name is", this.name);
  },
};

person.greet(); // Hello, my name is Abdullah

// Function Context
function functionContext() {
  console.log(this);
}

functionContext(); // Window (or global object in Node.js), or undefined in strict mode

// Constructor Function
function car(model) {
  this.model = model;
}

const car1 = new car("Tesla");
console.log(car1.model); // Outputs: Tesla

// Class Context
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name);
  }
}

const abdullah = new Person("Riyadh");
abdullah.greet(); // output: 'Riyadh'
