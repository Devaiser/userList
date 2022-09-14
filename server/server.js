const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const User = require("./api/models/userListModels");
const bodyParser = require("body-parser");
const routes = require("./api/routes/userListRoutes");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Userdb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);

console.log(`user list started on: ${port}`);
