'use strict';

const gitRootDir = require('git-root-dir');
const git = require('simple-git');

module.exports = async () => {
	try {
		const rootDir = await gitRootDir(__dirname);
		console.log(rootDir);
		git(rootDir)
			.add(`./*`)
			.commit('new post')
			.push('origin', 'master');
	} catch (err) {
		console.log('ERROR:', err);
	}
};
