function handleError() {
  try {
    // Simulate an error by dividing by zero
    let result = 10 / 0;
    if (!isFinite(result)) {
      throw new Error("Division by zero error");
    }
  } catch (error) {
    // Handle the error
    console.error("I have handled the error successfully.");
  }
}

// Call the function to see the error handling in action
handleError();
