const fs = require("fs");
let content = "Hello this is example of writing a file"
fs.writeFile("sample.txt", content, "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("welcome to file system\n");
})