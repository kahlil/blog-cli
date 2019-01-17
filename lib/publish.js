'use strict';

const gitRootDir = require('git-root-dir');
const git = require('simple-git');

const config = require('./config');

module.exports = async () => {
	try {
		const rootDir = await gitRootDir(config.get('path'));
		git(rootDir)
			.add(`./*`)
			.commit('new post')
			.push('origin', 'master');
	} catch (err) {
		console.log('ERROR:', err);
	}
};
