const express = require("express");
const mysql = require("mysql");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const db = require("../config/db.js");

const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
const router = express.Router();

router.post("/s", async (req, res) => {
  console.log("bhbh");
  var request = {
    blood_group: req.body.blood_type,
    quantity: req.body.units,
    PID: req.session.user,
    accepted: 0,
  };

  await db.query(
    "INSERT INTO people SET ?",
    users,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        res.send("Request submitted");
      }
    }
  );
});
module.exports = router;
