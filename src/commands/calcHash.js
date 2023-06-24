import fs from 'fs';
import path from 'path';
import { failedError } from '../constants.js';
import { createHash } from 'crypto';

export default function calcHash(path_to_file) {
  const absolutePath = path.resolve(path_to_file);

  if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile()) {
    const content = fs.readFileSync(absolutePath, 'utf-8');
    
    console.log(createHash('sha256').update(content).digest('hex'));
  } else {
    failedError();
  }
}