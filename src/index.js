import * as readline from 'node:readline';
import initialDirectory from './helpers.js';
import cdToFolder from './commands/cdToFolder.js';
import { invalidError } from './constants.js';
import commands from './commands.js';

const userName = process.argv.filter((item) => item.startsWith('--')).join().split('=').slice(1);

function welcome() {
  console.log(`Welcome to the File Manager, ${userName.length && userName[0] ? userName : 'Anonymous'}!`);
}

cdToFolder(initialDirectory());

function currentDirectoryMessage() {
  console.log(`You are currently in ${process.cwd()}`);
}

welcome();
currentDirectoryMessage();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
});

rl.prompt();

rl
  .on('line', (input) => {
    const line = input.trim().split(' ');
    const command = commands[line[0]];
    const args = line.splice(1);

    if (line === '.exit') {
      rl.close();
    } else if (command) {
      command(args.length > 1 ? args : args.join(''));
    } else {
      invalidError();
    }

    currentDirectoryMessage();
    rl.prompt();
  })
  .on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
  });
