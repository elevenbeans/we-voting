var express = require('express');
var router = express.Router();
var request = require('request');

var serverConf = require('../serverConfig');

var config = serverConf.devConfig;

console.log('process.env.NODE_ENV in login config::::',process.env.NODE_ENV);

if(process.env.NODE_ENV === 'production') config = serverConf.prdConfig;

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/github/callback', function(req, resp){
	request(
		{
			url: config.GITHUB_API.ACCESS_TOKEN,
			form: {
				client_id: config.CLIENT_ID,
				client_secret: config.CLIENT_SECRET,
				code: req.query.code,
				redirect_uri: config.REDIRECT_URI,
				state: req.query.state
			}
		},
		function(err, response, body){
			request(
				{
					url: config.GITHUB_API.USER_INFO + '?' + body,
				  headers: {
						'User-Agent': 'request'
					}
				},
				function(error, res, data){
		 			// resp.send(data);
		 			// console.log(data);
		 			data = JSON.parse(data);
		 			// resp.render('index', {cdnUrl: config.CDN_URL});
		 			resp.cookie('userName', data.name);
		 			resp.cookie('email', data.email);
		 			resp.cookie('avatar', data.avatar_url);

		 			resp.redirect('/');

				}
			);
		}
	);
})

router.get('/github', function(req, resp){
  var dataStr = (new Date()).valueOf();
  var path = config.GITHUB_API.AUTHORIZE;
  path += '?client_id='+ config.CLIENT_ID;
  path += '&scope=repo,gist';
  path += '&state='+ dataStr;
  resp.redirect(path);
});

module.exports = router;