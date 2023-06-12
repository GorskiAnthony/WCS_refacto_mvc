const express = require("express");
const db = require("./database/config");

const app = express();

app.get("/", async (req, res) => {
	const data = await db.query("SELECT * FROM formateur");
	res.send(data);
});

module.exports = app;
