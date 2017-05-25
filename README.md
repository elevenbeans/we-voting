
# WeVoting

[![GitHub stars](https://img.shields.io/github/stars/elevenBeans/WeVoting.svg)](https://github.com/elevenBeans/WeVoting/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/elevenBeans/WeVoting.svg)](https://github.com/elevenBeans/WeVoting/network)
[![GitHub issues](https://img.shields.io/github/issues/elevenBeans/WeVoting.svg)](https://github.com/elevenBeans/WeVoting/issues)
[![GitHub release](https://img.shields.io/github/release/elevenBeans/WeVoting.svg)](https://github.com/Gaohaoyang/gaohaoyang.github.io/releases)
[![Build Status](https://travis-ci.org/elevenBeans/WeVoting.svg?branch=master)](https://travis-ci.org/elevenBeans/weVoting)
[![Coverage Status](https://coveralls.io/repos/github/elevenBeans/WeVoting/badge.svg)](https://coveralls.io/github/elevenBeans/WeVoting)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://mit-license.org)

A voting APP. [View Demo online](https://we-voting-ele.herokuapp.com/)

[Demo 看这里](https://we-voting-ele.herokuapp.com/)

**[想看中文介绍？请点击这里 🇨🇳](http://elevenbeans.github.io/2017/05/16/%E6%92%B8%E4%BA%86%E4%B8%80%E4%B8%AA%E6%8A%95%E7%A5%A8App/)**

Function list：

+ Authenticated users can：
  + create a poll with any number of possible items
  + keep their polls and come back later to access them
  + see the aggregate results of all polls（implemented using Charts）
  + vote on every polls（one time on each poll）
  + share all polls with their friends.

+ Unauthenticated users just can：
  + see the aggregate results of all polls（implemented using Charts）

**To do list:**

+ Unit test (Doing) 
  + Coverage to 6% *-- updated 2017-05-22*
+ Wechat login (Doing)
  +  developer account in applying   *-- updated 2017-05-25*
+ Code formate
+ List page data pagination

## Contributing

**I am grateful to any one for contributing bugfixes, issues and improvements～**

## Setup

+ Install node.js [Ubuntu/Mac](https://github.com/creationix/nvm) , [Windows](https://nodejs.org/en/download/)

+ Clone this project
	```
	git clone https://github.com/elevenBeans/WeVoting.git
	cd WeVoting
	```
+ Install local dependencies
	```
	npm install
	```

## Run

### Development mode

For *nix (including Mac),

Run `./start.sh`

Or `export NODE_ENV=dev-HMR && ./start.sh` (enable HMR).

For windows,

	npm run bundle // compile and bundle js files
	 
	npm run start // start node server
	
	npm run watch // watching changes

### Pre mode

Run `export NODE_ENV=pre && ./start.sh`.

### Production mode

Run `export NODE_ENV=production && ./start.sh`.

## Test

Run `npm run test`.

Or,

Run `npm run cover` to see test case coverage.


## Techstack overview

#### Server:

+ Enviroment: Node
+ Framework: [Express](http://expressjs.com/)
+ Tools: Request, compression, body-praser
+ Template engine: Ejs
+ DataBase: [Mongodb](https://www.mongodb.com/)

#### Front-end:

+ JS standard: ECMAScript 6
+ Framework: React + ReactDOM + React-Router
+ Module bundler and compiler: Webpack + Babel
+ Open source components: [react-d3-components](https://github.com/codesuki/react-d3-components)

## Directories

```
|-- client // front-end code
  |-- components // front-end components
    |-- footer.jsx // public footer
    |-- header.jsx // public header
    |-- loading.jsx // loading amination
    |-- spning.jsx // spning amination
  |-- lib // front-end library
    |-- utils.jsx
  |-- detail.jsx // detail page
  |-- home.jsx // home page
  |-- index.jsx // front-end intrance
  |-- list.jsx  // list page
  |-- new.jsx // new page
|-- controller // server-end controller
  |-- routes
    |-- api.js // api controller
    |-- login.js // login routes
    |-- view.js // view routes
  |-- DBhandler.js // DataBase CRUD
|-- dist // compiled front-end code
  |-- vendor
    |-- jquery.min.js 
    |-- bootstrap.min.js
    |-- react-dom.min.js // react-dom production version
    |-- react.min.js // react production version
  |-- loading.css
  |-- router.bundle.js // bundled react-router
  |-- vote.bundle.js // bundled voteApp JS file
|-- views // server-end views
  |-- error.ejs
  |-- footer.ejs
  |-- header.ejs
  |-- index.ejs
|-- .gitignore
|-- Procfile // heroku file
|-- README.md
|-- index.js // app intrance file
|-- package.json
|-- serverConfig.js // enviroment configuration
|-- start.sh // start file for mac
|-- webpack.config.js
```
## Pages

+ home page
   + router: `/`
   + example: `https://we-voting-ele.herokuapp.com/`
+ list page
   + router: `/list(/:name)`
   + example: `https://we-voting-ele.herokuapp.com/list`

+ detail page
   + router: `/detail(/:id)`
   + example: `https://we-voting-ele.herokuapp.com/detail/1494908221812`

+ new page
   + router: `/new`
   + example: `https://we-voting-ele.herokuapp.com/new`

## LICENSE

[MIT](https://mit-license.org/)
