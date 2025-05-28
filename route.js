const requestHandler = (req, res) => {
  // Set CORS Headers to Allow Requests from Other Ports
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow any domain
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS'); // Allow specific methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow JSON content

  // Handle Preflight Requests (OPTIONS)
  if (req.method === 'OPTIONS') {
    res.writeHead(204, { 'Content-Type': 'text/plain' });
    res.end();
    return;
  }
  let body = '';
  const users = [];

  if (req.url === '/' && req.method === 'POST') {
    console.log('url is :  / ');

    req.on('data', (chunk) => {
      body += chunk; // Collecting request data chunks
    });
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          status: 'success',
          message: 'new user added is : ',
          msgValue: 'no one',
        })
      );
    });
  } else if (req.url === '/users' && req.method === 'POST') {
    // let body = "";

    req.on('data', (chunk) => {
      body += chunk; // Collecting request data chunks
    });

    req.on('end', () => {
      const parsedData = JSON.parse(body); // Convert JSON string to an object
      console.log('username is :', parsedData.username);

      users.push(parsedData.username);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          status: 'success',
          message: 'new user added is ',
          msgValue: parsedData.username,
        })
      );
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Only POST requests are accepted.');
  }
};
module.exports = requestHandler;
