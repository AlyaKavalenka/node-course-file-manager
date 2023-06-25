import fs from 'fs';
import path from 'path';

export default function list() {
  const objArr = [];
  fs.readdirSync(process.cwd()).map((file) => {
    const stat = fs.statSync(path.resolve(process.cwd(), file));
    let type = 'symbolic link';

    if (stat.isDirectory()) {
      type = 'directory';
    } else if (stat.isFile()) {
      type = 'file';
    } else {
      type = 'symbolic link';
    }

    objArr.push({
      Name: file,
      Type: type,
    });

    return true;
  });

  console.table(objArr);
}
