const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/votingapp");
mongoose.connection.on("error", (err) => {
  console.error(err);
  console.log("MongoDB connection error. Please make sure MongoDB is running");
})

//routes
const homeController = require("./controllers/home");
const pollController = require("./controllers/poll");

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", homeController.index);
app.get("/polls", pollController.index);
app.get("/polls/create", pollController.create);
app.post("/polls/create", pollController.postCreate);

app.listen(8080, () => console.log(`port listening on localhost:8080`));
