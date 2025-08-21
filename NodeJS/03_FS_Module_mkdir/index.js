import fs   from 'fs'

fs.mkdir('new_folder', { recursive: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Folder created successfully');
    }
});