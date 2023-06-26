import path from 'path';
import { failedError } from '../constants.js';

export default function cdUpper() {
  const current = process.cwd();
  const upper = path.join(current, '..');

  if (current !== upper) {
    process.chdir(upper);
  } else {
    failedError();
  }
}
