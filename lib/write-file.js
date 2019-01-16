'use strict';

const {
	promisify
} = require('util');
const fs = require('fs');
const template = require('./template');

const writeFileAsync = promisify(fs.writeFile);

module.exports = async filePath => {
	try {
		await writeFileAsync(filePath, template, {
			encoding: 'utf8'
		});
	} catch (err) {
		console.log('ERROR:', err);
	}
};
