const User = require("../models/users");


//methods to connect to mongo db
module.exports  = {
    findAll: function(req, res) {
        User
        .find(console.log(res))
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        User
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("Running create");
        User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => { console.log(err); res.status(422).json(err); });
    },
    update: function(req, res) {
        User
        .findOneAndUpdate({ _id: req.params.id }, dbModel)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));;
    },
    remove: function(req, res) {
        User
        .findById({ _id: req.params.id })
        .then(function(dbModel) { dbModel.remove();})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

};

