function printNumbers() {
  let currentNumber = 1;

  // Create the interval with a delay of 1 second
  const intervalId = setInterval(() => {
    console.log(currentNumber);

    // Check if we reached the last number and clear the interval
    if (currentNumber === 10) {
      clearInterval(intervalId);
    }

    currentNumber++;
  }, 1000);
}

// Call the function to start printing
printNumbers();
