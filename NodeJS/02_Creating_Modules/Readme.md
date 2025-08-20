# Creating and using NodeJS modules
1. Do all steps explained in the previous task
2. Create a module.js file which contains the following functions: add, subtract, multiply
3. Export the functions from the module.js file using the export keyword
```
export {add, subtract, multiply};
```
4. Now import exported functions to index.js so that those functions can be used inside index.js and keep the code clean.
```
import {add, subtract, multiply} from './module.js'
add(1, 2);
subtract(1, 2);
multiply(1, 2);
```
4. Run the code using the command: `npm start` if not started already. 
