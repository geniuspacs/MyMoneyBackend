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
                console.log(issetUser);
                bcrypt.compare(password, issetUser.password, (err, check) => {
                    if (check) {
                        res.status(200).send({message: "Login correcto"});
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

};

function registrar_usuario(req, res) {    
    var params = req.body;

    var user = new Users();

    if (params.user) {
        user.name = params.user.name;
        user.surname = params.user.surname;
        user.email = params.user.email;
        user.password = bcrypt.hashSync(params.user.password); //bcrypt.hash(params.user.password);
        user.birth_date = params.user.birth_date;
        user.gender = params.user.gender;
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
                        user: userStored
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