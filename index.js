const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Aapka naam kya hai? ', (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});

