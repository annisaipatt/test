// Importing the readline module from Node.js
const readline = require('readline');

// Creating an interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to generate a new array with the multiplication result of each element excluding the element at that index
function generateMultiplicationArray(inputArray) {
  // Initializing the result array
  let resultArray = [];

  // Looping through each element of inputArray
  for (let i = 0; i < inputArray.length; i++) {
    // Initializing the multiplication result for each element
    let product = 1;

    // Loop to calculate multiplication, excluding the element at that index
    for (let j = 0; j < inputArray.length; j++) {
      if (i !== j) {
        product *= inputArray[j];
      }
    }

    // Adding the multiplication result to the result array
    resultArray.push(product);
  }

  // Returning the result array
  return resultArray;
}

// Asking the user to input array elements
rl.question('Enter array elements (separated by commas): ', (input) => {
  // Converting input into a numeric array
  const inputArray = input.split(',').map(Number);

  // Validating input to ensure all elements are numbers
  if (inputArray.some(isNaN)) {
    console.log('Invalid input. Please enter valid numbers.');
    rl.close();
    return;
  }

  // Generating a new array with multiplication results
  const resultArray = generateMultiplicationArray(inputArray);

  // Displaying the array multiplication result
  console.log('Array multiplication result:', resultArray);

  // Closing the readline interface
  rl.close();
});
