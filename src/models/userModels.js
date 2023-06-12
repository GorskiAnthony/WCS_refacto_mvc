/**
 * Nos modèles concernent un formateur (user)
 */

const db = require("../database/config");

const findAll = () => {
	const SQL = "SELECT * FROM formateur";
	return db.query(SQL);
};

const findOne = (id) => {
	const SQL = "SELECT * FROM formateur WHERE id = ?";
	return db.query(SQL, [id]);
};

module.exports = {
	findAll,
	findOne,
};
