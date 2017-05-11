/***

To do List:

+ create poll db
	|-- pollID (number)
	|-- title (str)
	|-- description (str)
  |-- options (array)
  	|-- optionsCtx (str)
  	|-- count (mumber)
	|-- owner (number)

+ API
	|-- GetAllPolls || GetPollsByUserID
	|-- voteByPollIDAndOptionIndex

+ verify user login status when voting

**/

var express = require('express');
var app = express();

var view = require('./controller/router/view');
var login = require('./controller/router/login');

app.set('port', (process.env.PORT || 5000));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/'));

app.use('/login', login);
app.use('/', view);

if(!process.env.NODE_ENV) {process.env.NODE_ENV = 'dev-HMR';}

 
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});