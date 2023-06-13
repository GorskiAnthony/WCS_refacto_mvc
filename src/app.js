const express = require("express");
const app = express();
const mainRouter = require("./router");

app.use(express.json());

const mid1 = (req, res, next) => {
	req.fname = "Anthony";
	console.log("je suis le middleware 1 😆");
	next();
};

const mid2 = (req, res, next) => {
	req.lname = "leBG";
	console.log("je suis le middleware 2 😭");
	next();
};

const mid3 = (req, res, next) => {
	req.fullname = `${req.fname} ${req.lname}`;
	console.log("je suis le middleware 3 🚀");
	next();
};

/**
 * Middleware sur plusieurs lignes
 */
// app.use(mid1);
// app.use(mid2);
// app.use(mid3);

/**
 * Middleware sur 1seule ligne
 */
// app.use(mid1, mid2, mid3);

app.get("/mid", (req, res) => {
	res.send(req.fullname);
});

app.use(mainRouter);

module.exports = app;
