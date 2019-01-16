'use strict';

const open = require('opn');

const config = require('./lib/config');
const writeFile = require('./lib/write-file');
const publish = require('./lib/publish');

module.exports = (input, flags) => {
	// Configure the path to the markdown posts.
	if (flags.path) {
		config.set('path', flags.path);
		return `Set the path \`${flags.path}\` for your blog posts`;
	}

	if (input === 'publish') {
		publish();
		return '✨ Your changes have been published';
	}

	if (input) {
		const time = new Date();
		const day = time.getDate();
		const month = time.getMonth() + 1;
		const dd = `${day}`.length < 2 ? `0${day}` : `${day}`;
		const mm = `${month}`.length < 2 ? `0${month}` : `${month}`;
		const yyyy = time.getFullYear();
		const fileName = `${yyyy}-${mm}-${dd}-${input}`;
		const filePath = `${config.get('path')}/${fileName}.md`;
		writeFile(filePath);
		open(filePath, {
			app: 'ia writer',
			wait: false
		});
		return `✨ Created your new post at ${filePath} and opened it in an editor`;
	}
};
