const express = require("express");
const path = require("path");
const app = express();

//console.log(__dirname);
//console.log(__filename);
const absolutePath = path.join(__dirname, "/public/");

app.use(express.static(absolutePath));

app.get("/", (req, res) => {
	res.send("Welcome to Express");
});

app.get("/hw", (req, res) => {
	res.send("<h1>Hello World</h1>");
});

app.get("/hwo", (req, res) => {
	res.send({
		name: "Muhammad Irfan Afzal",
		message: "Hello World",
		class: "Bootcamp"
	});
});

app.get("/about", (req, res) => {
	res.send("About US Page");
});

app.get("*", (req, res) => {
	res.send("404 - Page not found");
});

app.listen(3000, () => {
	console.log("Server is up, check http://localhost:3000");
});
