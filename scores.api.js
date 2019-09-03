const express = require("express");
const score = express.Router();
const pool = require("./connection");

function getScore(req, res) {
  pool.query("select * from scores order by score DESC").then(result => {
    res.send(result.rows);
  });
}

score.get("/score", getScore);


score.post("/score", (req, res) => {
  pool.query("insert into score (username, score) values ($1::text," +
    " $2::int)",
    [
      req.body.username,
      req.body.score
    ]
  )
    .then(() => {
      getScore(req, res);
    });
});

module.exports = score;
