import {fileURLToPath} from 'url';
import path, {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const resolvedPath = path.resolve(__dirname, 'index.js');

console.log(__filename);
console.log(__dirname);
console.log(resolvedPath);

