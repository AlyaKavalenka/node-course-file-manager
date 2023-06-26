import os from 'os';

export default function initialDirectory() {
  return os.homedir();
}
