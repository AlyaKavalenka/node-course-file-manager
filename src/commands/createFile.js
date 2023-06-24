import path from 'path';
import fs from 'fs';
import { failedError } from '../constants.js';

export default function createFile(new_file_name) {
  const filePath = path.join(process.cwd(), new_file_name);

  if (fs.existsSync(filePath)) {
    failedError();
    console.error('File already exist');
  } else {
    fs.writeFileSync(filePath, '');
  }
}