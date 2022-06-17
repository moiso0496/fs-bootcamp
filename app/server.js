const express = require('express');
const mongoose = require("mongoose");
const Router = require("./api/driver/db_routes")
var app = express();
var fs = require("fs");


mongoose.connect('mongodb://writter:threepoints@172.24.2.3:27017/fsd-formula1',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});