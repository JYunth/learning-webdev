// Declarations
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// Constants
const port = 8000;

const d = new Date();
let day = d.getDay();
console.log(day);
if (day in [1,2,3,4,5]){
	daytypeshit = "a weekday"
	advicetypeshit = "it's time to work hard bruh!"
} else {
	daytypeshit = "a weekend"
	advicetypeshit = "alr u can chill bruh"
}

// GET routes
app.get("/", (req, res) => {
	res.render("index.ejs", {dayType: daytypeshit, advice: advicetypeshit})
});


// POST routes

app.post("/", (req, res) => {
	const requestData = req.body;

	res.send("Thanks for submitting the form");

});


// Listener

app.listen(port, function(){
	console.log(`The server is listening at port: ${port}`);
});