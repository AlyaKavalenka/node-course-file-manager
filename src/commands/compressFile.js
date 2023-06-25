import fs from 'fs';
import zlib from 'zlib';
import { failedError } from '../constants.js';

export default function compressFile(args) {
  const [pathToFile, pathToDestination] = args;

  const read = fs.createReadStream(pathToFile);
  const write = fs.createWriteStream(pathToDestination);
  const brotliZlib = zlib.createBrotliCompress();

  read.pipe((brotliZlib)).pipe(write);

  read.on('error', (err) => failedError(err.message));
  brotliZlib.on('error', (err) => failedError(err.message));
  write.on('error', (err) => failedError(err.message));
}
