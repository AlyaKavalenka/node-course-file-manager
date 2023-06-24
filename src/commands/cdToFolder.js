import fs from 'fs';
import path from 'path';
import { failedError } from '../constants.js';

export default function cdToFolder(path_to_directory) {
  const absolutePath = path.resolve(path_to_directory);

  if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isDirectory()) {
    process.chdir(absolutePath);
  } else {
    failedError();
  }
}