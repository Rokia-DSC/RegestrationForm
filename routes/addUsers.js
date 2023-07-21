const express = require("express");

const router = express.Router();

const users = [];

router.post("/addUsers", (req, res, next) => {
  users.push({ userName: req.body.userName });
  res.redirect("/");
});

router.get("/addUsers", (req, res, next) => {
  res.render("addUsers", { docTitle: "addUsers" });
});

exports.routes = router;
exports.users = users;
