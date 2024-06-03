const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});
 
function generatePattern(n) {

    let l = 1;

    let r = 3;
 
    for (let i = 1; i <= n; i++) {

        let p = Array.from({ length: n + 3 }, (_, index) => index + 1);

        p.splice(l, 2, '*', '*');

        console.log(p.join(''));

        r += 1;

        l += 1;

    }

    rl.close();

}
 
// Meminta input dari terminal

rl.question('Enter a number: ', (answer) => {

    const userInput = parseInt(answer);
 
    if (!isNaN(userInput)) {

        console.log(`Input: ${userInput}`);

        generatePattern(userInput);

    } else {

        console.log("Invalid input. Please enter a number.");

        rl.close();

    }

});
