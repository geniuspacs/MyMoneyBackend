'use strict'

var express = require('express');

var userController = require('../controllers/users');

var api = express.Router();

api.post('/login', userController.login);
api.post('/registrar_usuario', userController.registrar_usuario);

module.exports = api;