#!/usr/bin/env node

'use strict';
const meow = require('meow');
const blogCli = require('.');

const cli = meow(`
	Usage
	  $ blog [slug]

	Options
		--path  ~/path/to/md/posts [Default: .]

	Examples
		$ blog --path ~/my-blog/posts
		Saved the path \`~/my-blog/posts\` for your blog posts
	  $ blog my-cool-post
		Created 2019-01-02-my-cool-post at ~/my-blog/posts
`);

blogCli(cli.input[0], cli.flags);
