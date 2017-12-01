const Aircraftdb = require("../models/aircrafts");

//methods to connect to mongo db
module.exports = {
  findAll: function(req, res) {
    Aircraftdb.find(console.log(res))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    Aircraftdb.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    Aircraftdb.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  update: function(req, res) {
    Aircraftdb.findOneAndUpdate({ _id: req.params.id }, dbModel)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    Aircraftdb.findById({ _id: req.params.id })
      .then(function(dbModel) {
        dbModel.remove();
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
