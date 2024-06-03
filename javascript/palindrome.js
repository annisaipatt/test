const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(str) {
  const cleanedStr = str.replace(/\s/g, '').toLowerCase();
  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Using readline to read input from the terminal
rl.question('Enter a word: ', (inputString) => {
  // Calling the isPalindrome function with input from the terminal
  let result = isPalindrome(inputString);

  console.log(`Is '${inputString}' a palindrome? ${result}`);

  rl.close();
});
