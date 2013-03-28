# Javascript Global Seeker

## What it does

gs.js is a tool that looks for global javascript variables that you have defined on your page. It does not return the global variables created by your browser.

## Installation and usage

Be sure to grab a phantomjs executable [here](http://phantomjs.org/download.html).

Download the scripts here LIEN.

And run the cli script :

```bash
$ phantomjs gs-cli.js url [pause]
```

For example,

```bash
$ phantomjs gs-cli.js http://wikipedia.org 1000
```

returns 

```json
["mediaWiki","mw"]
```



## How it works

### API

The gs.js uses phantomjs, to open your page, as well as an empty one. Once these pages are open, it compares the `window` objects, returning the properties that are in your page but not in the empty one.

The gs.js provides a single function, `analyse` that takes the phantomjs loaded webpage object as an argument, and returns the global variables.

### BYOS (Build Your Own Script)

While a cli script is provided, you should build your own script that suits your own case. This script might include a login process, tests on several pages etc.

## TODO

- Provide examples

## License

Released under the MIT license.