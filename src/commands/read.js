import fs from "fs";
import { rl } from "../index.js";
import { failedError } from "../constants.js";

export default function read(path_to_file) {
  const stream = fs.createReadStream(path_to_file);
  
  stream.on('data', (chunk) => {
    console.log(chunk.toString());
    rl.prompt();
  });

  stream.on('error', () => failedError())
}