/***
To do List:
+ Orgnize Router
+ set login statue in cookie
+ verify when create a new poll
**/

var express = require('express');
var app = express();
var request = require('request');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/'));

var	CDN_URL = 'http://localhost:8088';
var	REDIRECT_URI = 'http://localhost:5000/login/github/callback';
var CLIENT_ID = '411b91fde0088b2efa2a';
var CLIENT_SECRET = '1aef5524c34d0f11c2441e1dce2af8afa7d39ee1';

if(!process.env.NODE_ENV) {process.env.NODE_ENV = 'dev-HMR';}

console.log('process.env.NODE_ENV in webpack config::::',process.env.NODE_ENV);

if(process.env.NODE_ENV === 'production') {
	CDN_URL = './';
	REDIRECT_URI = 'https://we-voting-ele.herokuapp.com/login/github/callback';
	CLIENT_ID = '7d6b761d11f8d943d54f';
	CLIENT_SECRET = '94e24dac049b6c7b3cdd754db23d6ba24a33e455';
}

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

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