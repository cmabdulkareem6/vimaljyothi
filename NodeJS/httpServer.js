import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req, res) => {
  let filePath = '';

  // Determine the file to serve based on the URL
  switch (req.url) {
    case '/':
      filePath = 'index.html';
      break;
    case '/about':
      filePath = 'about.html';
      break;
    default:
      filePath = '404.html';
      break;
  }

  // Read and serve the determined file
  fs.readFile(path.resolve(filePath), (err, data) => {  // path.resolve(filePath) will return the absolute path of the file
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }

    // Set the response HTTP header with HTTP status and Content-Type
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Send the response body
    res.end(data);
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
