import fs from 'fs'

fs.mkdir('folderName', { recursive: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        fs.writeFile('folderName/file.txt', 'Hello World', (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('File created successfully');
            }
        });
    }
});