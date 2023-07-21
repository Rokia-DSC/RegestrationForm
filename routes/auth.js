const express = require("express");
const { check, body } = require("express-validator");
const authController = require("../controllers/auth");
const router = express.Router();
// const users = [];

router.get("/signup", authController.getSignup);

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .normalizeEmail(),
    body(
      "password",
      "Please enter a password with only numbers and text and at least 5 characters."
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body("confirmPassword")
      .trim()
  ],
  authController.postSignup
);

module.exports = router;

