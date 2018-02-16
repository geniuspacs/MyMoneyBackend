/* Fichero de Express */
'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargamos middlewares de body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// cargamos las rutas
var accounts_routes = require('./routes/accounts');
var users_routes = require('./routes/users');

// rutas base
app.use('/api/accounts', accounts_routes);
app.use('/api/users', users_routes);

module.exports = app;