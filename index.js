'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3789;

var uri = 'mongodb://geniuspacs:simir2017@cluster-shard-00-01-fnqzu.mongodb.net:27017,cluster-shard-00-00-fnqzu.mongodb.net:27017,cluster-shard-00-02-fnqzu.mongodb.net:27017/MyMoneyDB?ssl=true&replicaSet=Cluster-shard-0&authSource=admin';

mongoose.Promise = global.Promise;

mongoose.connect(uri)
    .then(() => {
        console.log("Conexion OK");
        app.listen(port, () => {
            console.log("El servidor local con Nodejs y Express está activo");
        });
    })
    .catch( error => {
        console.log(error);
    });