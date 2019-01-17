'use strict';

const open = require('opn');

const config = require('./lib/config');
const writeFile = require('./lib/write-file');
const publish = require('./lib/publish');

module.exports = async (input, flags) => {
	// Configure the path to the markdown posts.
	if (flags.path) {
		config.set('path', flags.path);
		console.log(`Saved the path\n\`${flags.path}\`\nfor your blog posts`);
		return;
	}

	if (flags.editor) {
		config.set('editor', flags.editor);
		console.log(`Saved ${flags.editor} as your editor`);
		return;
	}

	if (flags.publish) {
		await publish();
		console.log('Your changes have been pushed');
		return;
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
		const editor = config.get('editor');
		if (!editor) {
			throw new Error('No editor has been set.');
		}
		await open(filePath, {
			app: editor,
			wait: false
		});
		console.log(`Created your new post at ${filePath} and openening it in your editor`);
	}
};
