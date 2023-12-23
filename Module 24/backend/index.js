import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("hallo this is not cool");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
});

app.get("/contact",(req, res) => {
    res.send("<h1>Contact me!</h1>")
});

app.listen(3000, () => {
    console.log("Server running on port 3000.");
});