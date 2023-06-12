const express = require("express");
const userController = require("./controllers/userController");

const app = express();

app.get("/", userController.getAllUser);
app.get("/:id", userController.getOneUser);

module.exports = app;
