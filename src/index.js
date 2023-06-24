import * as readline from 'node:readline';

const userName = process.argv.filter((item) => item.startsWith('--')).join().split('=').slice(1);

function welcome() {
  console.log(`Welcome to the File Manager, ${userName.length && userName[0] ? userName : 'Anonymous'}!`);
}

welcome();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
});

rl.prompt();

const commands = {
  helpMe() {
    console.log('I neeeed help! I`m so tired');
  },
};

rl
  .on('line', (input) => {
    const line = input.trim();
    const command = commands[line];

    if (line === '.exit') {
      rl.close();
    } else if (command) {
      command();
    } else {
      console.log('Unknown command');
    }

    rl.prompt();
  })
  .on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
  });
