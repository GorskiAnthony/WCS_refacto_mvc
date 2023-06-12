const app = require("./src/app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
	if (err) {
		console.log("Error starting server");
	}
	console.log("Server running on port: " + PORT);
});
    