import * as readline from 'node:readline';
import currentDirectory from './helpers.js';
import read from './commands/read.js';
import rename from './commands/rename.js';
import copy from './commands/copy.js';
import deleteFile from './commands/deleteFile.js';

const userName = process.argv.filter((item) => item.startsWith('--')).join().split('=').slice(1);

function welcome() {
  console.log(`Welcome to the File Manager, ${userName.length && userName[0] ? userName : 'Anonymous'}!`);
}

function currentDirectoryMessage() {
  console.log(`You are currently in ${currentDirectory()}`);
}

welcome();
currentDirectoryMessage();

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
});

rl.prompt();

const commands = {
  cat(path_to_file) {
    read(path_to_file);
  },
  rn(args) {
    rename(args);
  },
  cp(args) {
    copy(args);
  },
  rm(path_to_file) {
    deleteFile(path_to_file);
  }
};

rl
  .on('line', (input) => {
    const line = input.trim().split(" ");
    const command = commands[line[0]];
    const args = line.splice(1);

    if (line === '.exit') {
      rl.close();
    } else if (command) {
      command(args.length > 1 ? args : args.join(''));
    } else {
      console.error('Invalid input');
    }

    currentDirectoryMessage();
    rl.prompt();
  })
  .on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
  });
