import fs from 'fs';
import { failedError } from '../constants.js';

export default async function copy(args) {
  const [pathToFile, pathToNewDirectory] = args;

  const read = fs.createReadStream(pathToFile);
  const write = fs.createWriteStream(pathToNewDirectory);

  read.pipe(write);

  read.on('error', () => failedError());
  write.on('error', () => failedError());
}
