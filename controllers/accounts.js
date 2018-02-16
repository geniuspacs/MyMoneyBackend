'use strict'

var Accounts = require('../models/accounts');

function ver_cuentas(req, res) {
    res.status(200).send({
        message: 'Probando el controlador de cuentas'
    });
}

function registrar_cuenta(req, res) {

    var params = req.body;

    var account = new Accounts();

    if (params.account_name && params.balance && params.user_account) {
        account.account_name = params.account_name;
        account.balance = params.balance;
        account.user_account = params.user_account;

        // guardo cuenta en BD
        account.save((error, accountStored) => {
            if (error)  {
                res.status(500).send({
                    message: "Error al registrar la cuenta: " + JSON.stringify(error)
                });
            } else {
                if (!accountStored) {
                    res.status(400).send({
                        message: "No se ha podido registrar la cuenta"
                    });
                } else {
                    res.status(200).send({
                        account: accountStored
                    });
                }
            }
        });
    } else {
        res.status(200).send({
            message: "Introduce los datos correctamente"
        });
    }
}

module.exports = {
    ver_cuentas,
    registrar_cuenta
}