"use strict";

const { Schema, model } = require("mongoose");

const User = new Schema({
  firstName: {
    type: String,
    Required: "please enter first name",
  },
  lastName: {
    type: String,
    Required: "please enter last name",
  },
  email: {
    type: String,
    Required: "please enter email",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.export = model("User", User);
