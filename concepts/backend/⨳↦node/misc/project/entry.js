const express = require("express");
const routes = require("./routes");

module.exports.EntryPoint = (app) => {
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: false }));
  app.use((req, res, next) => {
    console.log(">>>>", req.body);
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type, Authorization"
    );

    res.setHeader("Content-Type", "application/json");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
    // express().use(cookieParser());

    // Pass to next layer of middleware
    next();
    console.log("here at the middleware");
  });
  app.use("/v1/api", routes);
};
