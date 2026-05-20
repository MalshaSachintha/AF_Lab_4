console.log("Hello Node.js");
const fs = require("fs");

// Read from a file
fs.readFile("file.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

// Write to a file
fs.writeFile("file.txt", "Hello World!", function (err) {
  if (err) throw err;
  console.log("File saved!");
});

//create server
const http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.end();
  })
  .listen(8080);

console.log("Server running on at http://localhost:8080");
