'use strict';

const gitRootDir = require('git-root-dir');
const git = require('simple-git/promise');

const config = require('./config');

module.exports = async () => {
	try {
		const rootDir = await gitRootDir(config.get('path'));
		await git(rootDir).add(`./*`);
		await git(rootDir).commit('new post');
		await git(rootDir).push('origin', 'master');
	} catch (err) {
		console.log('ERROR:', err);
	}
};
