import path from 'path';
import fs from 'fs';
import { failedError } from '../constants.js';

export default function createFile(newFileName) {
  const filePath = path.join(process.cwd(), newFileName);

  if (fs.existsSync(filePath)) {
    failedError();
    console.error('File already exist');
  } else {
    fs.writeFileSync(filePath, '');
  }
}
