/*
 *file system & crud operation using file system
 */

const path = require("path");
const fs = require("fs");
const { log } = require("console");
const dirPath = path.join(__dirname, "files");
//create file
fs.writeFileSync(`${dirPath}/intro.txt`, "my name is saurabh");

//read file
fs.readFile(`${dirPath}/intro.txt`, "utf8", (err, data) => {
  if (!err) console.log(data);
});

//update file
fs.appendFile(`${dirPath}/intro.txt`, " and i am 23 years old", (err) => {
  if (!err) {
    log("file updated successfully");
  }
});

//read file second way
fs.readFile(`${dirPath}/intro.txt`, (err, data) => {
  if (!err) console.log(data.toString());
});

//rename file
fs.rename(`${dirPath}/intro.txt`, `${dirPath}/intro_rename.txt`, (err) => {
  if (!err) {
    log("file renamed successfully");
  }
});

//delete file
fs.unlink(`${dirPath}/intro_rename.txt`, (err) => {
  if (!err) {
    log("file deleted successfully");
  }
});

//see the filename in console
log(__filename);

//see the directory path in console
log(__dirname);

//read the directory file
fs.readdir(dirPath, (err, files) => {
  if (!err) {
    files.forEach((file) => {
      log(file);
    });
  }
});
