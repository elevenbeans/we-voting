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
var request = require('request');
var webpack = require('webpack');

var webpackMiddleware = require("webpack-dev-middleware");

var webpackConfig = require("./webpack.config");

var	CDN_URL = 'http://localhost:8088';
var	REDIRECT_URI = 'http://localhost:5000/login/github/callback';
var CLIENT_ID = '411b91fde0088b2efa2a';
var CLIENT_SECRET = '1aef5524c34d0f11c2441e1dce2af8afa7d39ee1';

app.set('port', (process.env.PORT || 5000));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(webpackMiddleware(webpack(webpackConfig), {
	
	headers: { "Access-Control-Allow-Origin": "*"},
	// custom headers

}));

app.use(express.static(__dirname + '/'));


if(!process.env.NODE_ENV) {process.env.NODE_ENV = 'dev-HMR';}

console.log('process.env.NODE_ENV in webpack config::::',process.env.NODE_ENV);

if(process.env.NODE_ENV === 'production') {
	CDN_URL = './';
	REDIRECT_URI = 'https://we-voting-ele.herokuapp.com/login/github/callback';
	CLIENT_ID = '7d6b761d11f8d943d54f';
	CLIENT_SECRET = '94e24dac049b6c7b3cdd754db23d6ba24a33e455';
}

app.get("/login/github/callback", function(req, resp){
	request(
		{
			url:'https://github.com/login/oauth/access_token',
			form: {
				client_id: CLIENT_ID,
				client_secret: CLIENT_SECRET,
				code: req.query.code,
				redirect_uri: REDIRECT_URI,
				state: req.query.state
			}
		},
		function(err, response, body){
			request(
				{
					url:'https://api.github.com/user?' + body,
				  headers: {
						'User-Agent': 'request'
					}
				},
				function(error, res, data){
		 			// res.send('login success');
		 			resp.send(data);
				}
			);
		}
	);
})

app.get("/login/github", function(req, resp){
  var dataStr = (new Date()).valueOf();
  var path = "https://github.com/login/oauth/authorize";
  path += '?client_id='+ CLIENT_ID;
  path += '&scope=repo,gist';
  path += '&state='+ dataStr;
  resp.redirect(path);
});

app.get('/detail', function(request, response) {
  response.render('index',{cdnUrl: CDN_URL});
});

app.get('/list', function(request, response) {
  response.render('index',{cdnUrl: CDN_URL});
});

app.get('/', function(request, response) {
  response.render('index',{cdnUrl: CDN_URL});
});
 
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});