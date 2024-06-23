// Function Scope
function testFunctionScope() {
  let insideFunction = "I am inside the function";
  console.log(insideFunction); // This will log the value
}

testFunctionScope();

try {
  console.log(insideFunction); // This will cause a ReferenceError
} catch (error) {
  console.error("Error:", error.message); // This will log "Error: insideFunction is not defined"
}

// Block Scope with let and const
function testBlockScope() {
    if (true) {
        let insideBlock = "I am inside the block";
        const insideConstBlock = "I am a constant inside the block";
        console.log(insideBlock); // This will log the value
        console.log(insideConstBlock); // This will log the value
    }
    
    try {
        console.log(insideBlock); // This will cause a ReferenceError
    } catch (error) {
        console.error("Error:", error.message); // This will log "Error: insideBlock is not defined"
    }
    
    try {
        console.log(insideConstBlock); // This will cause a ReferenceError
    } catch (error) {
        console.error("Error:", error.message); // This will log "Error: insideConstBlock is not defined"
    }
}

testBlockScope();
