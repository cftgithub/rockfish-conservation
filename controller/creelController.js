const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Creel
      .find()
      .then(dbModel => res.json(dbModel.data))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Creel
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      db.Creel
      .create({species: req.body.species, length: req.body.length})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
      db.Creel
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Creel
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};