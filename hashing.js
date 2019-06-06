const bcrypt = require("bcrypt");

(async function() {
	let password = "daniel";
	let wrongPW = "jacob";

	console.time("Hash time");
	const hash = await bcrypt.hash(password, 10);
	console.timeEnd("Hash time");
	console.log("-------------");
	console.log("old password:", password);
	console.log("hashed password:", hash);
	console.log("ver:", hash.substring(0, 3));
	console.log("rounds:", hash.substring(3, 6));
	console.log("salt:", hash.substring(6, 28));

	const match = await bcrypt.compare(password, hash);

	console.log("does the password match?", match);
})();
