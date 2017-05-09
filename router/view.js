var express = require('express');
var router = express.Router();

var serverConf = require('../serverConfig');

var config = serverConf.devConfig;

console.log('process.env.NODE_ENV in view config::::',process.env.NODE_ENV);

if(process.env.NODE_ENV === 'production') config = serverConf.prdConfig;

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/detail', throwToHome);

router.get('/list', throwToHome);

router.get('/', throwToHome);

router.get('*', throwToError);

function throwToHome(request, response){
  response.render('index',
  	{
  		cdnUrl: config.CDN_URL
  	}
  );
}
function throwToError(request, response){
  response.render('error',
  	{
  		cdnUrl: config.CDN_URL
  	}
  );
}

module.exports = router;
