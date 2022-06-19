const http = require("http"); // http module
const data = require("./data");

http
  .createServer((_, resp) => {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(4000);
