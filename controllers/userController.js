const Userdb = require("../models/users");


//methods to connect to mongo db
module.exports  = {
    findAll: function(req, res) {
        Userdb
        .find(console.log(res))
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        Userdb
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        Userdb
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => { console.log(err); res.status(422).json(err); });
    },
    update: function(req, res) {
        Userdb
        .findOneAndUpdate({ _id: req.params.id }, dbModel)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));;
    },
    remove: function(req, res) {
        Userdb
        .findById({ _id: req.params.id })
        .then(function(dbModel) { dbModel.remove();})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

};

