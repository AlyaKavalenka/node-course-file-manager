import fs from "fs";
import { failedError } from "../constants.js";

export default function deleteFile(path_to_file) {
  fs.existsSync(path_to_file) ? fs.unlinkSync(path_to_file) : failedError();
}