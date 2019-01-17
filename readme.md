# blog-cli

> A cli to create blog posts for static site generators.

## Install

```
$ npm install --global @kahlil/blog-cli
```

## Usage

```
$ blog [slug]

Options
	--path  ~/path/to/posts [Default: .]
	--editor 'visual studio code' [Default: 'ia writer']
	--publish [Default: true]

Examples
	$ blog --path ~/my-blog/posts
	Saved the path \`~/my-blog/posts\` for your blog posts
	$ blog --editor 'visual studio code'
	Saved visual studio code as your editor
	$ blog my-cool-post
	Created 2019-01-02-my-cool-post at ~/my-blog/posts
	$ blog --publish
	Your changes have been pushed
```

## License

MIT © [Kahlil Lechelt](http://kahlillechelt.com)
