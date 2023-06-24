import copy from "./copy.js";
import deleteFile from "./deleteFile.js";

export default function move(args) {
  const [path_to_file] = args;

  copy(args).then(() => deleteFile(path_to_file));
}