# WeVoting

A voting APP. 

[View it online](https://we-voting-ele.herokuapp.com/)

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

## Development mode

Run `./start.sh`

Or

Run `export NODE_ENV=dev-HMR && ./start.sh` (enable HMR).


## Production mode

Run `export NODE_ENV=production && ./start.sh`.

## Directories

```
|-- client (front-end code)
  |-- components (front-end components)
    |-- footer.jsx (public footer)
    |-- header.jsx (public header)
    |-- loading.jsx (loading amination)
    |-- spning.jsx (spning amination)
  |-- lib (front-end library)
    |-- utils.jsx
  |-- detail.jsx (detail page)
  |-- home.jsx (home page)
  |-- index.jsx (front-end intrance)
  |-- list.jsx (list page)
  |-- new.jsx (new page)
|-- controller (server-end controller)
  |-- routes
    |-- api.js (api controller)
    |-- login.js (login routes) 
    |-- view.js (view routes)
  |-- DBhandler.js (DataBase CRUD)
|-- dist (compiled front-end code)
  |-- vendor
    |-- react-dom.min.js (react-dom production version)
    |-- react.min.js (react production version)
  |-- loading.css
  |-- router.bundle.js (bundled react-router)
  |-- vote.bundle.js (bundled voteApp JS file)
|-- views (server-end views)
  |-- error.ejs
  |-- footer.ejs
  |-- header.ejs
  |-- index.ejs
|-- .gitignore
|-- Procfile (heroku file)
|-- README.md
|-- index.js (app intrance file)
|-- package.json
|-- serverConfig.js (enviroment configuration)
|-- start.sh (start file for mac)
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

## Technology stack overview
#### Server:

+ 环境：Node
+ 框架：Express
+ 工具：Request
+ 模版引擎：Ejs
+ DataBase: Mongodb

#### Front-end:

+ 语言标准：ECMAScript 6
+ 框架: React + ReactDOM + React-Router
+ 模块化：ES6 module
+ 编译构建：Webpack + Babel
+ 插件： `react-d3-components`

## LICENSE

[MIT](https://mit-license.org/)