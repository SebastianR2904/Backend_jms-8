const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db.js");

router.get("/USUARIO", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM `USUARIO_RUTINA`",
    (err, rows, fiels) => {
      if (err) {
        res.json(rows);
        console.error(err);
      } else {
        console.log(fiels);
      }
    }
  );
});

module.exports = router;
