import fs from 'fs';
import { failedError } from '../constants.js';

export default function read(pathToFile) {
  const stream = fs.createReadStream(pathToFile);

  stream.on('data', (chunk) => console.log(chunk.toString()));

  stream.on('error', () => failedError());
}
