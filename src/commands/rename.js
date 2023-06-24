import fs from "fs";
import { rl } from "../index.js";
import { failedError } from "../constants.js";

export default function rename(args) {
  const [oldName, newName] = args;

  if (fs.existsSync(newName) || !fs.existsSync(oldName)) {
    console.log(newName, oldName);
    failedError();
  } else {
    fs.renameSync(oldName, newName);
  }

  rl.prompt();
}