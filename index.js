
var express = require('express');
var app = express();

var compression = require('compression');
var bodyParser = require('body-parser');

var api = require('./controller/api');
var view = require('./controller/routes/view');
var login = require('./controller/routes/login');

app.set('port', (process.env.PORT || 5000));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(compression());

app.use(express.static(__dirname + '/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);
app.use('/login', login);
app.use('/', view);

if (!process.env.NODE_ENV) { process.env.NODE_ENV = 'dev-HMR'; }

module.exports = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
