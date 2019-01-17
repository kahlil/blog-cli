# blog-cli

> A cli to create blog posts for static site generators.

This is a useful little helper if you have a Jekyll, Hugo or any other
static site generator blog that consumes Markdown files with Front Matter.

Once you configure it with the path to your Markdown files and your favorite Markdown editor
it will create Markdown files for you blog posts in that directory with the following Front Matter:

```
---
draft: true
date: 2019-01-17T09:34:49.212Z
title: ""
---
```

If you are publishing your blog by pushing to a remote Git repository you can use the
`--publish` flag to publish your blog. It will add all unstaged files, commit them with the message
`new post` and push to origin master.

## Install

```
$ npm install --global @kahlil/blog-cli
```

## Usage

```
Usage
	$ blog [slug]

Options
	--help
	--path  ~/path/to/posts [Default: .]
	--editor 'visual studio code' [Default: 'ia writer']
	--publish [Default: true]

Examples
	$ blog --path ~/my-blog/posts
	Saved the path `~/my-blog/posts` for your blog posts

	$ blog --editor '	visual studio code'
	Saved visual studio code as your editor

	$ blog my-cool-post
	Created your new post at
	/Users/username/my-blog/posts/2019-01-17-my-cool-post.md
	and openening it in your editor

	$ blog --publish
	Your changes have been pushed
```

## License

MIT © [Kahlil Lechelt](http://kahlillechelt.com)
