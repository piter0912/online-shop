const express = require("express");
const res = require("express/lib/response");

const router = express.Router();

router.get("/", function () {
  res.redirect("/products");
});

module.exports = router;
