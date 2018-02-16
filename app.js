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

// rutas base
app.use('/api', accounts_routes);

module.exports = app;