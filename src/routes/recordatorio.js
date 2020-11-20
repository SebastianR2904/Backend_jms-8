const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db.js");

router.get("/RECORDATORIO", (req, res) => {
  mysqlConnection.query("SELECT * FROM `RECORDATORIO` ", (err, rows, fiels) => {
    if (err) {
      res.json(rows);
      console.error(err);
    } else {
      console.log(fiels);
    }
  });
});
module.exports = router;