var express = require("express");
var router = express.Router();

const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello world!", user: "Charlie", added: new Date() },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "new message" });
});

module.exports = router;
