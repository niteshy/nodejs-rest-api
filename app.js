
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var port = 3001; 
var app = express();


// all environments
app.set('port', process.env.PORT || port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Define routes 
var routes = require('./routes');
var user = require('./routes/user');

app.get('/', routes.index);

app.post('/user', user.create);
app.get('/user/:id', user.get);
app.get('/users', user.gets);
app.put('/user/:id', user.update);
app.delete('/user/:id', user.remove);

var server = app.listen(port); 
console.log('Express server listening on port ' + app.get('port'));
