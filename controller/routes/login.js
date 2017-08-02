var express = require('express');
var router = express.Router();

var request = require('request');

var serverConf = require('../../serverConfig');
var config = serverConf.devConfig;

var dbhandler = require('../DBhandler');

console.log('process.env.NODE_ENV in login config::::', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') config = serverConf.prdConfig;

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

var _currentPath = '';

router.get('/github/callback', function(req, resp) {
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
    function(err, response, body) {
      request(
        {
          url: config.GITHUB_API.USER_INFO + '?' + body,
          headers: {
            'User-Agent': 'request'
          }
        },
        function(error, res, data) {
          // get usrInfo
          data = JSON.parse(data);
          function toBase64(str) {
            if (typeof(str) !== 'string') str = str + '';
            var _temp = new Buffer(str);
            return _temp.toString('base64');
          }
          resp.cookie('id', toBase64(data.id), { path: '/' });
          resp.cookie('name', toBase64(data.name), { path: '/' });
          resp.cookie('email', toBase64(data.email), { path: '/' });
          resp.cookie('avatar', toBase64(data.avatar_url), { path: '/' });

          dbhandler.insertUser(data,
            function(data) {
              resp.redirect(_currentPath);
            },
            function(err) {
              if (err === 'EXIST_USER') {
                resp.redirect(_currentPath);
              } else {
                resp.send(err);
              }
            }
          );
        }
      );
    }
  );
});

router.get('/github', function(req, resp) {
  var dataStr = (new Date()).valueOf();
  var path = config.GITHUB_API.AUTHORIZE;
  path += '?client_id=' + config.CLIENT_ID;
  path += '&scope=repo,gist';
  path += '&state=' + dataStr;
  path += '&state=' + dataStr;
  _currentPath = req.query.currentPath;
  resp.redirect(path);
});

module.exports = router;
