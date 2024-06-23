// Basic IIFE
(function () {
  console.log("This is an IIFE");
})();

// IIFE with Parameters
(function (a, b) {
  console.log(a + b);
})(10, 5); // 15

// IIFE to Avoid Polluting Global Scope
(function () {
  var insideIIFE = "I am inside the IIFE";
  console.log(insideIIFE); // This will log the value
})();

try {
  console.log(insideIIFE); // This will cause a ReferenceError
} catch (error) {
  console.error("Error:", error.message); // This will log "Error: insideIIFE is not defined"
}
