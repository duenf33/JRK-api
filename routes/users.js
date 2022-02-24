const express = require("express");
const router = express.Router();
const PWC = require("../views/PeopleWithQuestions");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/contact", () => {});

module.exports = router;
