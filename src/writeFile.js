const fs = require("fs");

const writeFile = (fileContent) => {
  fs.writeFile("./dist/generated-index.html", fileContent, (err) => {
    if (err) {
      console.log("Error");
    } else {
      console.log("Successfully wrote to index.html");
    }
  });
};

module.exports = writeFile;
