import fs from 'fs';

fs.mkdir('folderName', { recursive: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Folder created successfully');
    }
});

/*
fs.mkdir() is used to create a new directory

fs.mkdir() accepts 3 parameters
1. directory (folder) name
2. {recursive: true}
we can use recursive option to create a directory inside a directory
3. callback function (a function that will be executed after the directory is created)
callback function can contain error object as a parameter, so that we can handle errors
*/
