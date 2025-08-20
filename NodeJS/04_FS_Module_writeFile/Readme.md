# FS Module - Write File
1. Do all steps explained in the 1st task
2. inside index.js, import the fs module
```
import fs from 'fs'; 
// as it is a built-in module, we don't need to install it separately
```
3. Let's create a folder first and then write a file inside it
```
fs.mkdir('./test', { recursive: true }, (err) => {
    if (err) {
        console.error(err);
    }else{
        fs.writeFile('./test/file.txt', 'Hello World', (err) => {
            if (err) {
                console.error(err);
            }else{
                console.log('File created successfully');
            }
        })
    }
})
```