var express = require('express');
var router = express.Router();

var serverConf = require('../serverConfig');

var config = serverConf.devConfig;

console.log('process.env.NODE_ENV in webpack config::::',process.env.NODE_ENV);

if(process.env.NODE_ENV === 'production') config = serverConf.prdConfig;

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/detail', function(request, response) {
  response.render('index', {cdnUrl: config.CDN_URL});
});

router.get('/list', function(request, response) {
  response.render('index', {cdnUrl: config.CDN_URL});
});

router.get('/', function(request, response) {
  response.render('index', {cdnUrl: config.CDN_URL});
});

module.exports = router;
