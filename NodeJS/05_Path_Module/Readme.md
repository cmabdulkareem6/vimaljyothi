# Path Module - (to get the absolute path of a file or directory)
1. Do all steps explained in the 1st task
2. inside index.js, import following
```
import {fileURLToPath} from 'url';
import path, {dirname} from 'path';
```
3. Now we can use the path module to get the absolute path of a file
```
const __filename = fileURLToPath(import.meta.url);
```
4. Now we can use the path module to get the absolute path of a directory
```
const __dirname = dirname(__filename);
```
5. Now we can use the path module to get the absolute path of a file or directory
```
const resolvedPath = path.resolve(__dirname, 'index.js');
```