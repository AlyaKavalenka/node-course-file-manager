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
import getSystemInfo from './commands/getSystemInfo.js';
import { invalidError } from './constants.js';
import compressFile from './commands/compressFile.js';
import decompressFile from './commands/decompressFile.js';

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

const commands = {
  cat(pathToFile) {
    read(pathToFile);
  },
  rn(args) {
    rename(args);
  },
  cp(args) {
    copy(args);
  },
  rm(pathToFile) {
    deleteFile(pathToFile);
  },
  mv(args) {
    move(args);
  },
  cd(pathToDirectory) {
    cdToFolder(pathToDirectory);
  },
  up() {
    cdUpper();
  },
  ls() {
    list();
  },
  add(newFileName) {
    createFile(newFileName);
  },
  hash(pathToFile) {
    calcHash(pathToFile);
  },
  os(flag) {
    getSystemInfo(flag);
  },
  compress(args) {
    compressFile(args);
  },
  decompress(args) {
    decompressFile(args);
  },
};

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
