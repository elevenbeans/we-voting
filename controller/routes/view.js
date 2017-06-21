var express = require('express');
var router = express.Router();

var serverConf = require('../../serverConfig');
var config = serverConf.devConfig;

console.log('process.env.NODE_ENV in view config::::', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'pre') config = serverConf.preConfig;
if (process.env.NODE_ENV === 'production') config = serverConf.prdConfig;

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/detail/:id', throwToHome);
router.get('/detail', throwToHome);
router.get('/list/:name', throwToHome);
router.get('/list', throwToHome);
router.get('/new', throwToHome);

router.get('/', throwToHome);

router.get('*', throwToError);

/**
 * filter array.
 * @param {obj} request The first number.
 * @param {obj} response The first number.
 */
function throwToHome(request, response) {
  response.render('index',
    {
      cdnUrl: config.CDN_URL
    }
  );
}

/**
 * filter array.
 * @param {obj} request The first number.
 * @param {obj} response The first number.
 */
function throwToError(request, response) {
  response.render('error',
    {
      cdnUrl: config.CDN_URL
    }
  );
}

module.exports = router;
