const express = require("express");
const app = express();

const entryPoint = require("./entry").EntryPoint;

entryPoint(app);

app.listen(8000, () => {
  console.log("========app is running on port 8000======");
});
