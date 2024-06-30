function checkCondition() {
  return new Promise((resolve, reject) => {
    let condition = Math.random() > 0.5; // Example condition: 50% chance to resolve or reject
    if (condition) {
      resolve("I am resolved");
    } else {
      reject("I am rejected");
    }
  });
}

// Call the Promise and handle the result
checkCondition()
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
