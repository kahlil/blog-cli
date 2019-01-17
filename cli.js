#!/usr/bin/env node

'use strict';
const meow = require('meow');
const blogCli = require('.');

const options = {
	flags: {
		path: {
			type: 'string',
			alias: 'p',
			default: '.'
		},
		publish: {
			type: 'boolean',
			alias: 'pub',
			default: false
		},
		editor: {
			type: 'string',
			alias: 'e',
			default: 'ia writer'
		}
	}
};

const cli = meow(
	`
	Usage
		$ blog [slug]

	Options
		--help
		--path  ~/path/to/posts [Default: .]
		--editor 'visual studio code' [Default: 'ia writer']
		--publish [Default: true]

	Examples
		$ blog --path ~/my-blog/posts
		Saved the path \`~/my-blog/posts\` for your blog posts

		$ blog --editor 'visual studio code'
		Saved visual studio code as your editor

		$ blog my-cool-post
		Created your new post at
		/Users/username/my-blog/posts/2019-01-17-my-cool-post.md
		and openening it in your editor

		$ blog --publish
		Your changes have been pushed
	`,
	options
);

blogCli(cli.input[0], cli.flags);
