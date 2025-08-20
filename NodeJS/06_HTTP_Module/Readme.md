# HTTP Module (to work with HTTP requests and responses)
1. Do all steps explained in the 1st task
2. inside index.js, import following
```
import http from 'http';
import fs from 'fs';
import path from 'path';
```
3. Now we will create an HTTP server where we can handle HTTP requests and responses
```
const server = http.createServer((req, res) => {

});
```
4. Now we will start the server
```
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
```
5. Now we will create a route for the home page
```
server.on('request', (req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                console.error(err);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
});
```
6. Now we will start the server
```
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
```
7. Now we can open the index.html file in the browser