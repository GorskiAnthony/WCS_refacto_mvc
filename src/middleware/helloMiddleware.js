/**
 * req = request, request est connu (reste le même) de partout
 */

const mid1 = (req, res, next) => {
	const user = {
		name: "Anthony",
		lname: "leBG",
		role: "user",
	};
	req.fname = "Anthony";
	req.user = user;
	console.log("je suis le middleware 1 😆");
	next();
};

const mid2 = (req, res, next) => {
	req.lname = "leBG";
	if (req.user.role === "admin") {
		console.log(req.user);
		console.log("je suis le middleware 2 😭");
		next();
	} else {
		// throw new Error("Oups, tu n'est pas admin");
		return res.status(401).send("Oups, tu n'est pas admin");
	}
};

const mid3 = (req, res, next) => {
	req.fullname = `${req.fname} ${req.lname}`;
	console.log("je suis le middleware 3 🚀");
	next();
};

module.exports = {
	mid1,
	mid2,
	mid3,
};
