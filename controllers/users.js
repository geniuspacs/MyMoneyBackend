'use-strict'

var Users = require('../models/users');
var bcrypt = require('bcrypt-nodejs');

function login(req, res) {
    
    var params = req.body;

    var email = params.email;
    var password = params.password;

    Users.findOne({email: email.toLowerCase()}, (error, issetUser) => {
        if (error) {
            res.status(500).send({
                message: 'Error al comprobar el usuario'
            });
        } else {
            if (issetUser) {
                bcrypt.compare(password, issetUser.password, (err, check) => {
                    if (check) {
                        res.status(200).send({issetUser});
                    } else {
                        res.status(400).send({
                            message: 'Contraseña incorrecta'
                        });
                    }
                });
            } else {
                res.status(400).send({
                    message: 'Usuario no encontrado'
                });
            }
        }
    });

}

function registrar_usuario(req, res) {
    var params = req.body;

    var user = new Users();

    console.log(params);

    if (params.name && params.surname && params.email && params.password && params.birth_date) {
        user.name = params.name;
        user.surname = params.surname;
        user.email = params.email;
        user.password = params.password; //bcrypt.hash(params.password);
        user.birth_date = params.birth_date;
        user.premium = false;

        user.save((error, userStored) => {
            if (error)  {
                res.status(500).send({
                    message: "Error al registrar la cuenta: " + JSON.stringify(error)
                });
            } else {
                if (!userStored) {
                    res.status(400).send({
                        message: "No se ha podido registrar el usuario"
                    });
                } else {
                    res.status(200).send({
                        account: userStored
                    });
                }
            }
        });

        
    } else {
        res.status(200).send({
            message: "Faltan parámetros de registro"
        });
    }

}

module.exports = {
    login,
    registrar_usuario
};