/***

To do List:

+ create poll db
	|-- pollID (number)
	|-- title (str)
	|-- description (str)
  |-- options (array)
  	|-- optionsCtx (str)
  	|-- count (mumber)
	|-- UserName (str)

+ API
	|-- GetAllPolls || GetPollsByUserName || GetPollByID
	|-- voteByPollIDAndOptionIndex

+ verify user login status when voting

**/

var express = require('express');
var app = express();

var compression = require('compression');

var bodyParser = require('body-parser');

var api = require('./controller/routes/api');
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

if(!process.env.NODE_ENV) {process.env.NODE_ENV = 'dev-HMR';}

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});