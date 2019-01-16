# blog-cli [![Build Status](https://travis-ci.com/kahlil/blog-cli.svg?branch=master)](https://travis-ci.com/kahlil/blog-cli)

> A cli to create blog posts for static site generators.


## Install

```
$ npm install blog-cli
```


## Usage

```js
const blogCli = require('blog-cli');

blogCli('unicorns');
//=> 'unicorns & rainbows'
```


## API

### blogCli(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `Object`

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global blog-cli
```

```
$ blog-cli --help

  Usage
    blog-cli [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ blog-cli
    unicorns & rainbows
    $ blog-cli ponies
    ponies & rainbows
```


## License

MIT © [Kahlil Lechelt](http://kahlillechelt.com)
