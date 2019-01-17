'use strict';

const open = require('opn');

const config = require('./lib/config');
const writeFile = require('./lib/write-file');
const publish = require('./lib/publish');

module.exports = async (input, flags) => {
	// Configure the path to the markdown posts.
	if (flags.path) {
		config.set('path', flags.path);
		console.log(`Saved the path \`${flags.path}\` for your blog posts`);
	}

	if (flags.editor) {
		config.set('editor', flags.editor);
		console.log(`Saved the path ${flags.editor} as your editor`);
	}

	if (flags.publish) {
		await publish();
		console.log('Your changes have been pushed');
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
		await open(filePath, {
			app: config.get('editor'),
			wait: false
		});
		console.log(`Created your new post at ${filePath} and openening it in your editor`);
	}
};
