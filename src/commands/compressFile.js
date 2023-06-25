import fs from 'fs';
import zlib from 'zlib';
import { failedError } from '../constants.js';

export default function compressFile(args) {
  const [pathToFile, pathToDestination] = args;

  const isExtension = pathToDestination.split('.')[pathToDestination.split('.').length - 1];
  const correctPathToDestination = isExtension === 'br' ? pathToDestination : `${pathToDestination}.br`;

  const read = fs.createReadStream(pathToFile);
  const write = fs.createWriteStream(correctPathToDestination);
  const brotliZlib = zlib.createBrotliCompress();

  read.pipe((brotliZlib)).pipe(write);

  read.on('error', (err) => failedError(err.message));
  brotliZlib.on('error', (err) => failedError(err.message));
  write.on('error', (err) => failedError(err.message));
}
