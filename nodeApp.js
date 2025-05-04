const http = require("http");

const server = http.createServer((req, res) => {
  // Set CORS Headers to Allow Requests from Other Ports
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow any domain
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS"); // Allow specific methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow JSON content

  // Handle Preflight Requests (OPTIONS)
  if (req.method === "OPTIONS") {
    res.writeHead(204, { "Content-Type": "text/plain" });
    res.end();
    return;
  }

  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk; // Collecting request data chunks
    });

    req.on("end", () => {
      const parsedData = JSON.parse(body); // Convert JSON string to an object
      console.log("Received message:", parsedData.message);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          status: "success",
          message: "Message received! DONE.",
          msgValue: parsedData.message,
        })
      );
    });
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Only POST requests are accepted.");
  }
});

server.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);
