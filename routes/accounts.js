'use strict'

var express = require('express');

var accountController = require('../controllers/accounts');

var api = express.Router();

api.get('/ver_cuentas', accountController.ver_cuentas);
api.post('/registrar_cuenta', accountController.registrar_cuenta);

module.exports = api;