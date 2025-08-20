# Creating and using NodeJS modules
1. Do all steps explained in the 1st task

## FS Module (File System Module - a built-in module in NodeJS)
1. inside index.js, import the fs module
```
import fs from 'fs'; 
// as it is a built-in module, we don't need to install it separately
```
2. Now we can use the fs module to create a folder
```
fs.mkdir('new_folder', { recursive: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Folder created successfully');
    }
});
```