const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
	const token = req.cookies.token;
	if (!token) return res.status(401).send("Login/Register to get access!");
	try {
		const verify = jwt.verify(token, process.env.secret);
		req.user = verify;
		next();
	} catch (err) {
		res.status(400).send("Invalid token");
	}
};