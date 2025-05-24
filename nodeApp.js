// new comments just for test
const http = require('http');
const routes = require('./route');
// const server = http.createServer((req, res) => {});
const server = http.createServer(routes);

server.listen(3000, () =>
  console.log('Server running on http://localhost:3000')
);
