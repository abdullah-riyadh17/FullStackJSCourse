// Utility function
function calculateArea() {
  return this.width * this.height;
}

// Object 1
const rectangle = {
  width: 10,
  height: 20,
};

// Object 2
const square = {
  width: 15,
  height: 15,
};
// Find the area for the rectangle using call
const rectangleAreaCall = calculateArea.call(rectangle);
console.log(rectangleAreaCall); // Output: 200

const squareAreaCall = calculateArea.call(square);
console.log(squareAreaCall); // Output: 225

// Find the area for the rectangle using bind
const calculateRectangleArea = calculateArea.bind(rectangle);
const rectangleAreaBind = calculateRectangleArea();
console.log(rectangleAreaBind); // Output: 200

// Find the area for the square using bind
const calculateSquareArea = calculateArea.bind(square);
const squareAreaBind = calculateSquareArea();
console.log(squareAreaBind); // Output: 225
