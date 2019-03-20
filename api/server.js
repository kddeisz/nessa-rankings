/* eslint-disable no-console, import/no-extraneous-dependencies */

const express = require("express");
const schools = require("./schools");

const app = express();

app.use((req, res, next) => {
  console.log(`[${new Date().toUTCString()}] ${req.method} ${req.path}`);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");

  next();
});

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(schools));
});

app.listen(3002, () => console.log("API listening on http://localhost:3002"));
