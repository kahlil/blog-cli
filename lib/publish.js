'use strict';

const gitRootDir = require('git-root-dir');
const git = require('simple-git');

module.exports = async () => {
	try {
		const rootDir = await gitRootDir(__dirname);
		git(rootDir)
			.add(`./*`)
			.commit('new post')
			.push(['-u', 'origin', 'master'], () => console.log('✨ Your changes have been published'));
	} catch (err) {
		console.log('ERROR:', err);
	}
};
