import fs from 'fs';
import path from 'path';
import { failedError } from '../constants.js';

export default function cdToFolder(pathToDirectory) {
  const absolutePath = path.resolve(pathToDirectory);

  if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isDirectory()) {
    process.chdir(absolutePath);
  } else {
    failedError();
  }
}
