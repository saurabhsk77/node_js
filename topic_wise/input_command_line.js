const fs = require("fs");
const input = process.argv;
const operation = input[2];
const fileName = input[3];
const fileData = input[4];
if (operation == "add") {
  fs.writeFileSync(fileName, fileData);
} else if (operation == "remove") {
  fs.unlinkSync(fileName);
} else {
  console.log("invalid operation");
}

//node input_command_line.js add intro.txt 'my name is saurabh'
