import os from 'os';

export default function currentDirectory() {
  return os.homedir();
}
