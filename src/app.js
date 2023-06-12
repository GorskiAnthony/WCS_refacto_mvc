const express = require("express");
const userModels = require("./models/userModels");

const app = express();

app.get("/", async (req, res) => {
	try {
		const [users] = await userModels.findAll();
		res.status(200).send(users);
	} catch (error) {
		res.status(500).send("Oups, le serveur est en panne 😅");
	}
});

app.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const data = await userModels.findOne(id);
		const user = data[0][0];
		//  [[user]] === user[0][0]
		res.status(200).send(user);
	} catch (error) {
		res.status(500).send("Oups, le serveur est en panne 😅");
	}
});

module.exports = app;
