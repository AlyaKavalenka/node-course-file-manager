import fs from 'fs';
import { failedError } from '../constants.js';

export default function deleteFile(pathToFile) {
  if (fs.existsSync(pathToFile)) {
    fs.unlinkSync(pathToFile);
  } else {
    failedError();
  }
}
