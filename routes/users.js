const express = require("express");

const router = express.Router();

const usersDetails = require("./addUsers");

router.get("/", (req, res, next) => {
  const users = usersDetails.users;
  res.render("users", { docTitle: "users" , Users : users   });
});

module.exports = router;
