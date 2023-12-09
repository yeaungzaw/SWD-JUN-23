// const http = require('http');

// // Create an HTTP server that responds with "Hello, World!" for all requests
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello, World!\n');
// });

// // Set the server to listen on port 3000
// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

// =============================================

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Handle requests for the root URL
  if (req.url === '/' || req.url === '/index.html') {
    const indexPath = path.join(__dirname, 'index.html');

    // Read the index.html file
    fs.readFile(indexPath, 'utf8', (err, data) => {
      if (err) {
        // Handle error reading file
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
      } else {
        // Serve the content of index.html
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else {
    // Handle other URLs (404 Not Found)
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
