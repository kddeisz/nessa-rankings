const express = require("express");
const schools = require("./schools");

const app = express();

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(schools));
});

app.listen(3002, () => console.log("API listening on http://localhost:3002"));
