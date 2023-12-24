//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
const password = "ILoveProgramming";

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.post("/check", (req, res) => {
    let enteredPword = req.body["password"];
    if (enteredPword === password) {
        res.sendFile(`${__dirname}/public/secret.html`);
    } else {
        res.send("Uh oh. The password was wrong 🥲");
    }
});

app.listen(port, () => {
    console.log(`Server up on port ${port}`);
});
