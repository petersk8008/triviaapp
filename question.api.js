const express = require("express");
const questions = express.Router();
const pool = require("./connection");

function getRandomQuestions(req, res) {
  pool.query("select * from questions order by random() limit 10").then(result => {
    res.send(result.rows);
  });
}

questions.get("/questions", getRandomQuestions);

module.exports = questions;
