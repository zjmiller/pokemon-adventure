const fs = require('fs');
const http = require('http');
const path = require('path');

const httpRequestListener = (request, response) => {
  var filePath = path.resolve(__dirname, '../public') + request.url;
  filePath += (request.url === '/') ? 'index.html' : '';
  const fileContent = fs.readFileSync(filePath);
  response.end(fileContent);
}

module.exports = http.createServer(httpRequestListener);
