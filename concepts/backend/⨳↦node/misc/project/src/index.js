const express = require("express");
const routeEntry = require("./routeEntry").routeEntry;
const mongoose = require("mongoose");
const PORT = 8000;
const app = express();

mongoose
  .connect(
    "mongodb+srv://samuser:samma123@cluster0.ecihq.mongodb.net/testDataBase?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to database successfully"))
  .catch((err) => {
    console.log("could not connect to mongo db ");
  });
routeEntry(app);

app.listen(PORT, () => console.log("application is running on port " + PORT));
