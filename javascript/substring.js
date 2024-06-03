const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countOccurrences(word, char) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      count++;
    }
  }
  return count;
}

function analyzeWord(word) {
  const uniqueChars = Array.from(new Set(word));
  
  console.log(`Word: "${word}"`);
  uniqueChars.forEach((char) => {
    const charCount = countOccurrences(word, char); 
    console.log(`${char} = ${charCount}`);
  });
  
  console.log(`Number of characters: ${uniqueChars.length}`);
}

rl.question('Enter a word: ', (userInput) => {
  const wordToAnalyze = userInput.toLowerCase(); // Convert to lowercase for case-insensitive analysis
  analyzeWord(wordToAnalyze);
  rl.close();
});
