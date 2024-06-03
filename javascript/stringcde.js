function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < length; i++) { 
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
    }
     return result;
}
const randomString = generateRandomString(4) + '-' + generateRandomString(3) + '-' + generateRandomString(4);
console.log(randomString);
