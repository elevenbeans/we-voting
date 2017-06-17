
# WeVoting

[![GitHub stars](https://img.shields.io/github/stars/elevenBeans/WeVoting.svg)](https://github.com/elevenBeans/WeVoting/stargazers)
[![Build Status](https://travis-ci.org/elevenBeans/WeVoting.svg?branch=master)](https://travis-ci.org/elevenBeans/WeVoting)
[![Coverage Status](https://coveralls.io/repos/github/elevenBeans/WeVoting/badge.svg)](https://coveralls.io/github/elevenBeans/WeVoting)
[![GitHub release](https://img.shields.io/github/release/elevenBeans/WeVoting.svg)](https://github.com/elevenBeans/WeVoting/releases)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://mit-license.org)

A voting APP.

[View Demo online](https://we-voting-ele.herokuapp.com/) [看 Demo 请戳这里](https://we-voting-ele.herokuapp.com/)

**[中文介绍请点击这里 🇨🇳](http://elevenbeans.github.io/2017/05/16/%E6%92%B8%E4%BA%86%E4%B8%80%E4%B8%AA%E6%8A%95%E7%A5%A8App/)**

## Function

+ Authenticated users can：
  + create a poll with any number of possible items
  + keep their polls and come back later to access them
  + see the aggregate results of all polls（implemented using Charts）
  + vote on every polls（one time on each poll）
  + share all polls with their friends.

+ Unauthenticated users just can：
  + see the aggregate results of all polls（implemented using Charts）

## Doing list

+ Unit test (Doing)
  + Coverage to 6% *-- updated 2017-05-22*
  + Coverage to 29% *-- updated 2017-05-26*
  + Coverage to 50% *-- updated 2017-06-04*
  + Coverage to 73% *-- updated 2017-06-13*
+ Code formate (Doing)
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

## Startup

### Development mode

For *nix (including Mac),

Run `./start.sh`

Or `export NODE_ENV=dev-HMR && ./start.sh` (enable HMR).

For windows,

	npm run bundle // compile and bundle js files

	npm run start // start node server

	npm run watch // watching changes

**Don't forget to run [Mongodb](https://docs.mongodb.com/manual/mongo/) in your dev environment : )**

### Pre mode

Run `export NODE_ENV=pre && ./start.sh`.

### Production mode

Run `export NODE_ENV=production && ./start.sh`.

## Test

### Mocha + should

Run `npm run test`.

Or,

Run `npm run cover` to see test case coverage.
<img width="500px" src="https://raw.githubusercontent.com/elevenBeans/Grocery/master/unitTest.png" />

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
    |-- login.js // login routes
    |-- view.js // view routes
  |-- api.js // api controller
  |-- DBhandler.js // DataBase CRUD
|-- dist // compiled front-end code
  |-- vendor
    |-- jquery.min.js
    |-- bootstrap.min.js
    |-- bootstrap.min.css
    |-- react-dom.min.js // react-dom production version
    |-- react.min.js // react production version
  |-- loading.css
  |-- vote.bundle.js // bundled voteApp intrance file
  |-- router.bundle.js // bundled react-router
  |-- detail.chunk.js // splitted JS file in detail page
  |-- home.chunk.js // splitted JS file in home page
  |-- list.chunk.js // splitted JS file in list page
  |-- new.chunk.js // splitted JS file in new page
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
