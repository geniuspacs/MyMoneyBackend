'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = Schema({
    account_name: String,
    balance: Number,
    enable: Boolean,
    user_account: String
});

module.exports = mongoose.model('Account', AccountSchema);