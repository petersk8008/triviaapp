"use strict";

const express = require("express");
const questions = require("./question.api");
const scores = require("./scores.api");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", questions);
app.use("/", scores);

const port = 8100;

app.listen(port, () => console.log(`Now listening on port: ${port}`));

module.exports = app;
