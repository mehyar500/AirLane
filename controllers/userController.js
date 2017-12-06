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
    findByEmail: (req, res) => {
        Userdb
        .findByEmail(req.params.email)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        const user = req.body;
        console.log(user);
        Userdb.create(user)
              .then(user => {
                console.log(user);
                console.log("This is the user ID for new user:");
                console.log(user._id);
                Userdb.findById(user._id).then((user, error) => {
                    if (error) throw error;
                    console.log("NEW USER CREATED: ");
                    console.log(user);
                    //deserialize config is expecting user.userID to be accessible
                    console.log(user._id);
                    req.login({ userID: user._id }, err => {
                      res.redirect("/");
                    });
                })
                .catch(err => {
                // If an error occurred, send it to the client
                console.log(err);
                res.redirect("/");
                });
        })
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

