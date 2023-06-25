import fs from 'fs';
import zlib from 'zlib';
import { failedError } from '../constants.js';

export default function decompressFile(args) {
  const [pathToFile, pathToDestination] = args;

  const pathToArr = pathToDestination.split('.');
  const correctPathToDestination = pathToArr > 1 ? pathToDestination : `${pathToDestination}.txt`;

  const read = fs.createReadStream(pathToFile);
  const write = fs.createWriteStream(correctPathToDestination);
  const brotliZlib = zlib.createBrotliDecompress();

  read.pipe((brotliZlib)).pipe(write);

  read.on('error', (err) => failedError(err.message));
  brotliZlib.on('error', (err) => failedError(err.message));
  write.on('error', (err) => failedError(err.message));
}
