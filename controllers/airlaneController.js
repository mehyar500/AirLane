const Airlanedb = require("../models/airlane.js");

//methods to connect to mongo db
module.exports = {
  findAll: function(req, res) {
    Airlanedb.find(console.log(res))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    Airlanedb.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    Airlanedb.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  update: function(req, res) {
    Airlanedb.findOneAndUpdate({ _id: req.params.id }, dbModel)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    Airlanedb.findById({ _id: req.params.id })
      .then(function(dbModel) {
        dbModel.remove();
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
