// Base constructor function
function Animal(name, species) {
  this.name = name;
  this.species = species;
}

// Adding a method to the Animal prototype
Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};

// Derived constructor function
function Dog(name, species, breed) {
  Animal.call(this, name, species); // Call the Animal constructor
  this.breed = breed;
}

// Inheriting the Animal prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding a method to the Dog prototype
Dog.prototype.bark = function () {
  console.log(`${this.name} is barking.`);
};

// Creating instances of Animal and Dog
const animal1 = new Animal("Lion", "Wild");
const dog1 = new Dog("Buddy", "Domestic", "Golden Retriever");

animal1.eat(); // Output: Lion is eating.
dog1.eat(); // Output: Buddy is eating.
dog1.bark(); // Output: Buddy is barking.


// Base class
class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    // Method
    start() {
      console.log(`${this.make} ${this.model} is starting.`);
    }
  }
  
  // Derived class
  class Car extends Vehicle {
    constructor(make, model, doors) {
      super(make, model); // Call the parent constructor
      this.doors = doors;
    }
  
    // Method
    honk() {
      console.log(`${this.make} ${this.model} is honking.`);
    }
  }
  
  // Creating instances of Vehicle and Car
  const vehicle1 = new Vehicle('Generic', 'Vehicle');
  const car1 = new Car('Toyota', 'Corolla', 4);
  
  vehicle1.start(); // Output: Generic Vehicle is starting.
  car1.start(); // Output: Toyota Corolla is starting.
  car1.honk(); // Output: Toyota Corolla is honking.
  
  