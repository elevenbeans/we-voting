var express = require('express');
var app = express();

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

app.get('/', function(request, response) {
	// response.header("Access-Control-Allow-Origin", "*");  
  response.render('index',{cdnUrl: CDN_URL});
});
 
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});