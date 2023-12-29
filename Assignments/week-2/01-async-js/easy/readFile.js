const fs = require("fs");

fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("welcome to file system\n");
    console.log(data);
});