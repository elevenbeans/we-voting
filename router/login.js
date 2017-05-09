var express = require('express');
var router = express.Router();
var request = require('request');

var serverConf = require('../serverConfig');

var config = serverConf.devConfig;

console.log('process.env.NODE_ENV in webpack config::::',process.env.NODE_ENV);

if(process.env.NODE_ENV === 'production') config = serverConf.prdConfig;

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get("/github/callback", function(req, resp){
	request(
		{
			url:'https://github.com/login/oauth/access_token',
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

router.get("/github", function(req, resp){
  var dataStr = (new Date()).valueOf();
  var path = "https://github.com/login/oauth/authorize";
  path += '?client_id='+ config.CLIENT_ID;
  path += '&scope=repo,gist';
  path += '&state='+ dataStr;
  resp.redirect(path);
});

module.exports = router;