import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { failedError } from '../constants.js';

export default function calcHash(pathToFile) {
  const absolutePath = path.resolve(pathToFile);

  if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile()) {
    const content = fs.readFileSync(absolutePath, 'utf-8');

    console.log(createHash('sha256').update(content).digest('hex'));
  } else {
    failedError();
  }
}
