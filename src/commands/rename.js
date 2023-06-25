import fs from 'fs';
import { failedError } from '../constants.js';

export default function rename(args) {
  const [oldName, newName] = args;

  if (fs.existsSync(newName) || !fs.existsSync(oldName)) {
    failedError();
  } else {
    fs.renameSync(oldName, newName);
  }
}
