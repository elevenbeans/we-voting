var express = require('express');
var app = express();
var request = require('request');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/'));

var CDN_URL = '';

console.log('process.env.NODE_ENV in webpack config::::',process.env.NODE_ENV);

if(!process.env.NODE_ENV) process.env.NODE_ENV = 'dev-HMR';

if(process.env.NODE_ENV === 'dev-HMR') CDN_URL = 'http://localhost:8088';
if(process.env.NODE_ENV === 'dev') CDN_URL = 'http://localhost:8088';
if(process.env.NODE_ENV === 'prd') CDN_URL = './';

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/login/github/callback", function(req, resp){
 	//resp.send(JSON.parse(resp));
 	console.log('code:',req.query.code);
 	console.log('state:',req.query.state);

	request(
		{
			url:'https://github.com/login/oauth/access_token',
			form: {
				client_id: '7d6b761d11f8d943d54f',
				client_secret: '94e24dac049b6c7b3cdd754db23d6ba24a33e455',
				code: req.query.code,
				redirect_uri: 'https://we-voting-ele.herokuapp.com/login/github/callback',
				state: req.query.state
			}
		},
		function(err, response, body){
			console.log('body:',body);
				request(
					{
						url:'https://api.github.com/user?' + body,
					  headers: {
  						'User-Agent': 'request'
						}
					},
					function(error, res, data){
			 			// res.send('login success');
			 			resp.send('authorize success' + data);
					}
				);
		}
	);
})
// f31d8b4552f2ab834e1f9de44513db426c338fce
app.get("/login/github", function(req, resp){
  var dataStr = (new Date()).valueOf();
  var path = "https://github.com/login/oauth/authorize";
  path += '?client_id=7d6b761d11f8d943d54f';
  path += '&scope=repo,gist';
  path += '&state='+ dataStr;
  resp.redirect(path);
})

app.get("/loginSuc", function(req, resp){
  resp.send('loginSuc');
})

app.get('/', function(request, response) {
  response.render('index',{cdnUrl: CDN_URL});
});
 
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});