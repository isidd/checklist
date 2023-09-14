const express = require("express");

module.exports.routeEntry = (app) => {
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: false }));
  app.use((req, res, next) => {
    next();
  });
  app.use("/api/v1", require("./routes"));
};
