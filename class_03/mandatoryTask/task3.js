// Constructor Function
function User(name, email) {
    this.name = name;
    this.email = email;
  }
  
  // Adding a method to the prototype
  User.prototype.login = function() {
    console.log(`${this.name} is now online.`);
  };
  
  // Creating instances of User
  const user1 = new User('Zohan', 'zohan@example.com');
  user1.login(); // Output: Zohan is now online.
  const user2 = new User('Abdullah', 'Abdullah@example.com');
  user2.login(); // Output: Abdullah is now online.
  

  // Class Syntax
class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    // Method
    login() {
      console.log(`${this.name} is now online.`);
    }
  }
  
  // Creating instances of User
  const person1 = new Person('Zohan', 'zohan@example.com');
  person1.login(); // Output: Zohan is now online.
  const person2 = new Person('Abdullah', 'Abdullah@example.com');
  person2.login(); // Output: Abdullah is now online.