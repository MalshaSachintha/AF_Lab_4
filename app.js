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

// http request
const https = require("https");

https
  .get("https://jsonplaceholder.typicode.com/posts/1", (resp) => {
    let data = "";

    resp.on("data", (chunk) => {
      data += chunk;
    });

    resp.on("end", () => {
      console.log(JSON.parse(data));
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });

// my module
const myModule = require("./my-Module.js");
console.log(myModule.myFunction());

// promises
const condition = true; // Change this to false to test rejection
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (condition) {
      resolve("success!");
    } else {
      reject("Failure!");
    }
  }, 3000);
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// async/await

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log("Error: " + error);
  }
}

myFunction();
