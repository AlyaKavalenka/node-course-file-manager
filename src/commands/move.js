import copy from './copy.js';
import deleteFile from './deleteFile.js';

export default function move(args) {
  const [pathToFile] = args;

  copy(args).then(() => deleteFile(pathToFile));
}
