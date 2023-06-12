const app = require("./src/app");

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, (err) => {
	if (err) {
		console.log("Error starting server");
	} else {
		console.log("Server running on port: " + PORT);
	}
});
