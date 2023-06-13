const express = require("express");
const app = express();
const mainRouter = require("./router");
const { mid1, mid2, mid3 } = require("./middleware/helloMiddleware");
const handleError = require("./middleware/handleErrorMiddleware");
// const helloMiddleware = require("./middleware/helloMiddleware");

app.use(express.json());

/**
 * En global (.use()) toutes les routes sont concernées !
 */

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

/**
 * 1 seule route est concernée par les middlewares
 */
app.get("/admin", mid1, mid2, (req, res) => {
	res.send(req.user);
});

app.get("/syncError", (req, res) => {
	throw new Error("BadaBoom 💥");
});

app.get("/asyncError", (req, res, next) => {
	setTimeout(() => {
		try {
			throw new Error("💥 Boom 💥");
		} catch (error) {
			next(error);
		}
	}, 1000);
});

app.use(mainRouter);

app.use(handleError);

module.exports = app;
