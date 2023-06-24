import fs from "fs";
import { failedError } from "../constants.js";

export default async function copy(args) {
  const [path_to_file, path_to_new_directory] = args;

  const read = fs.createReadStream(path_to_file);
  const write = fs.createWriteStream(path_to_new_directory);

  read.pipe(write);

  read.on('error', () => failedError());
  write.on('error', () => failedError());
}