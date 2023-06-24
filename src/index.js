import * as readline from 'node:readline';
import initialDirectory from './helpers.js';
import read from './commands/read.js';
import rename from './commands/rename.js';
import copy from './commands/copy.js';
import deleteFile from './commands/deleteFile.js';
import move from './commands/move.js';
import cdToFolder from './commands/cdToFolder.js';
import cdUpper from './commands/cdUpper.js';
import list from './commands/list.js';
import createFile from './commands/createFile.js';
import calcHash from './commands/calcHash.js';

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
  },
  mv(args) {
    move(args);
  },
  cd(path_to_directory) {
    cdToFolder(path_to_directory);
  },
  up() {
    cdUpper();
  },
  ls() {
    list();
  },
  add(new_file_name) {
    createFile(new_file_name);
  },
  hash(path_to_file) {
    calcHash(path_to_file);
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
