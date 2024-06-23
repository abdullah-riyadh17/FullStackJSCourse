function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error! Division by zero.";
  }
  return a / b;
}

// Example usage
let resultAdd = add(10, 5); // 15
let resultSubtract = subtract(10, 5); // 5
let resultMultiply = multiply(10, 5); // 50
let resultDivide = divide(10, 5); // 2
let resultDivideByZero = divide(10, 0); // "Error! Division by zero."

console.log(resultAdd);
console.log(resultSubtract);
console.log(resultMultiply);
console.log(resultDivide);
console.log(resultDivideByZero);
