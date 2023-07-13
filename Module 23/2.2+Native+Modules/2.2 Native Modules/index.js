const fs = require("fs");

// fs.writeFile("message.txt", "Hello Jheyanth!", (err) => {
//     if (err) throw err;
//     console.log("File has been successfully saved!");
// });

fs.readFile("message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});