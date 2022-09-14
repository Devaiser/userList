// app.route("/users").get(userList.listAllUsers).post(userList.createAUser);

// app.route("users/:userId").get(userList.readAUser);
"use strict";

const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.listAllUsers = function (req, res) {
  User.find({}, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.createAUser = function (req, res) {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.readAUser = function (req, res) {
  User.findById(req.params.userId, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};
