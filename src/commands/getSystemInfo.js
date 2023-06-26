import os from 'os';
import { invalidError } from '../constants.js';

export default function getSystemInfo(flag) {
  switch (flag) {
    case '--EOL':
      console.log(JSON.stringify(os.EOL));
      break;

    case '--cpus':
      console.table(os.cpus().map((info) => ({
        model: info.model,
        speed: info.speed,
      })));
      break;

    case '--homedir':
      console.log(os.homedir());
      break;

    case '--username':
      console.log(os.userInfo().username);
      break;

    case '--architecture':
      console.log(os.arch());
      break;

    default:
      invalidError();
      break;
  }
}
