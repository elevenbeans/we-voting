/***

To do List:
+ Orgnize Router
+ handle login: show login page, set login statue in cookie
+ create new user item in user db by github names
+ create poll db
+ verify user login status when create a new poll

**/

var express = require('express');
var app = express();

var index = require('./router/view');
var login = require('./router/login');

var webpack = require('webpack');
var webpackMiddleware = require("webpack-dev-middleware");
var webpackConfig = require('./webpack.config');

app.set('port', (process.env.PORT || 5000));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(webpackMiddleware(webpack(webpackConfig), {
	headers: { "Access-Control-Allow-Origin": "*"},
	// custom headers
}));

app.use(express.static(__dirname + '/'));

app.use('/', index);
app.use('/login', login);

if(!process.env.NODE_ENV) {process.env.NODE_ENV = 'dev-HMR';}

 
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});