const { log } = require("console");
const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "../public");
log(publicPath);
// app.use(express.static(publicPath));
app.get("", (_, resp) => {
  resp.sendFile(`${publicPath}/home.html`);
});

app.get("/contact", (_, resp) => {
  resp.sendFile(`${publicPath}/contact.html`);
});

app.listen(4000);
