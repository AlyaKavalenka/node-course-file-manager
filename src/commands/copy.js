import fs from 'fs';
import path from 'path';
import { failedError } from '../constants.js';

export default async function copy(args) {
  const [pathToFile, pathToNewDirectory] = args;

  const correctPathToNewDirectory = pathToNewDirectory.split('.').length > 1 ? pathToNewDirectory : path.join(pathToNewDirectory, pathToFile.split('/')[pathToFile.split('/').length - 1]);

  const read = fs.createReadStream(pathToFile);
  const write = fs.createWriteStream(correctPathToNewDirectory);

  read.pipe(write);

  read.on('error', (err) => failedError(err.message));
  write.on('error', (err) => failedError(err.message));
}
