"use strict";

const { promisify } = require("util");
const fs = require("fs");
const config = require("./config");
var templatePath;
try {
	templatePath = require(`${config.get("templates")}/${config.get(
		"templatename"
	)}`);
} catch (err) {
	console.log(
		"Failed to find the custom template, did you configure it correctly?"
	);
	console.log("Using default template");
	templatePath = require("./template");
}
const writeFileAsync = promisify(fs.writeFile);

module.exports = async filePath => {
	try {
		await writeFileAsync(filePath, templatePath, {
			encoding: "utf8"
		});
	} catch (err) {
		console.log("ERROR:", err);
	}
};
