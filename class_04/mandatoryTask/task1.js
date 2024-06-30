function greet(name) {
  // Use setTimeout to schedule the function execution after 10 seconds
  setTimeout(function () {
    console.log(`Hello World, ${name}`);
  }, 10000);
}

// Call the function with name
const myName = "Abdullah Riyadh";
greet(myName);
