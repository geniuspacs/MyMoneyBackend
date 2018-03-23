'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    surname: String,
    gender: String,
    email: String,
    password: String,
    birth_date: Date,
    premium: Boolean
});

module.exports = mongoose.model('User', UserSchema);