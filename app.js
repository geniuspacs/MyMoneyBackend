/* Fichero de Express */
'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargamos middlewares de body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);
});

// cargamos las rutas
var accounts_routes = require('./routes/accounts');
var users_routes = require('./routes/users');

// rutas base
app.use('/api/accounts', accounts_routes);
app.use('/api/users', users_routes);

module.exports = app;