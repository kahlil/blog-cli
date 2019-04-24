'use strict';

const {
	promisify
} = require('util');
const fs = require('fs');
const config = require('./config');
const templatePath = require(`${config.get('templates')}/${config.get('templatename')}`);
const writeFileAsync = promisify(fs.writeFile);

module.exports = async filePath => {
	try {
		await writeFileAsync(filePath, templatePath, {
			encoding: 'utf8'
		});
	} catch (err) {
		console.log('ERROR:', err);
	}
};
