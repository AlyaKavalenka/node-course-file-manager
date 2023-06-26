import read from './commands/read.js';
import rename from './commands/rename.js';
import copy from './commands/copy.js';
import deleteFile from './commands/deleteFile.js';
import move from './commands/move.js';
import cdUpper from './commands/cdUpper.js';
import list from './commands/list.js';
import createFile from './commands/createFile.js';
import calcHash from './commands/calcHash.js';
import getSystemInfo from './commands/getSystemInfo.js';
import compressFile from './commands/compressFile.js';
import decompressFile from './commands/decompressFile.js';
import cdToFolder from './commands/cdToFolder.js';

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

export default commands;
